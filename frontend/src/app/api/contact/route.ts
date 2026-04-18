// frontend/src/app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialiser Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);

// Type pour les données du formulaire
interface ContactFormData {
  nom: string;
  email: string;
  telephone?: string;
  sujet: string;
  message: string;
}

// Type pour la réponse de l'API
interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json() as ContactFormData;

    // Validation des champs requis
    const { nom, email, sujet, message } = body;
    
    if (!nom || !email || !sujet || !message) {
      return NextResponse.json(
        { success: false, error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Envoyer l'email via Resend
    const {  error } = await resend.emails.send({
      from: 'INFA Website <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'infamadagascar@gmail.com',
      replyTo: email,
      subject: `📩 Nouveau message : ${sujet}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #007E5E; border-bottom: 2px solid #007E5E; padding-bottom: 10px;">
            📨 Nouveau Message depuis le site INFA
          </h2>
          
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>👤 Nom :</strong> ${nom}</p>
            <p><strong>📧 Email :</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>📞 Téléphone :</strong> ${body.telephone || 'Non renseigné'}</p>
            <p><strong>📋 Sujet :</strong> ${sujet}</p>
          </div>
          
          <div style="background: #fff; padding: 15px; border-left: 4px solid #007E5E; margin: 20px 0;">
            <p><strong>💬 Message :</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
            <p>Ce message a été envoyé via le formulaire de contact du site web de l'INFA.</p>
            <p><a href="https://www.infa.mg" style="color: #007E5E;">www.infa.mg</a></p>
          </div>
        </div>
      `,
      text: `
Nouveau Message depuis le site INFA
=====================================

👤 Nom : ${nom}
📧 Email : ${email}
📞 Téléphone : ${body.telephone || 'Non renseigné'}
📋 Sujet : ${sujet}

💬 Message :
${message}

---
Ce message a été envoyé via le formulaire de contact du site web de l'INFA.
www.infa.mg
      `,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { success: false, error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }

    // ✅ Email envoyé avec succès
    return NextResponse.json({ 
      success: true, 
      message: 'Message envoyé avec succès' 
    });

  } catch (err: unknown) {
    // ✅ Type guard pour accéder à error.message en toute sécurité
    let errorMessage = 'Une erreur est survenue';
    
    if (err instanceof Error) {
      errorMessage = err.message;
    } else if (err && typeof err === 'object' && 'message' in err) {
      errorMessage = (err as { message: string }).message;
    }
    
    console.error('Erreur contact API:', err);
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage 
      },
      { status: 500 }
    );
  }
}
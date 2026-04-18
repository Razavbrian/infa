// frontend/src/app/contact/page.tsx

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import axios, { AxiosError } from 'axios';

// Type pour les données du formulaire
interface ContactFormData {
  nom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
}

// Type pour la réponse de l'API
interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Appel à notre API route qui envoie l'email via Resend
      const response = await axios.post<ApiResponse>('/api/contact', formData);
      
      if (response.data.success) {
        setSuccess(true);
        // Réinitialiser le formulaire
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          sujet: '',
          message: '',
        });
      } else {
        setError(response.data.error || 'Une erreur est survenue');
      }
    } catch (err: unknown) {
      // ✅ Type guard pour accéder à l'erreur en toute sécurité
      let errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
      
      if (err instanceof AxiosError) {
        // Erreur Axios avec réponse du serveur
        errorMessage = err.response?.data?.error || err.message || errorMessage;
      } else if (err instanceof Error) {
        // Erreur JavaScript standard
        errorMessage = err.message;
      }
      
      console.error('Erreur envoi contact:', err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-infa-fond">
      {/* Hero */}
      <section className="bg-gradient-to-r from-infa-vert to-infa-vertDark text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-montserrat mb-4"
          >
            Contactez-nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Une question ? Notre équipe est là pour vous répondre
          </motion.p>
        </div>
      </section>

      {/* Formulaire & Infos */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-card p-8"
            >
              <h2 className="text-2xl font-bold text-infa-vert mb-6">Envoyez-nous un message</h2>

              {success && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 border-l-4 border-green-500"
                >
                  <p className="font-semibold">✓ Message envoyé avec succès !</p>
                  <p className="text-sm mt-1">Nous vous répondrons sous 48h à l&apos;adresse {formData.email}</p>
                </motion.div>
              )}

              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 border-l-4 border-red-500"
                >
                  ✗ {error}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="label-field">Nom complet *</label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="input-field"
                    required
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="label-field">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    required
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="label-field">Téléphone</label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="+261 XX XX XXX XX"
                  />
                </div>

                <div>
                  <label className="label-field">Sujet *</label>
                  <select
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    className="select-field"
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="inscription">Inscription à une formation</option>
                    <option value="formation">Information sur une formation</option>
                    <option value="partenariat">Partenariat entreprise</option>
                    <option value="presse">Presse & Médias</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                <div>
                  <label className="label-field">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea-field"
                    required
                    rows={5}
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="loading-spinner w-5 h-5 border-2" />
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer le message'
                  )}
                </button>
              </form>
            </motion.div>

            {/* Informations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-card p-8">
                <h3 className="text-xl font-bold text-infa-vert mb-6">Nos Coordonnées</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-infa-vert/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-infa-vert" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Adresse</h4>
                      <p className="text-gray-600">Antananarivo, Madagascar</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-infa-vert/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-infa-vert" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">infomadagascar@gmail.com</p>
                      <p className="text-sm text-infa-vert mt-1">✉️ Réponse sous 48h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-infa-vert/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-infa-vert" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Téléphone</h4>
                      <p className="text-gray-600">+261 20 XX XXX XX</p>
                      <p className="text-sm text-gray-500">Lun-Ven: 08h-17h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-card p-8">
                <h3 className="text-xl font-bold text-infa-vert mb-6">Horaires d&apos;Ouverture</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-semibold">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-semibold">09:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="font-semibold text-gray-400">Fermé</span>
                  </div>
                </div>
              </div>

              {/* Carte (optionnelle - placeholder) */}
              <div className="bg-white rounded-2xl shadow-card overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500 text-sm">🗺️ Carte interactive à venir</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
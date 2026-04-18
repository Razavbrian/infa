'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MotDG() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Photo du DG avec nom en bas */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/DG.png"
                alt="Directeur Général INFA"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-infa-vert/30 to-transparent" />
              
              {/* ✅ NOM ET FONCTION CENTRÉS EN BAS DE LA PHOTO */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white px-4">
                <p className="font-bold text-lg drop-shadow-lg">
                  Dr Chrétien JAOROBY
                </p>
                <p className="text-sm text-white/90 drop-shadow">
                  Directeur Général de l&apos;INFA
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-infa-or/20 rounded-full blur-2xl" />
          </motion.div>

          {/* ✅ MESSAGE DU DG ENCADRÉ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Cadre autour du message */}
            <div className="border-l-4 border-infa-vert pl-6 py-4 bg-gray-50 rounded-r-xl">
              <h2 className="text-4xl font-bold font-montserrat text-infa-vert mb-6">
                Mot du Directeur Général
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  Chers futurs cadres, chers partenaires,
                </p>
                <p className="mb-4">
                  Depuis sa mutation historique en Direction Générale en 2010, l&apos;Institut National 
                  de Formation Administrative (INFA) a changé de dimension. Fort de l&apos;héritage de sept 
                  successions de leadership,  en cette 8ᵉ direction générale, l&apos;institut amorce 
                  une transformation radicale pour devenir le moteur incontournable de la modernisation 
                  de l&apos;administration publique.
                  Notre mission est claire : former des cadres moyens compétents, intègres et performants 
                  pour l&apos;ensemble des ministères, afin qu&apos;ils deviennent de véritables piliers du 
                  développement durable de notre administration. Par une formation exigeante et 
                  ancrée dans le réel, nous forgeons des experts au service public performant et centré sur l&apos;usager.
                </p>
                <p className="mb-6">
                  Parce que les besoins du secteur public évoluent, L&apos;INFA s&apos;adapte. Cette année marque 
                  également une étape majeure avec le lancement de formations à la carte, 
                  adaptées aux besoins spécifiques des ministères et des institutions publiques ; 
                  une offre flexible et ultra-spécialisée, conçue pour répondre aux défis spécifiques 
                  de chaque ministère et booster les compétences des agents en activité.
                  Notre ambition est résolument tournée vers l&apos;avenir : innover dans nos méthodes pédagogiques, 
                  moderniser nos infrastructures et hisser l&apos;INFA au rang d&apos;institut de référence nationale et régionale.
                  Nous sommes convaincus qu&apos;une administration forte repose sur des ressources humaines bien formées. 
                  À l&apos;INFA, nous formons aujourd&apos;hui les acteurs publics qui construiront l&apos;administration performante de demain.
                </p>
                {/* Signature conservée mais optionnelle puisque nom déjà sur la photo */}
                <div className="mt-8 pt-4 border-t border-gray-200">
                  <p className="font-bold text-infa-vert text-xl">
                    Dr Chrétien JAOROBY
                  </p>
                  <p className="text-gray-500">
                    Administrateur Civil en chef
                  </p>
                  <p className="text-gray-500">
                    Directeur Général de l&apos;INFA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
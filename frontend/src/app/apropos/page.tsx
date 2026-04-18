'use client';

import { motion } from 'framer-motion';
import MotDG from '@/components/sections/MotDG';
import Mission from '@/components/sections/Mission';
import Valeurs from '@/components/sections/Valeurs';

export default function AProposPage() {
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
            À Propos de l&apos;INFA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Découvrez notre histoire, notre mission et nos valeurs
          </motion.p>
        </div>
      </section>

      {/* Contenu */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-infa-vert mb-6">Notre Histoire</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">
                Érigé en Direction Générale en 2010, après avoir exercé en tant que centre de formation, 
                l’INFA consacre une réforme institutionnelle majeure dans l’architecture nationale de modernisation administrative.
              </p>
              <p className="mb-4">
                Cette évolution marque une orientation stratégique assumée : faire du développement des compétences administratives 
                un fondement essentiel de l’efficacité et de la crédibilité de l’action publique.
              </p>
              <p>
                L’INFA s’affirme aujourd’hui comme un instrument structurant du renforcement des capacités des cadres moyens 
                de l’ensemble des ministères, contribuant directement à l’amélioration durable de la gouvernance publique.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <MotDG />
      <Mission />
      <Valeurs />
    </div>
  );
}
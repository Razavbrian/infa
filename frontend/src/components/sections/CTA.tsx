'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-infa-vert to-infa-vertDark text-white">
      <div className="container-custom text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-montserrat mb-6"
        >
          Prêt à rejoindre l&apos;élite ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Les inscriptions sont ouvertes. Rejoignez l&apos;INFA et transformez votre avenir.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/formations" className="btn-secondary">
            Voir les formations disponibles
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
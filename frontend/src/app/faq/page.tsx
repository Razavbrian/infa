'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Quelles sont les conditions d'admission à l'INFA ?",
    answer: "Les conditions d'admission varient selon la formation. Généralement, un baccalauréat ou équivalent est requis pour les formations diplômantes. Consultez la page de chaque formation pour les détails spécifiques."
  },
  {
    question: "Comment s'inscrire à une formation ?",
    answer: "Les inscriptions se font en ligne via notre site web ou directement à notre secrétariat. Vous devrez fournir les documents requis (diplômes, pièces d'identité, etc.) et payer les frais d'inscription."
  },
  {
    question: "Quels sont les frais de formation ?",
    answer: "Les frais varient selon le type de formation (diplomante, certifiante ou continue). Contactez-nous pour obtenir un devis personnalisé ou consultez la page de la formation qui vous intéresse."
  },
  {
    question: "L'INFA propose-t-il des formations à distance ?",
    answer: "Oui, certaines formations sont disponibles en mode hybride ou à distance. Renseignez-vous auprès de notre équipe pédagogique pour connaître les options disponibles."
  },
  {
    question: "Comment obtenir une attestation de formation ?",
    answer: "Les attestations sont délivrées automatiquement après validation de la formation. Pour les duplicatas, contactez le secrétariat avec votre numéro d'étudiant."
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            FAQ - Questions Fréquentes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Trouvez les réponses à vos questions
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-infa-vert transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Vous n&apos;avez pas trouvé la réponse à votre question ?</p>
            <a href="/contact" className="btn-primary">
              Contactez-nous
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
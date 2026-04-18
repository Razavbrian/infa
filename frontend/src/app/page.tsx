// frontend/src/app/page.tsx

import Hero from '@/components/sections/Hero';
import MotDG from '@/components/sections/MotDG';
import Mission from '@/components/sections/Mission';
import Valeurs from '@/components/sections/Valeurs';
import FormationsPreview from '@/components/sections/FormationsPreview';
import CalendrierExamensPreview from '@/components/sections/CalendrierExamensPreview';
import ResultatsExamensPreview from '@/components/sections/ResultatsExamensPreview';
import EspaceProfessionnels from '@/components/sections/EspaceProfessionnels';
import ActualitesPreview from '@/components/sections/ActualitesPreview';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <MotDG />
      <Mission />
      <Valeurs />
      <FormationsPreview />
      {/* ✅ Section Calendrier Examens (Public) */}
      <CalendrierExamensPreview />
      {/* ✅ Section Résultats Examens (Public) */}
      <ResultatsExamensPreview />
      <EspaceProfessionnels />
      <ActualitesPreview />
      <CTA />
    </>
  );
}
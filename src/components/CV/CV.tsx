import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import CertificationBadge from "./CertificationBadge";

export default function CV() {
  return (
    <section id="cv" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Curriculum Vitae</h2>
            {/* TODO: re-add CV download link once Nick supplies a fresh general-purpose PDF (v8-aligned) */}
          </div>
          <div className="space-y-12">
            <EducationSection />
            <ExperienceSection />
            <CertificationBadge />
            <SkillsSection/>
          </div>
        </div>
      </section>
  );
}

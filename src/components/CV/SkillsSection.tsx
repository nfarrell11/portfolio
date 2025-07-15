import SkillsBlock from "./SkillsBlock";

const developerSkills = [
  "Java",
  "JSP",
  "Typescript",
  "React",
  "Next.js App Router",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MS SQL Server",
  "JUnit 5",
  "Eclipse",
  "Git",
  "Maven"
]

const managementSkills = [
  "Trello",
  "Google Workspace",
  "Office 365",
  "Excel",
  "Professional Scrum Master™ I - Scrum.org"
]

const museumSkills = [
  "Painting",
  "Sculpture",
  "Lithography",
  "Installation",
  "Packing",
  "Crating",
  "Transportation",
  "Forklift - 5 years",
  "Quality Assurance",
]

const hospitalitySkills = [
  "Responsible Beverage Service",
  "Craft Beer",
  "Staff Training",
  "Service Manager",
  "Shift Report",
  "Storytelling",
  "Sales"
]

export default function SkillsSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h4 className="font-semibold mb-3">Web Application Development</h4>
        <SkillsBlock tags={developerSkills} colorClass="bg-blue-100 text-blue-800" />
      </div>
      <div>
        <h4 className="font-semibold mb-3">Museum Exhibitions & Collections</h4>
        <SkillsBlock tags={museumSkills} colorClass="bg-purple-100 text-purple-800" />
      </div>
      <div>
        <h4 className="font-semibold mb-3">Project Management</h4>
        <SkillsBlock tags={managementSkills} colorClass="bg-green-100 text-green-800" />
      </div>
      <div>
        <h4 className="font-semibold mb-3">Museum Exhibitions & Collections</h4>
        <SkillsBlock tags={hospitalitySkills} colorClass="bg-red-100 text-red-800" />
      </div>
    </div>
  );
}

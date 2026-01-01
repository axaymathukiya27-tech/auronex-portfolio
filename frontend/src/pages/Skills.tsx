import { Code, Server, Wrench, BarChart3, Database} from "lucide-react";
import SkillCategory from "@/components/SkillCategory";
import SectionHeading from "@/components/SectionHeading";

const SkillCategories = [
  {
    title: "Data Analysis",
    icon: Code,
    skills: [
      { name: "Python", level: 80 },
      { name: "Pandas", level: 80 },
      { name: "NumPy", level: 60 },
      { name: "Matplotlib", level: 75 },
      { name: "Seaborn", level: 80 },
    ],
  },
  {
    title: "Machine Learning",
    icon: Server,
    skills: [
      { name: "Scikit-learn", level: 85 },
      { name: "Regression Models", level: 70 },
      { name: "Classification", level: 65 },
      { name: "Feature Engineering", level: 70 },
    ],
  },
  {
    title: "Data Visualization",
    icon: BarChart3, 
    skills: [
      { name: "Python (Matplotlib, Seaborn)", level: 90 },
      { name: "Power BI", level: 75 },
      { name: "Tableau", level: 55 },
      { name: "Dashboard Design", level: 75 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 55 },
      { name: "MongoDB", level: 60 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 75 },
      { name: "Jupyter Notebook", level: 85 },
      { name: "Streamlit", level: 70 },
    ],
  },
];


const Skills = () => {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-16">
        <div className="container mx-auto px-6">

          {/* Heading */}
          <div className="animate-fade-up text-center">
            <SectionHeading
              title="Skills & Expertise"
              subtitle="Technologies and tools I use to bring ideas to life"
            />

            <p className="mt-2 text-sm text-gray-400 max-w-xl mx-auto">
              Skill levels represent hands-on project experience and continuous learning.
            </p>
          </div>

          {/* Skill Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
            {SkillCategories.map((category, index) => (
              <div
                key={category.title}
                className="animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <SkillCategory {...category} />
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
};

export default Skills;

import { Code, Server, Wrench, BarChart3, Database, Brain } from "lucide-react";
import SkillCategory from "@/components/SkillCategory";
import SectionHeading from "@/components/SectionHeading";

const SkillCategories = [
  {
    title: "Data Analysis & Processing",
    icon: Code,
    skills: [
      { name: "Python", level: 85 },
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 70 },
      { name: "Data Cleaning", level: 85 },
      { name: "Exploratory Data Analysis (EDA)", level: 80 },
    ],
  },
  {
    title: "Machine Learning",
    icon: Brain,
    skills: [
      { name: "Scikit-learn", level: 85 },
      { name: "Regression Models", level: 75 },
      { name: "Classification Models", level: 70 },
      { name: "Feature Engineering", level: 80 },
      { name: "Model Evaluation & Tuning", level: 75 },
    ],
  },
  {
    title: "Data Visualization & BI",
    icon: BarChart3,
    skills: [
      { name: "Matplotlib & Seaborn", level: 90 },
      { name: "Power BI", level: 80 },
      { name: "Tableau", level: 60 },
      { name: "Dashboard Design", level: 80 },
      { name: "Business Insights Reporting", level: 75 },
    ],
  },
  {
    title: "Databases & Data Storage",
    icon: Database,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "Data Modeling", level: 70 },
    ],
  },
  {
    title: "Development & Deployment Tools",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "Streamlit", level: 75 },
      { name: "Project Structuring", level: 80 },
    ],
  },
  {
    title: "Backend & Systems",
    icon: Server,
    skills: [
      { name: "Node.js (Basics)", level: 60 },
      { name: "REST APIs", level: 65 },
      { name: "System Design (Basics)", level: 60 },
      { name: "End-to-End ML Systems", level: 75 },
    ],
  },
];

const Skills = () => {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-16">
        <div className="container mx-auto px-6">

          {/* Heading */}
          <div className="animate-fade-up text-center mb-12">
            <SectionHeading
              title="Skills & Expertise"
              subtitle="Technologies, tools, and engineering skills I use to build real-world data & ML systems"
            />

            <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
              These skill levels reflect hands-on project experience, not just theoretical knowledge. 
              I focus on building complete, production-style systems — from data to deployment.
            </p>
          </div>

          {/* Skill Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    title: "E-Commerce Sales Analysis",
    description: "Analyzed 12,000+ e-commerce transactions to identify revenue trends, customer behavior, and seasonal patterns. Built actionable insights to support data-driven business decisions.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/axaymathukiya27-tech/ecommerce-sales-analysis",
  },
  {
    title: "Real Estate Investment Advisor",
    description: "End-to-end machine learning system that analyzes real estate data to predict property investment potential and future prices. Built with a full ML pipeline including data preprocessing, feature engineering, model training, and an interactive Streamlit dashboard.",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Streamlit"],
    githubUrl: "https://github.com/axaymathukiya27-tech/Real_Estate_Investment_Advisor",
  },
  {
    title: "Bike Buyer Analysis Dashboard",
    description: "Comprehensive data analysis project analyzing customer demographics and purchasing behavior to identify high-value buyer segments. Built using Excel with advanced data cleaning, pivot analysis, and interactive dashboards for business insights.",
    techStack: ["Excel","Pivot Tables","Data Cleaning","Data Analysis","Business Intelligence"],
    githubUrl: "https://github.com/axaymathukiya27-tech/Bike_Buyer_Analysis",
  },
];

const Projects = () => {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="animate-fade-up">
            <SectionHeading
              title="My Projects"
              subtitle="A collection of projects that showcase my skills and passion for building great software"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`animate-fade-up delay-${Math.min((index + 1) * 100, 600)}`}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;

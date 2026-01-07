import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { Home, TrendingDown, ShoppingCart, Plane, Bike } from "lucide-react";

/* =========================
   PROJECT DATA
========================= */
const projects = [
  {
    title: "Real Estate Investment Advisor (ML System)",
    description:
      "An end-to-end machine learning system that analyzes real estate data to predict property investment potential and future prices. Includes a complete ML pipeline with data preprocessing, feature engineering, model training, evaluation, and an interactive Streamlit dashboard.",
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Streamlit",
      "MLflow",
    ],
    githubUrl: "https://github.com/axaymathukiya27-tech/Real_Estate_Investment_Advisor",
    icon: <Home size={22} />,
  },
  {
    title: "Customer Churn Prediction System",
    description:
      "A machine learning system that predicts whether a customer is likely to churn using historical usage and behavioral data. Includes data preprocessing, feature engineering, multiple model comparison, evaluation metrics, and model persistence.",
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Imbalanced-learn",
      "Matplotlib",
      "Seaborn",
    ],
    githubUrl: "https://github.com/axaymathukiya27-tech/Customer_Churn_Analysis",
    icon: <TrendingDown size={22} />,
  },
  {
    title: "E-Commerce Sales Analysis",
    description:
      "Analyzed 12,000+ e-commerce transactions to identify revenue trends, customer behavior, and seasonal patterns. Built actionable business insights using data analysis, visualization, and KPI tracking to support data-driven decision making.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/axaymathukiya27-tech/ecommerce-sales-analysis",
    icon: <ShoppingCart size={22} />,
  },
  {
    title: "British Airways Customer Satisfaction Analysis",
    description:
      "Business intelligence and data analysis project focused on understanding customer satisfaction drivers in airline services. Includes data cleaning, exploratory analysis, KPI analysis, and dashboard-style insights for business decision support.",
    techStack: [
      "Python",
      "Pandas",
      "Data Analysis",
      "Visualization",
      "Business Intelligence",
    ],
    githubUrl: "https://github.com/axaymathukiya27-tech/BA_Customer_Satisfaction_Analysis",
    icon: <Plane size={22} />,
  },
  {
    title: "Bike Buyer Analysis Dashboard",
    description:
      "A comprehensive data analysis project analyzing customer demographics and purchasing behavior to identify high-value buyer segments. Built using Excel with advanced data cleaning, pivot tables, and interactive dashboards for business insights.",
    techStack: [
      "Excel",
      "Pivot Tables",
      "Data Cleaning",
      "Data Analysis",
      "Business Intelligence",
    ],
    githubUrl: "https://github.com/axaymathukiya27-tech/Bike_Buyer_Analysis",
    icon: <Bike size={22} />,
  },
];

/* =========================
   STATS BAR
========================= */
const StatsBar = () => {
  const stats = [
    { label: "Largest Dataset Size", value: "250,000+ rows" },
    { label: "Large Real-World Datasets", value: "Multiple" },
    { label: "End-to-End Projects", value: "6+" },
    { label: "Dashboards / Apps", value: "5+" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-20">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="glass rounded-xl p-6 text-center border border-white/5 hover:border-primary/40 transition hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.4)]"
        >
          <div className="text-3xl font-bold text-primary mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};


/* =========================
   MAIN PAGE
========================= */
const Projects = () => {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="My Projects"
            subtitle="A collection of real-world projects showcasing my skills in Data Science and Machine Learning"
          />

          {/* 🔥 DIFFERENTIATOR SECTIONS */}
          <StatsBar />

          {/* PROJECT GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`animate-fade-up delay-${Math.min(
                  (index + 1) * 100,
                  600
                )}`}
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

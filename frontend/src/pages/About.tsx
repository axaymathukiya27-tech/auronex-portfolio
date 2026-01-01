import { Target, Lightbulb, Rocket, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const timeline = [
  {
    year: "Early 2024",
    title: "Started Data Science Journey",
    description:
      "Began learning Python, data analysis fundamentals, and statistics with a strong focus on problem-solving and logical thinking."
  },
  {
    year: "Mid 2024",
    title: "Data Analysis & Visualization",
    description:
      "Worked on real-world datasets using Pandas, NumPy, SQL, and built dashboards with Power BI to extract actionable insights."
  },
  {
    year: "Early 2025",
    title: "Machine Learning & Projects",
    description:
      "Built machine learning models, performed feature engineering, and developed end-to-end data science projects."
  },
  {
    year: "End 2025",
    title: "Data Science Internship",
    description:
      "Currently working as a Data Science Intern, applying ML, analytics, and visualization skills to real business problems."
  }
];


const values = [  
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Building data-driven solutions that solve real-world problems and create measurable impact.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Continuously exploring new tools, techniques, and research to stay ahead in data science and analytics.",
  },
  {
    icon: Rocket,
    title: "Excellence",
    description: "Delivering accurate, scalable, and well-structured solutions with a strong focus on quality and performance.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-up">
              <SectionHeading
                title="About Me"
                subtitle="A passionate software engineer dedicated to creating exceptional digital experiences"
              />
            </div>

            <div className="animate-fade-up delay-100 glass rounded-3xl p-8 md:p-12 mt-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a data scientist focused on transforming raw data into actionable insights. 
                With experience in data analysis, machine learning, and visualization, 
                I enjoy solving real-world problems and helping teams make smarter, data-driven decisions.

              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I’m passionate about continuous learning, building reliable models, 
                and turning complex data into clear, impactful stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="animate-fade-up">
            <SectionHeading title="Core Values" subtitle="The principles that guide my work" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`animate-fade-up delay-${(index + 1) * 100} glass rounded-2xl p-8 text-center hover:border-primary/30 transition-all duration-500`}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="animate-fade-up">
            <SectionHeading title="My Journey" subtitle="A timeline of growth and achievements" />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`animate-fade-up delay-${(index + 1) * 100} relative flex flex-col md:flex-row gap-4 md:gap-8 mb-8 last:mb-0`}
                >
                  <div className="md:w-1/2 md:text-right md:pr-8">
                    <span className="inline-block md:hidden text-primary font-bold text-lg mb-2">
                      {item.year}
                    </span>
                    <div className="glass rounded-xl p-6 md:ml-0 ml-10 hover:border-primary/30 transition-all duration-300">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-8 w-3 h-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background" />

                  <div className="hidden md:block md:w-1/2 md:pl-8">
                    <span className="inline-flex items-center gap-2 text-primary font-bold text-lg">
                      <GraduationCap className="h-5 w-5" />
                      {item.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

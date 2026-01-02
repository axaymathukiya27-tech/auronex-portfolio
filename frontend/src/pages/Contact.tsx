import { useState } from "react";
import { Send, Mail, MapPin, Clock, Github, Linkedin} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "@/components/SectionHeading";

const API_URL =
  import.meta.env.VITE_API_URL?.trim() ||
  "https://auronex-backend.onrender.com";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "auronex.contact@gmail.com",
    href: "mailto:auronex.contact@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ahmedabad, Gujarat, India",
  },
  {
    icon: Clock,
    label: "Timezone",
    value: "IST (UTC +5:30)",
  },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/axaymathukiya27-tech",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/axay-mathukiya-a6989b308/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=auronex.contact@gmail.com",
    label: "Email",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000); // 10 sec timeout

      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Server error");
      }

      toast({
        title: "Message sent successfully!",
        description: "I’ll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact error:", error);
      toast({
        title: "Failed to send message",
        description:
          "Server is not responding. Please try again in a few seconds.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-24">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="animate-fade-up">
            <SectionHeading
              title="Get In Touch"
              subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-up delay-100">
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hi..."
                      rows={5}
                      required
                      className="bg-secondary/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-up delay-200 space-y-6">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-secondary">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl glass hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-8 border-primary/20">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Let's Work Together
                </h3>
                <p className="text-muted-foreground">
                  I'm currently available for freelance projects and full-time
                  opportunities. If you have an interesting project, I'd love to
                  hear about it!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

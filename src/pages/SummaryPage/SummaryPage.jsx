import React, { useEffect, useRef, useState } from "react";
import { Link } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Search,
  Users,
  Bell,
  UserPlus,
  Target,
  Briefcase,
  Star,
  FileText,
  ChevronRight,
  Rocket,
  Award,
  BookOpen,
  GraduationCap,
  Building2,
  MapPin,
  DollarSign,
} from "lucide-react";
import "./SummaryPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const SummaryPage = () => {
  // Animated Counter Component Logic
  const AnimatedCounter = ({ end, duration, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    useEffect(() => {
      if (inView) {
        let startTime;
        const startValue = 0;

        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = (currentTime - startTime) / duration;

          if (progress < 1) {
            setCount(Math.floor(startValue + (end - startValue) * progress));
            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        };

        requestAnimationFrame(animate);
      }
    }, [inView, end, duration]);

    return (
      <span ref={ref} className="animated-counter">
        {count}
        {suffix}
      </span>
    );
  };

  // Particles Background Logic
  const ParticlesBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = [];
      const particleCount = 100;

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 2;
          this.speedX = Math.random() * 0.5 - 0.25;
          this.speedY = Math.random() * 0.5 - 0.25;
          this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x > canvas.width) this.x = 0;
          if (this.x < 0) this.x = canvas.width;
          if (this.y > canvas.height) this.y = 0;
          if (this.y < 0) this.y = canvas.height;
        }

        draw() {
          ctx.fillStyle = `rgba(100, 255, 218, ${this.opacity})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle) => {
          particle.update();
          particle.draw();
        });
        requestAnimationFrame(animate);
      };

      animate();

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <canvas ref={canvasRef} className="particles-canvas" />;
  };

  // Features Data
  const features = [
    {
      icon: <Search className="feature-icon" />,
      title: "Your Resume is Seen by Employers",
      description:
        "75% of employers actively search for candidates on our platform. Increase your chances of getting noticed.",
      percentage: 75,
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Find Jobs Matching Your Skills",
      description:
        "Over 90% of job postings are matched with relevant resumes. Get job recommendations that fit your profile.",
      percentage: 90,
    },
    {
      icon: <Bell className="feature-icon" />,
      title: "Receive Personalized Job Alerts",
      description:
        "Get alerts for jobs that match your profile and never miss out on a new opportunity.",
      percentage: 85,
    },
  ];

  // Process Steps Data
  const steps = [
    {
      icon: <UserPlus />,
      number: "01",
      title: "Register",
      description:
        "Create your account to access all features on Student's Job",
    },
    {
      icon: <Target />,
      number: "02",
      title: "Define Your Goals",
      description: "Specify your career objectives and desired roles",
    },
    {
      icon: <Briefcase />,
      number: "03",
      title: "Start Your Journey",
      description: "Begin applying to positions that match your profile",
    },
    {
      icon: <Star />,
      number: "04",
      title: "Succeed",
      description: "Land your dream job and start your career",
    },
  ];

  // Statistics Data
  const statistics = [
    { value: 250000, suffix: "+", label: "Active Job Listings" },
    { value: 1500, suffix: "+", label: "Partner Companies" },
    { value: 95, suffix: "%", label: "Success Rate" },
    { value: 50000, suffix: "+", label: "Successful Placements" },
  ];

  // Featured Jobs Data
  const featuredJobs = [
    {
      title: "Software Engineer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      salary: "$120K - $150K",
      type: "Full-time",
      skills: ["React", "Node.js", "TypeScript"],
    },
    {
      title: "UX Designer",
      company: "Creative Studios",
      location: "New York, NY",
      salary: "$90K - $120K",
      type: "Full-time",
      skills: ["Figma", "Adobe XD", "UI Design"],
    },
    {
      title: "Data Analyst",
      company: "Data Insights Co.",
      location: "Chicago, IL",
      salary: "$80K - $100K",
      type: "Remote",
      skills: ["SQL", "Python", "Tableau"],
    },
  ];

  // Success Stories Data
  const successStories = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      company: "Google",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      quote:
        "Student's Job helped me land my dream role at Google. The platform's resources were invaluable.",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "Amazon",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      quote:
        "The career guidance and job matching features were exactly what I needed to transition into product management.",
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist",
      company: "Microsoft",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      quote:
        "From interview prep to salary negotiation, Student's Job supported me every step of the way.",
    },
  ];

  return (
    <div className="summary-page">
      <ParticlesBackground />
      <Navbar />

      {/* {summarybg} */}
      <section className="summary-pg-name-pic">
        <div className="summary-pg-name-hero-content summary-pg-name-container">
          <h1>Create Your Future with Student's Job</h1>
          <p>
            Find your dream job by creating your resume with Student's Job — the
            leading platform for students and graduates.
          </p>

          <div className="summary-pg-name-search-container">
            <div className="summary-pg-name-search-box">
              <Search className="summary-pg-name-search-icon" />
              <input type="text" placeholder="Search for your dream job..." />
              <button className="summary-pg-name-btn-primary">Search</button>
            </div>

            <div className="summary-pg-name-popular-searches">
              <span>Popular searches:</span>
              <div className="summary-pg-name-search-tags">
                <button>Software Developer</button>
                <button>Data Analyst</button>
                <button>UI/UX Designer</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="summary-pg-name-statistics summary-pg-name-section">
        <div className="summary-pg-name-container">
          <div className="summary-pg-name-statistics-grid">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                className="summary-pg-name-stat-card summary-pg-name-glass-effect"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AnimatedCounter
                  end={stat.value}
                  duration={2000}
                  suffix={stat.suffix}
                />
                <h3>{stat.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="summary-pg-name-features summary-pg-name-section">
        <div className="summary-pg-name-container">
          <motion.h2
            className="summary-pg-name-section-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Student's Job?
          </motion.h2>
          <motion.div
            className="summary-pg-name-features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="summary-pg-name-feature-card summary-pg-name-glass-effect"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="summary-pg-name-feature-header">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <AnimatedCounter
                    end={feature.percentage}
                    duration={2000}
                    suffix="%"
                  />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="summary-pg-name-process-steps summary-pg-name-section">
        <div className="summary-pg-name-container">
          <motion.h2
            className="summary-pg-name-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          <motion.div className="summary-pg-name-steps-container">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="summary-pg-name-step-card summary-pg-name-glass-effect"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="summary-pg-name-step-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {step.icon}
                </motion.div>
                <motion.div
                  className="summary-pg-name-step-number"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {step.number}
                </motion.div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="summary-pg-name-step-progress-bar" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="summary-pg-name-featured-jobs summary-pg-name-section">
        <div className="summary-pg-name-container">
          <motion.h2
            className="summary-pg-name-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Job Opportunities
          </motion.h2>
          <div className="summary-pg-name-jobs-grid">
            {featuredJobs.map((job, index) => (
              <motion.div
                key={index}
                className="summary-pg-name-job-card summary-pg-name-glass-effect"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="summary-pg-name-job-header">
                  <h3>{job.title}</h3>
                  <span className="summary-pg-name-job-type">{job.type}</span>
                </div>
                <div className="summary-pg-name-job-company">
                  <Building2 size={18} />
                  <span>{job.company}</span>
                </div>
                <div className="summary-pg-name-job-details">
                  <div className="summary-pg-name-job-location">
                    <MapPin size={18} />
                    <span>{job.location}</span>
                  </div>
                  <div className="summary-pg-name-job-salary">
                    <DollarSign size={18} />
                    <span>{job.salary}</span>
                  </div>
                </div>
                <div className="summary-pg-name-job-skills">
                  {job.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="summary-pg-name-skill-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <button className="summary-pg-name-btn-apply">Apply Now</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Highlight Section */}
      <section className="summary-pg-name-resume-highlight summary-pg-name-section">
        <div className="summary-pg-name-container">
          <div className="summary-pg-name-resume-content summary-pg-name-glass-effect">
            <div className="summary-pg-name-resume-text">
              <h2>Why Upload Your Resume?</h2>
              <p>
                A resume is your gateway to opportunities. Let employers
                discover your potential and find the perfect match for your
                skills.
              </p>
              <button className="summary-pg-name-btn-primary">
                Upload Resume <ChevronRight size={20} />
              </button>
            </div>
            <div className="summary-pg-name-resume-icon">
              <FileText size={120} />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="summary-pg-name-success-stories summary-pg-name-section">
        <div className="summary-pg-name-container">
          <motion.h2
            className="summary-pg-name-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Success Stories
          </motion.h2>
          <div className="summary-pg-name-stories-grid">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="summary-pg-name-story-card summary-pg-name-glass-effect"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="summary-pg-name-story-image">
                  <img src={story.image} alt={story.name} />
                </div>
                <div className="summary-pg-name-story-content">
                  <h3>{story.name}</h3>
                  <div className="summary-pg-name-story-role">
                    <GraduationCap size={18} />
                    <span>{story.role}</span>
                  </div>
                  <div className="summary-pg-name-story-company">
                    <Building2 size={18} />
                    <span>{story.company}</span>
                  </div>
                  <p className="summary-pg-name-story-quote">{story.quote}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="summary-pg-name-benefits summary-pg-name-section">
        <div className="summary-pg-name-container">
          <motion.h2
            className="summary-pg-name-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Join Student's Job
          </motion.h2>
          <div className="summary-pg-name-benefits-grid">
            <motion.div
              className="summary-pg-name-benefit-card summary-pg-name-glass-effect"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Rocket className="summary-pg-name-benefit-icon" />
              <h3>Career Growth</h3>
              <p>
                Access exclusive opportunities and accelerate your career path
              </p>
            </motion.div>
            <motion.div
              className="summary-pg-name-benefit-card summary-pg-name-glass-effect"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Award className="summary-pg-name-benefit-icon" />
              <h3>Industry Recognition</h3>
              <p>Get certified and build credibility in your field</p>
            </motion.div>
            <motion.div
              className="summary-pg-name-benefit-card summary-pg-name-glass-effect"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <BookOpen className="summary-pg-name-benefit-icon" />
              <h3>Learning Resources</h3>
              <p>Access comprehensive learning materials and workshops</p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SummaryPage;

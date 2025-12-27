import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, MapPin, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { ResumeChooser } from "@/components/resume-chooser"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Portfolio() {
  const coursework = [
    "Data Structures",
    "Computer Networks",
    "Computer Graphics",
    "Internet of Things (IoT)",
    "Data Mining",
    "Database Management",
    "Operating Systems",
    "System Design",
    "High Performance Computing",
    "Compiler Design",
    "Deep Learning",
    "Blockchain",
    "Full Stack Development",
    "Software Engineering",
    "Natural Language Processing",
    "Ethical Artificial Intelligence",
    "Rapid Prototyping",
    "Artificial Intelligence",
  ]

  const purdueCoursework = [
    "Design and Analysis of Algorithms",
    "Natural Language Processing",
    "Software Engineering",
    "Ethical Artificial Intelligence",
    "Full Stack Web Development",
    "Database Systems",
    "Deep Learning",
    "Software Design",
    "Low Code / No Code Rapid Prototyping",
  ]

  const nitCoursework = [
    "Engineering Graphics",
    "Digital System Design",
    "Discrete Structures",
    "Theory of Computation",
    "Operating System",
    "Computer Architecture",
    "Microprocessors and Microcontrollers",
    "Computer Graphics",
    "Computer Networks",
    "Soft Computing",
    "Data Mining",
    "High Performance Computing",
    "Compiler Design",
    "Information Theory and Coding",
    "Artificial Intelligence",
    "Web Technology",
    "Internet of Things (IoT)",
    "Blockchain and Applications",
    "Deep Learning",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-4 max-w-6xl">
          <Link href="/" className="text-xl font-bold">
            Raghu Hasan
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link
              href="#coursework"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Coursework
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile nav */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="bg-transparent" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pt-12">
                <div className="px-4">
                  <p className="text-lg font-semibold">Menu</p>
                  <div className="mt-6 flex flex-col gap-2">
                    <SheetClose asChild>
                      <Link href="#about" className="rounded-md px-3 py-2 text-base font-medium hover:bg-accent">
                        About
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="#coursework" className="rounded-md px-3 py-2 text-base font-medium hover:bg-accent">
                        Coursework
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="#experience" className="rounded-md px-3 py-2 text-base font-medium hover:bg-accent">
                        Experience
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="#projects" className="rounded-md px-3 py-2 text-base font-medium hover:bg-accent">
                        Projects
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="#contact" className="rounded-md px-3 py-2 text-base font-medium hover:bg-accent">
                        Contact
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-32 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 text-sm">
              <span className="font-medium text-muted-foreground">I'm</span>
            </div>
            <h1 className="text-6xl font-bold mb-4 leading-tight">
              Raghu Hasan Bokam
              <span className="text-orange-500">,</span>
            </h1>
            <p className="text-2xl mb-6 leading-relaxed">
              A Software Engineer situated in{" "}
              <span className="inline-flex items-center gap-1 font-semibold text-orange-600">
                <MapPin className="h-5 w-5" />
                United States of America
              </span>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              New Grad Software Engineer with expertise in backend development, scalable architecture, and distributed
              systems. Delivering robust REST APIs, orchestrated containerized deployments, and driving technical
              automation.
            </p>
            <div className="flex items-center gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <ResumeChooser
                className="bg-transparent"
                seHref="/resume/Raghu_Hasan_Resume_SE.pdf"
                aiHref="/resume/Raghu_Hasan_Resume_AI.pdf"
              />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl flex items-center justify-center">
              <img
                  src="/logos/RaghuHasan.jpg"
                alt="Raghu Hasan"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              My Technical
              <span className="block text-orange-500">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specializing in backend development, cloud infrastructure, and machine learning solutions. Delivering
              scalable, production-ready applications with modern technologies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-orange-200 dark:hover:border-orange-800/50 transition-colors">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/backend-server-architecture-illustration.jpg"
                    alt="Backend Development"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Backend Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building scalable REST APIs using GoLang, Python, and modern frameworks. Expertise in distributed
                  systems and microservices architecture.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-orange-200 dark:hover:border-orange-800/50 transition-colors">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/cloud-infrastructure-kubernetes-docker.jpg"
                    alt="Cloud & DevOps"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Cloud & DevOps</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Orchestrating Kubernetes clusters, Docker containerization, and AWS deployments. Configuring secure
                  cloud infrastructure with CI/CD pipelines.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-orange-200 dark:hover:border-orange-800/50 transition-colors">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/machine-learning-neural-network-ai.jpg"
                    alt="Machine Learning"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Developing AI-powered solutions using TensorFlow, PyTorch, and transformer models. Experience with
                  NLP, claim verification, and text classification.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-orange-200 dark:hover:border-orange-800/50 transition-colors">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/full-stack-web-development-react.jpg"
                    alt="Full-Stack Development"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Full-Stack Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creating responsive web applications with React, Firebase, and modern JavaScript frameworks. Building
                  real-time dashboards and user interfaces.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-orange-200 dark:hover:border-orange-800/50 transition-colors">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-red-50 to-red-100 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/database-management-sql.jpg"
                    alt="Database Management"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Database Management</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Designing and optimizing SQL databases, implementing efficient queries, and ensuring data integrity.
                  Experience with MySQL, MongoDB, and Firestore.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-orange-100 dark:border-orange-800/60 dark:from-orange-950/40 dark:to-orange-900/30">
              <CardContent className="p-6 flex flex-col justify-center h-full">
                <div className="mb-4">
                  <img src="/contact-icon.png" alt="Get in touch" className="w-20 h-20" />
                </div>
                <h3 className="text-xl font-bold mb-2">Get in touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Looking for a software engineer to collaborate on your next project? Let's connect and build something
                  great together!
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full" asChild>
                  <Link href="#contact">Get in touch</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl flex items-center justify-center">
                <img
                  src="/about-me-software-engineer-illustration.jpg"
                  alt="About me"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Building Scalable Systems With
                <span className="block text-orange-500">Modern Tech</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Master's student in Computer Science at Purdue University with a strong foundation in backend
                development and distributed systems. Passionate about creating efficient, scalable solutions.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">MS in Computer Science</h3>
                    <p className="text-muted-foreground">
                      Currently pursuing Master's at Purdue University with a 3.83 GPA. Strong academic foundation in
                      algorithms and distributed systems.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Production Experience</h3>
                    <p className="text-muted-foreground">
                      Delivered robust REST APIs, orchestrated Docker deployments on AWS EC2 Instances, and built AI-powered dashboards
                      serving 50+ users in production environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coursework */}
      <section id="coursework" className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">
              Relevant
              <span className="block text-orange-500">Coursework</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A snapshot of core CS foundations and advanced topics I've studied.
            </p>
          </div>

          <Card className="border-2 border-border">
            <CardContent className="p-8">
              <div className="flex flex-wrap justify-center gap-2">
                {coursework.map((c) => (
                  <Badge key={c} variant="secondary" className="text-sm py-1">
                    {c}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Take a Look at My
              <span className="block text-orange-500">Recent Projects</span>
            </h2>
          </div>
          <div className="space-y-12">
            {/* Project 1 */}
            <Card className="border-2 border-border hover:border-orange-200 dark:hover:border-orange-800/50 transition-colors overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <img src="/attendance-tracking-icon.jpg" alt="ATS" className="w-8 h-8" />
                    </div>
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-950/40 dark:text-orange-200 dark:hover:bg-orange-950/60">
                      Production Web App
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Purdue Attendance Tracking System</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Built a production attendance platform that serves 45+ professors and 1,200+ students. Features
                    role-based access, QR code scanning for attendance, bulk enrollment via Excel/CSV, and real-time
                    analytics. The system runs on Firebase with Cloud Functions handling automated emails and achieving
                    95%+ reliability through comprehensive testing.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Material UI</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">Cypress</Badge>
                    <Badge variant="secondary">Jest</Badge>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-transparent"
                    asChild
                  >
                    <Link
                      href="https://github.com/Taleef7/PFW-AttendanceTrackingWebApp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-8">
                  <img
                    src="/attendance-tracking-dashboard-interface.jpg"
                    alt="Purdue ATS"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </Card>

            {/* Project 2 */}
            <Card className="border-2 border-border hover:border-orange-200 dark:hover:border-orange-800/50 transition-colors overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-8 lg:order-1">
                  <img
                    src="/ml-neural-network-visualization.jpg"
                    alt="Claim Verification"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center lg:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <img src="/ai-ml-icon.jpg" alt="ML" className="w-8 h-8" />
                    </div>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-950/40 dark:text-green-200 dark:hover:bg-green-950/60">
                      Machine Learning
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Evidence-Aware Claim Verification System</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Built a two-stage fact-checking system that retrieves web evidence using BM25 and DPR, then
                    classifies claims with fine-tuned BERT and RoBERTa models. The system automatically verifies claims
                    against real-world evidence, achieving 85.4% accuracy on the AVeriTeC benchmark dataset for
                    evidence-aware verification tasks.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">BERT</Badge>
                    <Badge variant="secondary">RoBERTa</Badge>
                    <Badge variant="secondary">BM25</Badge>
                    <Badge variant="secondary">NLP</Badge>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-transparent"
                    asChild
                  >
                    <Link
                      href="https://github.com/SharonRoshini/Claim-verification-AVeriTeC"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Project 3 */}
            <Card className="border-2 border-border hover:border-orange-200 dark:hover:border-orange-800/50 transition-colors overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <img src="/event-platform-icon.jpg" alt="Events" className="w-8 h-8" />
                    </div>
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-950/40 dark:text-purple-200 dark:hover:bg-purple-950/60">
                      Full-Stack Development
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Campus Pulse - Event Management Platform</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Developed a role-based event management platform using React and Firebase that supports 100+ users.
                    Features include automated point tracking, QR-based attendance verification, and real-time event
                    updates. The platform streamlines campus event organization with Firebase Auth for secure
                    authentication and Firestore for scalable data management.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">Firestore</Badge>
                    <Badge variant="secondary">Firebase Auth</Badge>
                    <Badge variant="secondary">QR Code</Badge>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-transparent"
                    asChild
                  >
                    <Link
                      href="https://github.com/s1ashd0t/campus-pulse"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center p-8">
                  <img
                    src="/event-management-dashboard-interface.jpg"
                    alt="Campus Pulse"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </Card>

            {/* Project 4 */}
            <Card className="border-2 border-border hover:border-orange-200 dark:hover:border-orange-800/50 transition-colors overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center p-8 lg:order-1">
                  <img
                    src="/logos/multiling.jpeg"
                    alt="News Narrative"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center lg:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <img src="/nlp-text-icon.jpg" alt="NLP" className="w-8 h-8" />
                    </div>
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-950/40 dark:text-orange-200 dark:hover:bg-orange-950/60">
                      NLP & AI
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Multilingual News Narrative Extraction</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Created a multilingual text classification system combining XGBoost, SVC, and Random Forest with
                    transformer models like XLM-RoBERTa and mBERT. The system extracts news narratives across different
                    languages, achieving 86% EMR for Hindi and 84% for Bulgarian. Participated in SemEval 2025
                    competition for cross-lingual narrative detection.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">XGBoost</Badge>
                    <Badge variant="secondary">mBERT</Badge>
                    <Badge variant="secondary">XLM-RoBERTa</Badge>
                    <Badge variant="secondary">NLP</Badge>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-transparent"
                    asChild
                  >
                    <Link
                      href="https://github.com/Taleef7/semeval-2025-task10-PFWT10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Project 5 */}
            <Card className="border-2 border-border hover:border-orange-200 dark:hover:border-orange-800/50 transition-colors overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <img src="/logos/mlfsapp.jpg" alt="ASL" className="w-8 h-8 object-contain rounded" />
                    </div>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-950/40 dark:text-blue-200 dark:hover:bg-blue-950/60">
                      Full-Stack ML Application
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Gesture2Globe - ASL Recognition System</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Developed an ASL recognition system with React and FastAPI that processes video and live camera
                    feeds. The system identifies gestures, forms sentences, translates to multiple languages, and
                    generates audio output. Uses TGCN models deployed via ONNX Runtime, achieving 87% accuracy across
                    100 sign classes with support for up to 2,000 gestures.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">FastAPI</Badge>
                    <Badge variant="secondary">PyTorch</Badge>
                    <Badge variant="secondary">ONNX</Badge>
                    <Badge variant="secondary">MediaPipe</Badge>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-transparent"
                    asChild
                  >
                    <Link
                      href="https://github.com/raghuhasanbokam/ASL-to-Speech"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-8">
                  <img
                    src="/logos/g2g.jpg"
                    alt="Gesture2Globe"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </Card>

            {/* Project 6 */}
            <Card className="border-2 border-border hover:border-orange-200 dark:hover:border-orange-800/50 transition-colors overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <img src="/logos/RaghuHasan.jpg" alt="Raghu Hasan" className="w-8 h-8 object-cover rounded" />
                    </div>
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-950/40 dark:text-orange-200 dark:hover:bg-orange-950/60">
                      Portfolio Website
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">Personal Portfolio</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    <span className="font-semibold text-foreground">
                      Like what you are seeing, check how I made this portfolio
                    </span>
                    . Built with a modern Next.js stack, theme toggle, responsive navigation, and a resume chooser
                    flow for Software Engineering vs Artificial Intelligence.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">shadcn/ui</Badge>
                    <Badge variant="secondary">Vercel</Badge>
                    <Badge variant="secondary">Vercel Analytics</Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                      <Link
                        href="https://github.com/raghuhasanbokam/Personal-Portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Source Code
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="bg-transparent" asChild>
                      <Link href="https://raghuhasanbokam.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20 flex items-center justify-center p-8">
                  <img
                    src="/about-me-software-engineer-illustration.jpg"
                    alt="Personal Portfolio"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/30 bg-transparent"
              asChild
            >
              <Link href="https://github.com/raghuhasanbokam" target="_blank" rel="noopener noreferrer">
                Browse All Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience & Education Timeline */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              My Journey in
              <span className="block text-orange-500">Tech and Education</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From backend development to machine learning, building scalable systems and delivering production-ready
              solutions across diverse technologies.
            </p>
          </div>

          {/* Mobile (stacked) */}
          <div className="lg:hidden space-y-5">
            <Card className="border-2 border-border">
              <CardContent className="p-5">
                <p className="text-sm font-medium text-orange-600 dark:text-orange-300 mb-2">Dec 2020 - May 2024</p>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/logos/nitjsr.jpg"
                    alt="NIT Jamshedpur"
                    className="w-10 h-10 rounded-lg object-contain bg-white p-1"
                  />
                  <div>
                    <h3 className="text-lg font-bold">BTech in Computer Science</h3>
                    <p className="text-sm text-muted-foreground">NIT Jamshedpur • Jamshedpur, India</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bachelor of Technology in Computer Science and Engineering with 3.21 GPA and Honors. Strong foundation
                  in data structures and algorithms.
                </p>
                <div className="mt-4">
                  <p className="text-xs font-semibold text-muted-foreground">Coursework</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {nitCoursework.map((c) => (
                      <Badge key={c} variant="secondary" className="text-xs">
                        {c}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border">
              <CardContent className="p-5">
                <p className="text-sm font-medium text-orange-600 dark:text-orange-300 mb-2">Jan 2024 - Jul 2024</p>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/logos/Cubastion.jpg"
                    alt="Cubastion"
                    className="w-10 h-10 rounded-lg object-contain bg-white p-1"
                  />
                  <div>
                    <h3 className="text-lg font-bold">Salesforce Developer Intern</h3>
                    <p className="text-sm text-muted-foreground">
                      Cubastion Consulting Pvt. Ltd. • Gurgaon, Haryana, India
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Delivered Salesforce + Siebel CRM customizations end-to-end: gathered requirements, implemented Apex
                  automations and validation rules, and shipped reusable components that reduced manual ops work and
                  improved data quality. Integrated Marketing Cloud journeys and reporting to boost outreach efficiency
                  and accelerate campaign execution across multiple teams.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border">
              <CardContent className="p-5">
                <p className="text-sm font-medium text-orange-600 dark:text-orange-300 mb-2">Aug 2024 - May 2026</p>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/logos/Purdue.jpg"
                    alt="Purdue University"
                    className="w-10 h-10 rounded-lg object-contain bg-white p-1"
                  />
                  <div>
                    <h3 className="text-lg font-bold">MS in Computer Science</h3>
                    <p className="text-sm text-muted-foreground">Purdue University • West Lafayette, IN</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pursuing Master of Science in Computer Science with a 3.83 GPA. Focused on distributed systems,
                  algorithms, and scalable software architecture.
                </p>
                <div className="mt-4">
                  <p className="text-xs font-semibold text-muted-foreground">Coursework</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {purdueCoursework.map((c) => (
                      <Badge key={c} variant="secondary" className="text-xs">
                        {c}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border">
              <CardContent className="p-5">
                <p className="text-sm font-medium text-orange-600 dark:text-orange-300 mb-2">May 2025 - Dec 2025</p>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/logos/7T.jpg"
                    alt="SevenTablets"
                    className="w-10 h-10 rounded-lg object-contain bg-white p-1"
                  />
                  <div>
                    <h3 className="text-lg font-bold">Software Engineer Intern</h3>
                    <p className="text-sm text-muted-foreground">SevenTablets Inc. • Addison, TX, USA</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built production-grade REST APIs in GoLang with SQL-backed services, containerized deployments on AWS
                  EC2, and delivered analytics features that cut manual reporting by ~90% for 50+ users. Designed
                  high-fidelity Figma dashboard prototypes (navigation, metrics drilldowns, and role-based views) and
                  translated them into engineering-ready specs to align product, design, and backend delivery.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Desktop (simple overlap layout) */}
          <div className="hidden lg:block relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-orange-200 dark:bg-orange-900/40" />

            <div className="relative grid grid-cols-2 gap-x-12 gap-y-28">
              {/* Top row: Purdue (left) + SevenTablets (right, starts later -> offset down) */}
              <div className="text-right">
                <p className="text-sm font-medium text-orange-600 dark:text-orange-300 mb-2">Aug 2024 - May 2026</p>
                <Card className="border-2 border-border inline-block text-left">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src="/logos/Purdue.jpg"
                        alt="Purdue University"
                        className="w-10 h-10 rounded-lg object-contain bg-white p-1"
                      />
                      <div>
                        <h3 className="text-lg font-bold">MS in Computer Science</h3>
                        <p className="text-sm text-muted-foreground">Purdue University • West Lafayette, IN</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Pursuing Master of Science in Computer Science with a 3.83 GPA. Focused on distributed systems,
                      algorithms, and scalable software architecture.
                    </p>
                    <div className="mt-4">
                      <p className="text-xs font-semibold text-muted-foreground">Coursework</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {purdueCoursework.map((c) => (
                          <Badge key={c} variant="secondary" className="text-xs">
                            {c}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16">
                <p className="text-sm font-medium text-orange-600 dark:text-orange-300 mb-2">May 2025 - Dec 2025</p>
                <Card className="border-2 border-border">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src="/logos/7T.jpg"
                        alt="SevenTablets"
                        className="w-10 h-10 rounded-lg object-contain bg-white p-1"
                      />
                      <div>
                        <h3 className="text-lg font-bold">Software Engineer Intern</h3>
                        <p className="text-sm text-muted-foreground">SevenTablets Inc. • Addison, TX, USA</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Built production-grade REST APIs in GoLang with SQL-backed services, containerized deployments on
                      AWS EC2, and delivered analytics features that cut manual reporting by ~90% for 50+ users.
                      Designed high-fidelity Figma dashboard prototypes (navigation, metrics drilldowns, and
                      role-based views) and translated them into engineering-ready specs to align product, design, and
                      backend delivery.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Bottom row: NIT (left, earliest) + Cubastion (right, overlaps NIT end -> offset up) */}
              <div className="text-right">
                <p className="text-sm font-medium text-orange-600 dark:text-orange-300 mb-2">Dec 2020 - May 2024</p>
                <Card className="border-2 border-border inline-block text-left">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src="/logos/nitjsr.jpg"
                        alt="NIT Jamshedpur"
                        className="w-10 h-10 rounded-lg object-contain bg-white p-1"
                      />
                      <div>
                        <h3 className="text-lg font-bold">BTech in Computer Science</h3>
                        <p className="text-sm text-muted-foreground">NIT Jamshedpur • Jamshedpur, India</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Bachelor of Technology in Computer Science and Engineering with 3.21 GPA and Honors. Strong
                      foundation in data structures and algorithms.
                    </p>
                    <div className="mt-4">
                      <p className="text-xs font-semibold text-muted-foreground">Coursework</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {nitCoursework.map((c) => (
                          <Badge key={c} variant="secondary" className="text-xs">
                            {c}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="-mt-10">
                <p className="text-sm font-medium text-orange-600 dark:text-orange-300 mb-2">Jan 2024 - Jul 2024</p>
                <Card className="border-2 border-border">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src="/logos/Cubastion.jpg"
                        alt="Cubastion"
                        className="w-10 h-10 rounded-lg object-contain bg-white p-1"
                      />
                      <div>
                        <h3 className="text-lg font-bold">Salesforce Developer Intern</h3>
                        <p className="text-sm text-muted-foreground">
                          Cubastion Consulting Pvt. Ltd. • Gurgaon, Haryana, India
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Delivered Salesforce + Siebel CRM customizations end-to-end: gathered requirements, implemented
                      Apex automations and validation rules, and shipped reusable components that reduced manual ops
                      work and improved data quality. Integrated Marketing Cloud journeys and reporting to boost
                      outreach efficiency and accelerate campaign execution across multiple teams.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6">
            Let's Work
            <span className="block text-orange-500">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm currently looking for full-time opportunities in Software Engineering and AI/ML. If you have an exciting
            project or role, let's connect!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold">Any Questions?</p>
              <p className="text-muted-foreground">
                Mail me at:{' '}
                <a
                  href="mailto:hasanraghu1703@gmail.com"
                  className="font-medium text-orange-600 hover:underline dark:text-orange-300"
                >
                  hasanraghu1703@gmail.com
                </a>
              </p>
            </div>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://linkedin.com/in/raghuhasanbokam" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com/raghuhasanbokam" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-white/60">© 2025 Raghu Hasan Bokam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

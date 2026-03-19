import React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Download,
  Brain,
  Cpu,
  BarChart3,
  Shield,
  TrendingUp,
  Zap,
  Database,
  Code,
  Lock,
  LineChart,
  Award,
  Mail,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Home = () => {
  // Hook pour détecter quand les éléments sont visibles
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    {
      icon: <TrendingUp />,
      value: 15,
      suffix: "+",
      label: "Projets Bancaires",
      color: "text-green-400",
    },
    {
      icon: <Clock />,
      value: 99.7,
      suffix: "%",
      label: "Uptime Automatisation",
      color: "text-blue-400",
    },
    {
      icon: <Users />,
      value: 8,
      suffix: "+",
      label: "Clients Satisfaits",
      color: "text-purple-400",
    },
    {
      icon: <Award />,
      value: 5,
      suffix: "+",
      label: "Ans d'Expérience",
      color: "text-yellow-400",
    },
  ];

  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analyse de Risque",
      description:
        "Modèles prédictifs pour l'évaluation des risques de crédit et la détection de fraude.",
      features: ["Scoring client", "Stress testing", "VAR calculs"],
      delay: 0.1,
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Automatisation RPA",
      description:
        "Robotisation des processus métiers pour les opérations bancaires récurrentes.",
      features: ["Extraction données", "Réconciliation", "Reporting auto"],
      delay: 0.2,
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description:
        "Conception de pipelines de données et entrepôts pour l'analyse financière.",
      features: ["ETL/ELT", "Data Lakes", "API Banking"],
      delay: 0.3,
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Visualisation",
      description:
        "Tableaux de bord interactifs pour le suivi des performances financières.",
      features: ["Power BI/Tableau", "D3.js", "Streamlit"],
      delay: 0.4,
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité FinTech",
      description:
        "Implémentation de protocoles de sécurité pour les transactions digitales.",
      features: ["Authentification", "Chiffrement", "Audit"],
      delay: 0.5,
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Solutions Sur Mesure",
      description:
        "Développement d'applications spécifiques au secteur bancaire.",
      features: ["APIs REST", "Microservices", "Cloud Native"],
      delay: 0.6,
    },
  ];

  const technologies = [
    { name: "Python", level: 95, color: "from-blue-500 to-cyan-400" },
    { name: "SQL", level: 90, color: "from-green-500 to-emerald-400" },
    { name: "TensorFlow", level: 85, color: "from-orange-500 to-amber-400" },
    { name: "React/Node.js", level: 80, color: "from-sky-500 to-blue-400" },
    { name: "Power BI", level: 88, color: "from-yellow-500 to-yellow-300" },
    { name: "Docker/K8s", level: 75, color: "from-blue-600 to-blue-400" },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-night-green-950/30 via-transparent to-gray-gradient-start/50"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-night-green-900/50 border border-night-green-800">
                  <span className="text-night-green-300 text-sm font-medium">
                    👋 Bonjour, je suis
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Data Scientist
                  <span className="block bg-gradient-to-r from-night-green-400 to-white bg-clip-text text-transparent">
                    Spécialiste Bancaire
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Je transforme les données financières en insights actionnables
                  grâce à l'IA, l'automatisation et l'analyse prédictive pour
                  optimiser les décisions bancaires.
                </p>
              </div>

              {/* Dans la section Hero */}
              <div className="flex flex-wrap gap-4">
                {/* Bouton Voir mes projets - CORRIGÉ */}
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center px-6 py-3"
                  >
                    <span>Voir mes projets</span>
                    <ChevronRight className="ml-2" />
                  </motion.button>
                </Link>

                {/* Bouton Télécharger CV - DÉJÀ BON */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/cv.pdf"
                  download="CV_Datascientist_Bancaire.pdf"
                  className="btn-secondary flex items-center px-6 py-3 text-night-green-300 hover:bg-night-green-900/30 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-night-green-900/20 cursor-pointer relative z-50" // ← border-2 border-red-500 et z-50
                  style={{ position: "relative" }}
                >
                  <Download className="mr-2" />
                  Télécharger CV
                </motion.a>
              </div>

              {/* Stats mini */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {stats.slice(0, 4).map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-white">
                      <CountUp
                        end={stat.value}
                        suffix={stat.suffix}
                        duration={2.5}
                        className={stat.color}
                      />
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 flex justify-center"
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-night-green-600 to-night-green-800 rounded-3xl blur-xl opacity-30"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-night-green-500 to-night-green-700 rounded-3xl blur-md opacity-20"></div>

                {/* Main image container */}
                <div className="relative">
                  <img
                    src="/hero.png"
                    alt="Profile"
                    className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl border-4 border-night-green-800 shadow-2xl"
                  />

                  {/* Floating elements */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-4 -right-4 p-4 bg-gray-gradient-start border border-night-green-800 rounded-xl shadow-lg"
                  >
                    <Brain className="w-8 h-8 text-night-green-400" />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.5,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute -bottom-4 -left-4 p-4 bg-gray-gradient-start border border-night-green-800 rounded-xl shadow-lg"
                  >
                    <Zap className="w-8 h-8 text-night-green-400" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="expertise" className="py-12" ref={ref1}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="section-title">Mon Expertise Bancaire</h2>
            <p className="section-subtitle">
              Des solutions data-driven pour optimiser les performances, réduire
              les risques et automatiser les processus dans le secteur financier
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: service.delay }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="card-gradient p-6 hover:border-night-green-600 transition-all duration-300"
              >
                <div className="mb-4 text-night-green-400">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-night-green-300"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative overflow-hidden" ref={ref2}>
        <div className="absolute inset-0 bg-gradient-to-r from-night-green-950/40 to-gray-gradient-middle/40"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView2 ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 card-gradient rounded-xl"
              >
                <div className="inline-block p-3 rounded-lg bg-night-green-900/50 mb-4">
                  <div className={stat.color}>{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={3}
                    decimals={stat.value === 99.7 ? 1 : 0}
                  />
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12" ref={ref3}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="section-title">Stack Technologique</h2>
            <p className="section-subtitle">
              Maîtrisant les dernières technologies pour le data science et
              l'engineering financier
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -50 }}
                animate={inView3 ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between">
                  <span className="text-white font-medium">{tech.name}</span>
                  <span className="text-night-green-400">{tech.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView3 ? { width: `${tech.level}%` } : {}}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                    className={`h-full rounded-full bg-gradient-to-r ${tech.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center card-gradient p-12 rounded-3xl relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Prêt à optimiser vos processus bancaires ?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Discutons de vos besoins en analyse de données et automatisation
                pour transformer votre institution financière.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary px-8 py-4 text-lg"
                  >
                    <Mail className="inline mr-2" />
                    Me Contacter
                  </motion.button>
                </Link>

                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary px-8 py-4 text-lg"
                  >
                    Voir mes réalisations
                    <ChevronRight className="inline ml-2" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

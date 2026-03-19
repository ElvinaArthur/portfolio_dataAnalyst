import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Filter,
  Search,
  ExternalLink,
  Github,
  BarChart3,
  Cpu,
  Database,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Lock,
  Eye,
  Code,
  ChevronRight,
  ArrowUpRight,
  X,
  Image as ImageIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const filters = [
    { id: "all", label: "Tous les projets", icon: <Code size={16} /> },
    {
      id: "risk-analysis",
      label: "Analyse de Risque",
      icon: <BarChart3 size={16} />,
    },
    { id: "automation", label: "Automatisation", icon: <Cpu size={16} /> },
    {
      id: "data-engineering",
      label: "Data Engineering",
      icon: <Database size={16} />,
    },
    {
      id: "fraud-detection",
      label: "Détection de Fraude",
      icon: <Shield size={16} />,
    },
    {
      id: "dashboard",
      label: "Tableaux de bord",
      icon: <TrendingUp size={16} />,
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Système de Scoring de Crédit Automatisé",
      description:
        "Modèle ML pour l'évaluation automatique des risques de crédit avec dashboard temps réel.",
      longDescription:
        "Développement d'un système end-to-end utilisant XGBoost et Random Forest pour prédire la solvabilité des clients. Intégration avec les systèmes bancaires legacy via APIs REST. Réduction de 40% du temps de traitement des dossiers.",
      category: "risk-analysis",
      technologies: ["Python", "Scikit-learn", "FastAPI", "Power BI", "Docker"],
      client: "Banque Majeure Européenne",
      duration: "4 mois",
      impact: "40% de réduction des défauts",
      github: "https://github.com/yourusername/credit-scoring",
      liveLink: null,
      image: "/credit-scoring.png",
      stats: [
        { label: "Précision", value: "92%", icon: <TrendingUp /> },
        { label: "Temps de traitement", value: "-40%", icon: <Clock /> },
        { label: "Clients traités", value: "50k/mois", icon: <Users /> },
      ],
      featured: true,
    },
    {
      id: 2,
      title: "Robot d'Automatisation des Transactions",
      description:
        "Solution RPA pour automatiser le traitement des transactions bancaires récurrentes.",
      longDescription:
        "Conception d'un robot UiPath pour automatiser la réconciliation comptable, l'import/export de données entre systèmes et la génération de rapports réglementaires. Interface de monitoring custom avec React.",
      category: "automation",
      technologies: ["UiPath", "Python", "React", "PostgreSQL", "Redis"],
      client: "FinTech Start-up",
      duration: "3 mois",
      impact: "80% d'automatisation",
      github: "https://github.com/yourusername/bank-automation",
      liveLink: null,
      image: "/rpa-banking.png",
      stats: [
        { label: "Transactions/jour", value: "10k", icon: <Zap /> },
        { label: "Précision", value: "99.9%", icon: <TrendingUp /> },
        { label: "Économie temps", value: "200h/semaine", icon: <Clock /> },
      ],
      featured: true,
    },
    {
      id: 3,
      title: "Système de Détection de Fraude en Temps Réel",
      description:
        "Algorithme de détection d'anomalies pour prévenir les fraudes aux cartes de crédit.",
      longDescription:
        "Implémentation d'un système de détection basé sur l'isolation forest et LSTM pour analyser les patterns de transactions. Alertes en temps réel avec notification Slack. Dashboard de monitoring des alertes.",
      category: "fraud-detection",
      technologies: [
        "TensorFlow",
        "Kafka",
        "Elasticsearch",
        "React",
        "Node.js",
      ],
      client: "Société de Cartes de Crédit",
      duration: "6 mois",
      impact: "60% de fraudes en moins",
      github: null,
      liveLink: null,
      image: "/fraud-detection.png",
      stats: [
        { label: "Détection précoce", value: "95%", icon: <Shield /> },
        { label: "Faux positifs", value: "< 2%", icon: <Eye /> },
        { label: "Économies", value: "€2M/an", icon: <DollarSign /> },
      ],
    },
    {
      id: 4,
      title: "Data Lake pour Analyse Client 360°",
      description:
        "Construction d'un data lake centralisant toutes les données clients d'une grande banque.",
      longDescription:
        "Architecture cloud-native sur AWS avec ingestion de données structurées et non-structurées. Pipeline de données avec Airflow et transformation avec Spark. API GraphQL pour l'accès aux données.",
      category: "data-engineering",
      technologies: ["AWS", "Apache Spark", "Airflow", "GraphQL", "Terraform"],
      client: "Groupe Bancaire International",
      duration: "8 mois",
      impact: "Unified data source",
      github: null,
      liveLink: null,
      image: "/data-lake.png",
      stats: [
        { label: "Volume données", value: "50+ TB", icon: <Database /> },
        { label: "Sources", value: "15 systèmes", icon: <Code /> },
        { label: "Latence", value: "Near real-time", icon: <Zap /> },
      ],
    },
    {
      id: 5,
      title: "Dashboard de Performance des Portefeuilles",
      description:
        "Visualisation interactive des performances d'investissement pour les gestionnaires de fonds.",
      longDescription:
        "Application web avec D3.js pour la visualisation de données financières complexes. Calculs de risques (VaR, Sharpe ratio) et comparaisons de benchmarks. Export de rapports automatisés.",
      category: "dashboard",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      client: "Société de Gestion d'Actifs",
      duration: "3 mois",
      impact: "Décisions + éclairées",
      github: "https://github.com/yourusername/portfolio-dashboard",
      liveLink: "https://portfolio-dashboard.demo.com",
      image: "/portfolio-dashboard.png",
      stats: [
        { label: "Métriques", value: "50+", icon: <BarChart3 /> },
        { label: "Temps d'accès", value: "< 2s", icon: <Clock /> },
        { label: "Utilisateurs", value: "200+", icon: <Users /> },
      ],
    },
    {
      id: 6,
      title: "API Banking pour Partenaires Fintech",
      description:
        "Développement d'une plateforme API sécurisée pour l'intégration avec des partenaires FinTech.",
      longDescription:
        "Architecture microservices avec authentification OAuth2 et gestion des quotas. Documentation interactive avec Swagger. Monitoring des performances et alertes de sécurité.",
      category: "data-engineering",
      technologies: ["Node.js", "Kubernetes", "OAuth2", "Redis", "Prometheus"],
      client: "Banque Digitale",
      duration: "5 mois",
      impact: "20 partenaires intégrés",
      github: null,
      liveLink: null,
      image: "/api-banking.png",
      stats: [
        { label: "Requêtes/jour", value: "5M+", icon: <Zap /> },
        { label: "Disponibilité", value: "99.99%", icon: <TrendingUp /> },
        { label: "Latence", value: "< 100ms", icon: <Clock /> },
      ],
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      selectedFilter === "all" || project.category === selectedFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesFilter && matchesSearch;
  });

  const handleImageError = (projectId) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-gradient-start border border-night-green-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-night-green-900/50 border border-night-green-800 rounded-full text-sm text-night-green-300">
                  {filters.find((f) => f.id === project.category)?.label}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 bg-yellow-900/30 border border-yellow-800 rounded-full text-sm text-yellow-300">
                    ⭐ Projet en vedette
                  </span>
                )}
              </div>
              <h2 className="text-3xl font-bold text-white">{project.title}</h2>
              <p className="text-gray-400 mt-2">
                {project.client} • {project.duration}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-night-green-900/50 rounded-lg transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Project Image in Modal */}
              <div className="aspect-video bg-night-green-950/50 border border-night-green-800 rounded-xl overflow-hidden">
                {imageErrors[project.id] ? (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8">
                    <ImageIcon className="w-16 h-16 text-night-green-500 mb-4" />
                    <p className="text-night-green-300 text-center">
                      Visualisation du projet: {project.title}
                    </p>
                    <p className="text-gray-500 text-sm text-center mt-2">
                      Image non disponible
                    </p>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(project.id)}
                  />
                )}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Impact
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {project.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-night-green-900/30 border border-night-green-800 rounded-lg"
                    >
                      <div className="text-night-green-400 mb-2">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Description détaillée
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Technologies utilisées
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-night-green-900/50 border border-night-green-800 rounded-full text-sm text-night-green-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary flex items-center justify-center"
                  >
                    <Github className="mr-2" size={18} />
                    Code Source
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary flex items-center justify-center"
                  >
                    <ExternalLink className="mr-2" size={18} />
                    Voir la démo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Projects */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-night-green-950/40 via-transparent to-gray-gradient-start/30 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mes{" "}
              <span className="bg-gradient-to-r from-night-green-400 to-white bg-clip-text text-transparent">
                Projets
              </span>{" "}
              Bancaires
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez mes réalisations en analyse de données, automatisation
              et solutions FinTech pour le secteur bancaire.
            </p>
          </motion.div>

          {/* Filters and Search */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                      selectedFilter === filter.id
                        ? "bg-night-green-900 border-night-green-600 text-white"
                        : "border-night-green-800 text-gray-400 hover:border-night-green-600 hover:text-night-green-300"
                    }`}
                  >
                    {filter.icon}
                    {filter.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-auto">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Rechercher un projet ou technologie..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full md:w-80 bg-night-green-900/30 border border-night-green-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-night-green-600"
                />
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-night-green-500"></div>
                  <span>Projet en vedette</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Code source disponible</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span>Démo en ligne</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <Filter size={64} className="text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Aucun projet trouvé
              </h3>
              <p className="text-gray-400">
                Essayez de modifier vos filtres ou votre recherche.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="card-gradient h-full flex flex-col rounded-xl border border-night-green-800 hover:border-night-green-600 transition-all duration-300 overflow-hidden">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden bg-night-green-950/50">
                      {imageErrors[project.id] ? (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6">
                          <ImageIcon className="w-12 h-12 text-night-green-500 mb-3" />
                          <p className="text-night-green-300 text-sm text-center">
                            {project.title}
                          </p>
                        </div>
                      ) : (
                        <>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={() => handleImageError(project.id)}
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-night-green-950/80 via-transparent to-transparent"></div>
                          {/* Category badge on image */}
                          <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-night-green-900/80 backdrop-blur-sm border border-night-green-800 rounded-full text-xs text-night-green-300">
                              {
                                filters.find((f) => f.id === project.category)
                                  ?.icon
                              }
                              {
                                filters.find((f) => f.id === project.category)
                                  ?.label
                              }
                            </span>
                          </div>
                          {project.featured && (
                            <div className="absolute top-4 right-4">
                              <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-900/50 backdrop-blur-sm border border-yellow-800 rounded-full text-xs text-yellow-300">
                                ⭐ Vedette
                              </span>
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-night-green-300 transition-colors line-clamp-2">
                              {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                              {project.description}
                            </p>
                          </div>
                        </div>

                        {/* Project Stats */}
                        <div className="grid grid-cols-3 gap-2 mb-6">
                          {project.stats.slice(0, 3).map((stat, idx) => (
                            <div
                              key={idx}
                              className="text-center p-2 bg-night-green-900/30 rounded-lg"
                            >
                              <div className="text-lg font-bold text-white">
                                {stat.value}
                              </div>
                              <div className="text-xs text-gray-400">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="mb-6 flex-1">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies
                              .slice(0, 3)
                              .map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-night-green-900/30 border border-night-green-800 rounded text-xs text-night-green-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 py-1 bg-night-green-900/30 border border-night-green-800 rounded text-xs text-gray-500">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex justify-between items-center pt-4 border-t border-night-green-800/50 mt-auto">
                        <div className="text-sm text-gray-500">
                          {project.client} • {project.duration}
                        </div>
                        <div className="flex items-center gap-3">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 hover:bg-night-green-900/50 rounded-lg transition-colors"
                              onClick={(e) => e.stopPropagation()}
                              title="Voir le code source"
                            >
                              <Github size={16} className="text-gray-400" />
                            </a>
                          )}
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 hover:bg-night-green-900/50 rounded-lg transition-colors"
                              onClick={(e) => e.stopPropagation()}
                              title="Voir la démo"
                            >
                              <ExternalLink
                                size={16}
                                className="text-gray-400"
                              />
                            </a>
                          )}
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="flex items-center gap-1 text-night-green-300 hover:text-night-green-200 transition-colors text-sm font-medium"
                          >
                            Détails
                            <ArrowUpRight size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-20 card-gradient p-8 rounded-2xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {projects.length}
                </div>
                <div className="text-gray-400">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {projects.filter((p) => p.github).length}
                </div>
                <div className="text-gray-400">Projets open source</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">Satisfaction client</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">€5M+</div>
                <div className="text-gray-400">Économies générées</div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Vous avez un projet similaire ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discutons de vos besoins en automatisation, analyse de données ou
              développement FinTech.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-4 text-lg inline-flex items-center"
              >
                Discuter de votre projet
                <ChevronRight className="ml-2" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;

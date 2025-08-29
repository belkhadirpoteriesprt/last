import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import {
  MapPin,
  Award,
  Users,
  Heart,
  Sparkles,
  Zap,
  Target,
  Clock,
  Palette,
  Star,
} from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section with Neon Effects */}
      <section className="relative bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-orange-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
        </div>

        {/* Neon Grid Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,165,0,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,165,0,0.3) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F58adbc6721294870bd452009a016663f?format=webp&width=800"
                  alt="Belkhadir Poterie Logo"
                  className="h-20 w-auto object-contain"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Belkhadir
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Poterie</span>
            </h1>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <div className="flex items-center space-x-2 bg-amber-800/30 backdrop-blur-sm rounded-full px-6 py-3 border border-amber-500/30">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-amber-200 font-medium">
                  Depuis 1987 • Safi, Maroc
                </span>
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </div>
            </motion.div>

            <p className="text-xl md:text-2xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
              L'art ancestral de la poterie marocaine transmis de génération en
              génération dans l'atelier familial de Safi
            </p>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-10 w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg opacity-20 blur-sm"
        ></motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  <strong>Depuis 1987</strong>, la famille Belkhadir perpétue
                  l'art ancestral de la poterie dans la ville historique de
                  Safi, réputée pour son savoir-faire céramique unique au monde.
                  Notre atelier familial a été fondé par le maître potier
                  Mohammed Belkhadir, père d'Idriss.
                </p>
                <p>
                  <strong>Idriss Belkhadir</strong>, héritier de cette tradition
                  familiale depuis plus de 35 ans, a perfectionné les techniques
                  séculaires auprès de son père, devenant lui-même un maître
                  potier reconnu dans toute la région de Safi et au-delà.
                </p>
                <p>
                  Aujourd'hui, notre atelier emploie plusieurs artisans qualifiés
                  et forme la nouvelle génération aux techniques traditionnelles.
                  Chaque pièce sortant de notre atelier porte en elle l'âme de
                  cette transmission générationnelle, alliant{" "}
                  <span className="text-amber-700 font-semibold">
                    respect des traditions ancestrales
                  </span>{" "}
                  et{" "}
                  <span className="text-amber-700 font-semibold">
                    innovation créative moderne
                  </span>
                  .
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
                  alt="Atelier de poterie traditionnelle"
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    Notre Atelier à Safi
                  </h3>
                  <p className="text-gray-700">
                    62, village des potiers - Au cœur de la tradition
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section with Neon Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos <span className="text-amber-400">Valeurs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Les principes qui guident notre travail depuis trois générations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Passion",
                description:
                  "L'amour du métier transmis de père en fils depuis 1950",
                color: "from-red-400 to-pink-500",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence",
                description:
                  "Chaque pièce répond aux plus hauts standards de qualité",
                color: "from-amber-400 to-orange-500",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Héritage",
                description:
                  "Préservation et transmission du savoir-faire ancestral",
                color: "from-blue-400 to-cyan-500",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Innovation",
                description: "Créativité moderne respectueuse des traditions",
                color: "from-purple-400 to-pink-500",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 text-center">
                  <div
                    className={`inline-flex p-3 rounded-full bg-gradient-to-r ${value.color} mb-4`}
                  >
                    <div className="text-white">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-300`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              Notre Processus Artisanal
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              De l'argile brute à la pièce finie, découvrez les étapes de
              création
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Sélection de l'Argile",
                description: "Extraction et purification de l'argile rouge de Safi, réputée pour sa qualité exceptionnelle. Mélange avec des minéraux locaux pour obtenir la texture parfaite.",
                icon: <Target className="w-6 h-6" />,
              },
              {
                step: "02",
                title: "Pétrissage & Préparation",
                description: "Pétrissage manuel intensif pour éliminer les bulles d'air et homogénéiser la pâte. Vieillissement de l'argile pendant plusieurs jours pour optimiser sa plasticité.",
                icon: <Zap className="w-6 h-6" />,
              },
              {
                step: "03",
                title: "Façonnage Artisanal",
                description: "Modelage entièrement à la main sur tour de potier traditionnel. Chaque pièce est unique, façonnée selon les techniques transmises de génération en génération.",
                icon: <Sparkles className="w-6 h-6" />,
              },
              {
                step: "04",
                title: "Première Cuisson",
                description: "Cuisson de dégourdi à 950°C dans nos fours traditionnels alimentés au bois d'olivier. Cette étape solidifie la forme tout en gardant la porosité.",
                icon: <Clock className="w-6 h-6" />,
              },
              {
                step: "05",
                title: "Décoration & Émaillage",
                description: "Application des motifs traditionnels marocains à la main. Émaillage avec des couleurs naturelles préparées selon les recettes ancestrales de Safi.",
                icon: <Palette className="w-6 h-6" />,
              },
              {
                step: "06",
                title: "Cuisson Finale",
                description: "Seconde cuisson à 1050°C pour fixer définitivement les couleurs et l'émail. Refroidissement lent pendant 24h pour éviter les fissures et garantir la solidité.",
                icon: <Star className="w-6 h-6" />,
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <div className="text-amber-700 mb-3">{process.icon}</div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visitez Notre <span className="text-amber-400">Atelier</span>
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Venez découvrir notre savoir-faire dans notre atelier traditionnel
              de Safi
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-amber-400 mr-2" />
                <span className="text-xl font-semibold">
                  62, village des potiers, Safi, Maroc
                </span>
              </div>
              <p className="text-amber-200 mb-6">
                Ouvert du lundi au samedi, de 8h à 18h
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Téléphones :</strong>
                  <br />
                  +212 661 724 956
                  <br />
                  +212 675 202 336
                  <br />
                  0524 653 072
                </div>
                <div>
                  <strong>Emails :</strong>
                  <br />
                  Belkhadir.poterie@gmail.com
                  <br />
                  Belkadi626@gmail.com
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { patterns, getPatternById } from "../data/products";

interface ColorPatternCustomizerProps {
  availablePatterns: string[];
  selectedPattern: string;
  onPatternChange: (patternId: string) => void;
}

export function ColorPatternCustomizer({ 
  availablePatterns, 
  selectedPattern, 
  onPatternChange 
}: ColorPatternCustomizerProps) {
  const [activeTab, setActiveTab] = useState<'colors' | 'patterns'>('colors');

  // Filtrer les patterns disponibles
  const availablePatternObjects = availablePatterns.includes("tous") 
    ? patterns 
    : patterns.filter(p => availablePatterns.includes(p.id));

  // Séparer les couleurs des motifs spéciaux
  const colorPatterns = availablePatternObjects.filter(p =>
    !['parentheses', 'geometrique', 'motif_traditionnel'].includes(p.id)
  );

  const specialMotifs = patterns.filter(p =>
    ['parentheses', 'geometrique', 'motif_traditionnel'].includes(p.id)
  );

  const selectedPatternObj = getPatternById(selectedPattern);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
        <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center">
          🎨 Personnalisation Couleurs & Motifs
        </h3>
        
        {/* Tabs */}
        <div className="flex space-x-1 bg-white rounded-lg p-1 mb-6">
          <button
            onClick={() => setActiveTab('colors')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'colors'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-purple-600 hover:text-purple-700'
            }`}
          >
            🎨 Couleurs
          </button>
          <button
            onClick={() => setActiveTab('patterns')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'patterns'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-purple-600 hover:text-purple-700'
            }`}
          >
            ✨ Motifs Spéciaux
          </button>
        </div>


        {/* Contenu des tabs */}
        <div className="space-y-4">
          {activeTab === 'colors' && (
            <div>
              <p className="text-purple-800 mb-4 font-medium">
                Choisissez votre couleur préférée :
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {colorPatterns.map((pattern) => (
                  <motion.button
                    key={pattern.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onPatternChange(pattern.id)}
                    className={`relative p-3 rounded-lg border-2 transition-all ${
                      selectedPattern === pattern.id
                        ? 'border-purple-600 bg-purple-100 shadow-lg'
                        : 'border-gray-200 hover:border-purple-400 bg-white'
                    }`}
                  >
                    {/* Aperçu principal de la couleur */}
                    <div
                      className="w-full h-16 rounded-md mb-2 border-2 border-gray-200"
                      style={{ backgroundColor: pattern.primaryColor }}
                    />
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      {pattern.name}
                    </p>

                    {/* Aperçu des couleurs secondaires */}
                    <div className="flex justify-center space-x-1">
                      {pattern.colors.slice(0, 3).map((color, index) => (
                        <div
                          key={index}
                          className="w-3 h-3 rounded-full border border-gray-300"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    
                    {selectedPattern === pattern.id && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'patterns' && (
            <div>
              <p className="text-purple-800 mb-4 font-medium">
                Motifs spéciaux traditionnels :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {specialMotifs.map((pattern) => (
                  <motion.button
                    key={pattern.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onPatternChange(pattern.id)}
                    className={`relative p-4 rounded-lg border-2 transition-all ${
                      selectedPattern === pattern.id
                        ? 'border-purple-600 bg-purple-100 shadow-lg'
                        : 'border-gray-200 hover:border-purple-400 bg-white'
                    }`}
                  >
                    <img
                      src={pattern.thumbnail}
                      alt={pattern.name}
                      className="w-full aspect-square object-cover rounded-md mb-3"
                    />
                    <p className="font-semibold text-gray-900 mb-1">
                      {pattern.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {pattern.description}
                    </p>
                    
                    {selectedPattern === pattern.id && (
                      <div className="absolute -top-1 -right-1 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Note importante */}
        <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
          <p className="text-amber-800 text-sm leading-relaxed">
            <strong>📝 Note :</strong> Ces sélections seront transmises à l'artisan lors de la finalisation de votre commande. 
            Chaque pièce sera personnalisée selon vos préférences de couleurs et motifs.
          </p>
        </div>
      </div>
    </div>
  );
}

import { SizeVariant } from "../data/products";
import { Ruler, Package } from "lucide-react";

interface SizeSelectorProps {
  sizeVariants: SizeVariant[];
  selectedSizeId: string;
  onSizeChange: (sizeId: string) => void;
  productName: string;
}

export function SizeSelector({
  sizeVariants,
  selectedSizeId,
  onSizeChange,
  productName,
}: SizeSelectorProps) {
  const selectedVariant = sizeVariants.find((v) => v.id === selectedSizeId);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
        <Ruler className="w-5 h-5 mr-2" />
        📏 Choisissez votre taille
      </h3>

      {/* Options de taille */}
      <div className="space-y-3">
        {sizeVariants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => onSizeChange(variant.id)}
            className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-300 ${
              selectedSizeId === variant.id
                ? "border-amber-600 bg-amber-50 shadow-lg"
                : "border-gray-300 hover:border-amber-400 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <Package className="w-5 h-5 text-amber-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {variant.size}
                      {variant.dimensions && ` (${variant.dimensions})`}
                    </h4>
                    {variant.description && (
                      <p className="text-sm text-gray-600">
                        {variant.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-amber-700">
                  {variant.price.toFixed(2)} MAD
                </div>
                {selectedSizeId === variant.id && (
                  <div className="text-sm text-green-600 font-medium">
                    ✓ Sélectionné
                  </div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Récapitulatif de la sélection */}
      {selectedVariant && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
          <h4 className="font-semibold text-green-900 mb-2">
            ✅ Votre sélection
          </h4>
          <div className="text-sm text-green-800">
            <p>
              <strong>Produit :</strong> {productName}
            </p>
            <p>
              <strong>Taille :</strong> {selectedVariant.size}
              {selectedVariant.dimensions && ` (${selectedVariant.dimensions})`}
            </p>
            {selectedVariant.description && (
              <p>
                <strong>Description :</strong> {selectedVariant.description}
              </p>
            )}
            <p className="text-lg font-bold text-green-900 mt-2">
              Prix : {selectedVariant.price.toFixed(2)} MAD
            </p>
          </div>
        </div>
      )}

      {/* Information sur la fabrication */}
      <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
        <p className="text-sm text-amber-800">
          🏺 <strong>Fabrication artisanale :</strong> Chaque pièce est façonnée
          à la main. Les dimensions peuvent varier légèrement, témoignant de
          l'authenticité du travail artisanal.
        </p>
      </div>
    </div>
  );
}

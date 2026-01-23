"use client";

import Link from "next/link";
import { Game, activityLabels, locationLabels, durationLabels, ageLabels, generateSlug } from "@/data/games";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 max-w-2xl mx-auto animate-fadeIn">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="text-6xl md:text-7xl block mb-4">{game.emoji}</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          {game.title}
        </h2>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
          {activityLabels[game.activity].emoji} {activityLabels[game.activity].label}
        </span>
        <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold">
          {locationLabels[game.location].emoji} {locationLabels[game.location].label}
        </span>
        <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold">
          {durationLabels[game.duration].emoji} {durationLabels[game.duration].label}
        </span>
        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
          👥 {game.minGroupSize}-{game.maxGroupSize} Kinder
        </span>
      </div>

      {/* Description */}
      <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-5 mb-6">
        <p className="text-lg text-gray-700 leading-relaxed">{game.description}</p>
      </div>

      {/* Materials */}
      {game.materials.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-700 mb-3 flex items-center gap-2">
            <span className="text-2xl">🎒</span> Material
          </h3>
          <div className="flex flex-wrap gap-2">
            {game.materials.map((material, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm"
              >
                {material}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Variants */}
      <div>
        <h3 className="text-xl font-bold text-gray-700 mb-3 flex items-center gap-2">
          <span className="text-2xl">💡</span> Varianten
        </h3>
        <ul className="space-y-2">
          {game.variants.map((variant, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-600"
            >
              <span className="text-secondary-500 font-bold">✓</span>
              <span>{variant}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Age badges */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex justify-center gap-3">
          {game.age.map((a) => (
            <span
              key={a}
              className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full text-sm font-semibold"
            >
              {ageLabels[a].emoji} {ageLabels[a].label}
            </span>
          ))}
        </div>
      </div>

      {/* Link zur Detailseite */}
      <div className="mt-6 text-center">
        <Link
          href={`/spiel/${generateSlug(game.title)}`}
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors"
        >
          📋 Zur vollständigen Anleitung →
        </Link>
      </div>
    </div>
  );
}

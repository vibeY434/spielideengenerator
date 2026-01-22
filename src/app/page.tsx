"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  games,
  Activity,
  Location,
  Duration,
  Age,
  activityLabels,
  locationLabels,
  durationLabels,
  ageLabels,
  Game,
} from "@/data/games";
import FilterButton from "@/components/FilterButton";
import FilterSection from "@/components/FilterSection";
import GroupSizeSlider from "@/components/GroupSizeSlider";
import GameCard from "@/components/GameCard";

export default function Home() {
  // Filter states
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<Duration | null>(null);
  const [selectedAge, setSelectedAge] = useState<Age | null>(null);
  const [groupSize, setGroupSize] = useState<number>(15);

  // Game state
  const [currentGame, setCurrentGame] = useState<Game | null>(null);
  const [usedGameIds, setUsedGameIds] = useState<Set<number>>(new Set());

  // Filter games based on selected criteria
  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      if (selectedActivity && game.activity !== selectedActivity) return false;
      if (selectedLocation && game.location !== selectedLocation) return false;
      if (selectedDuration && game.duration !== selectedDuration) return false;
      if (selectedAge && !game.age.includes(selectedAge)) return false;
      if (groupSize < game.minGroupSize || groupSize > game.maxGroupSize) return false;
      return true;
    });
  }, [selectedActivity, selectedLocation, selectedDuration, selectedAge, groupSize]);

  // Get available games (not yet shown)
  const availableGames = useMemo(() => {
    return filteredGames.filter((game) => !usedGameIds.has(game.id));
  }, [filteredGames, usedGameIds]);

  // Find a random game
  const findGame = () => {
    const gamesToChooseFrom = availableGames.length > 0 ? availableGames : filteredGames;

    if (gamesToChooseFrom.length === 0) {
      setCurrentGame(null);
      return;
    }

    // If we've shown all games, reset the used list
    if (availableGames.length === 0) {
      setUsedGameIds(new Set());
    }

    const randomIndex = Math.floor(Math.random() * gamesToChooseFrom.length);
    const selectedGame = gamesToChooseFrom[randomIndex];

    setCurrentGame(selectedGame);
    setUsedGameIds((prev) => new Set([...prev, selectedGame.id]));
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedActivity(null);
    setSelectedLocation(null);
    setSelectedDuration(null);
    setSelectedAge(null);
    setGroupSize(15);
    setCurrentGame(null);
    setUsedGameIds(new Set());
  };

  // Toggle filter helper
  const toggleFilter = <T,>(
    current: T | null,
    value: T,
    setter: (value: T | null) => void
  ) => {
    setter(current === value ? null : value);
  };

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            <span className="text-5xl md:text-6xl">🎈</span> Spielideen-Generator
          </h1>
          <p className="text-xl text-gray-600">
            Finde das perfekte Spiel für deine Gruppe!
          </p>
          <Link
            href="/arbeitsblaetter"
            className="inline-block mt-4 text-teal-600 hover:text-teal-700 font-semibold transition-colors"
          >
            📝 Arbeitsblätter für Vorschulkinder →
          </Link>
        </header>

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8 mb-8">
          {/* Activity Filter */}
          <FilterSection title="Aktivität" emoji="🎯">
            {(Object.keys(activityLabels) as Activity[]).map((activity) => (
              <FilterButton
                key={activity}
                label={activityLabels[activity].label}
                emoji={activityLabels[activity].emoji}
                isActive={selectedActivity === activity}
                onClick={() => toggleFilter(selectedActivity, activity, setSelectedActivity)}
              />
            ))}
          </FilterSection>

          {/* Location Filter */}
          <FilterSection title="Ort" emoji="📍">
            {(Object.keys(locationLabels) as Location[]).map((location) => (
              <FilterButton
                key={location}
                label={locationLabels[location].label}
                emoji={locationLabels[location].emoji}
                isActive={selectedLocation === location}
                onClick={() => toggleFilter(selectedLocation, location, setSelectedLocation)}
              />
            ))}
          </FilterSection>

          {/* Duration Filter */}
          <FilterSection title="Dauer" emoji="⏰">
            {(Object.keys(durationLabels) as Duration[]).map((duration) => (
              <FilterButton
                key={duration}
                label={durationLabels[duration].label}
                emoji={durationLabels[duration].emoji}
                isActive={selectedDuration === duration}
                onClick={() => toggleFilter(selectedDuration, duration, setSelectedDuration)}
              />
            ))}
          </FilterSection>

          {/* Age Filter */}
          <FilterSection title="Alter" emoji="👶">
            {(Object.keys(ageLabels) as Age[]).map((age) => (
              <FilterButton
                key={age}
                label={ageLabels[age].label}
                emoji={ageLabels[age].emoji}
                isActive={selectedAge === age}
                onClick={() => toggleFilter(selectedAge, age, setSelectedAge)}
              />
            ))}
          </FilterSection>

          {/* Group Size Slider */}
          <FilterSection title="Gruppengröße" emoji="👥">
            <div className="w-full max-w-md">
              <GroupSizeSlider value={groupSize} onChange={setGroupSize} />
            </div>
          </FilterSection>

          {/* Game Count Info */}
          <div className="text-center mt-4 text-gray-600">
            <span className="text-2xl">🎲</span>{" "}
            <span className="font-semibold">{filteredGames.length}</span> passende Spiele gefunden
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={findGame}
            disabled={filteredGames.length === 0}
            className={`
              px-8 py-4 rounded-2xl font-bold text-xl
              transition-all duration-300 transform
              ${
                filteredGames.length > 0
                  ? "bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:scale-105 hover:shadow-xl shadow-lg shadow-secondary-500/30"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }
            `}
          >
            {currentGame ? "🎲 Neue Spielidee" : "🔍 Spielidee finden"}
          </button>

          <button
            onClick={resetFilters}
            className="px-8 py-4 rounded-2xl font-bold text-xl bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-300"
          >
            🔄 Filter zurücksetzen
          </button>
        </div>

        {/* Game Display */}
        {currentGame && <GameCard game={currentGame} />}

        {/* No games found message */}
        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <span className="text-6xl block mb-4">😅</span>
            <p className="text-xl text-gray-600">
              Keine passenden Spiele gefunden.
            </p>
            <p className="text-gray-500 mt-2">
              Versuche andere Filter auszuwählen!
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-12 py-6 text-gray-500 text-sm">
          <p>
            🌟 Spielideen-Generator für Kindergärten 🌟
          </p>
          <p className="mt-1">
            Keine Cookies • Keine Datensammlung • DSGVO-konform
          </p>
        </footer>
      </div>
    </main>
  );
}

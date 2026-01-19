"use client";

interface FilterButtonProps {
  label: string;
  emoji: string;
  isActive: boolean;
  onClick: () => void;
}

export default function FilterButton({
  label,
  emoji,
  isActive,
  onClick,
}: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-3 rounded-2xl font-semibold text-lg
        transition-all duration-200 transform hover:scale-105
        ${
          isActive
            ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
            : "bg-white text-gray-700 hover:bg-primary-100 shadow-md"
        }
      `}
    >
      <span className="text-2xl">{emoji}</span>
      <span>{label}</span>
    </button>
  );
}

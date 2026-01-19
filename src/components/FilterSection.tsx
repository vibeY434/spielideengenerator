"use client";

interface FilterSectionProps {
  title: string;
  emoji: string;
  children: React.ReactNode;
}

export default function FilterSection({
  title,
  emoji,
  children,
}: FilterSectionProps) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-gray-700 mb-3 flex items-center gap-2">
        <span className="text-2xl">{emoji}</span>
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

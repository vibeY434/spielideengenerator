"use client";

interface GroupSizeSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export default function GroupSizeSlider({
  value,
  onChange,
}: GroupSizeSliderProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-4xl">👥</span>
        <span className="text-3xl font-bold text-primary-600">{value}</span>
        <span className="text-lg text-gray-500">Kinder</span>
      </div>
      <input
        type="range"
        min="2"
        max="30"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-3 cursor-pointer"
      />
      <div className="flex justify-between text-sm text-gray-500 mt-1">
        <span>2</span>
        <span>30</span>
      </div>
    </div>
  );
}

import Image from "next/image";

interface WorksheetImageProps {
  id: number;
  title: string;
}

export default function WorksheetImage({ id, title }: WorksheetImageProps) {
  return (
    <div className="w-full">
      <Image
        src={`/worksheets/ID${id}.png`}
        alt={title}
        width={800}
        height={600}
        className="w-full h-auto rounded-lg"
        priority
      />
    </div>
  );
}

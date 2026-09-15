import { useId } from "react";
import type { GeneratorPhoto } from "@/data/generators";

export function GeneratorPreview({ photo }: { photo: GeneratorPhoto }) {
  const clipId = useId();
  const framing = photo.preview;

  if (!framing) {
    return (
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        decoding="async"
        width={1024}
        height={768}
        className="h-full w-full object-contain"
      />
    );
  }

  const [x, y, width, height] = framing.crop;

  return (
    <svg
      viewBox={`${x} ${y} ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={photo.alt}
      className="h-full w-full"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x={x} y={y} width={width} height={height} />
        </clipPath>
      </defs>
      <image
        href={photo.src}
        width={framing.width}
        height={framing.height}
        clipPath={`url(#${clipId})`}
      />
    </svg>
  );
}

import { useId, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type GeneratorGalleryEntry = {
  src: string;
  alt: string;
  caption: string;
};

type GeneratorGalleryProps = {
  gallery: readonly GeneratorGalleryEntry[];
  productName: string;
};

export function GeneratorGallery({ gallery, productName }: GeneratorGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const imageId = useId();
  const selectedImage = gallery[selectedIndex] ?? gallery[0];

  if (!selectedImage) {
    return (
      <div
        className="flex h-72 items-center justify-center border border-navy/10 bg-white px-6 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground sm:h-96 lg:h-[34rem]"
        role="status"
      >
        Product imagery unavailable
      </div>
    );
  }

  const currentIndex = gallery.indexOf(selectedImage);
  const hasMultipleImages = gallery.length > 1;

  function showPreviousImage() {
    setSelectedIndex((current) => (current - 1 + gallery.length) % gallery.length);
  }

  function showNextImage() {
    setSelectedIndex((current) => (current + 1) % gallery.length);
  }

  return (
    <section className="min-w-0 max-w-full" aria-label={`${productName} image gallery`}>
      <figure>
        <div
          id={imageId}
          className="relative flex h-72 w-full items-center justify-center overflow-hidden border border-navy/10 bg-white p-4 sm:h-96 sm:p-8 lg:h-[34rem]"
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={1200}
            height={900}
            className="h-full w-full object-contain"
            decoding="async"
          />

          {hasMultipleImages ? (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label={`Show previous image of ${productName}`}
                aria-controls={imageId}
                className="absolute left-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center border border-navy/20 bg-white/95 text-navy shadow-sm transition-colors hover:border-orange hover:bg-orange hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange sm:left-4"
              >
                <ChevronLeft aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={showNextImage}
                aria-label={`Show next image of ${productName}`}
                aria-controls={imageId}
                className="absolute right-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center border border-navy/20 bg-white/95 text-navy shadow-sm transition-colors hover:border-orange hover:bg-orange hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange sm:right-4"
              >
                <ChevronRight aria-hidden="true" className="size-5" />
              </button>
            </>
          ) : null}
        </div>

        <figcaption className="flex min-h-12 items-center justify-between gap-4 border-x border-b border-navy/10 bg-navy px-4 py-3 text-white">
          <span className="font-mono text-[10px] uppercase leading-relaxed tracking-widest">
            {selectedImage.caption}
          </span>
          {hasMultipleImages ? (
            <span
              className="shrink-0 font-mono text-[10px] tabular-nums tracking-widest text-white/60"
              aria-live="polite"
              aria-atomic="true"
            >
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(gallery.length).padStart(2, "0")}
            </span>
          ) : null}
        </figcaption>
      </figure>

      {hasMultipleImages ? (
        <div
          className="mt-3 flex snap-x gap-2 overflow-x-auto pb-2"
          role="group"
          aria-label={`Choose an image of ${productName}`}
        >
          {gallery.map((image, index) => {
            const isSelected = index === currentIndex;

            return (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Show image ${index + 1} of ${gallery.length}: ${image.caption}`}
                aria-controls={imageId}
                aria-current={isSelected ? "true" : undefined}
                aria-pressed={isSelected}
                className={`group relative h-20 min-w-28 snap-start overflow-hidden border-2 bg-white p-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange sm:h-24 sm:min-w-36 ${
                  isSelected ? "border-orange" : "border-navy/10 hover:border-navy/40"
                }`}
              >
                <img
                  src={image.src}
                  alt=""
                  loading="lazy"
                  width={320}
                  height={240}
                  className="h-full w-full object-contain"
                />
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 h-1 transition-[width] ${
                    isSelected ? "w-full bg-orange" : "w-0 bg-navy group-hover:w-full"
                  }`}
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}

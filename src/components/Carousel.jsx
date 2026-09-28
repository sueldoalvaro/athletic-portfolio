import { useEffect, useState, useRef } from "react";

export function Carousel({ items, renderItem, autoHeight = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemRefs = useRef({});

  useEffect(() => {
    setCurrentIndex((previousIndex) => Math.min(previousIndex, Math.max(items.length - 1, 0)));
  }, [items.length]);

  const pauseAll = () => {
    Object.values(itemRefs.current).forEach((item) => {
      if (item && typeof item.pause === "function" && !item.paused) item.pause();
    });
  };

  const handleNext = () => {
    pauseAll();
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    pauseAll();
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleSelect = (index) => {
    if (index === currentIndex) return;
    pauseAll();
    setCurrentIndex(index);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className={`relative ${autoHeight ? 'w-fit max-w-full mx-auto bg-transparent' : 'w-full bg-slate-950 rounded-lg'} overflow-hidden transition-all duration-300 ease-in-out`}>
      <div
        className={`flex transition-transform duration-300 ease-in-out ${autoHeight ? 'items-start' : 'items-stretch'}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              className={`w-full min-w-0 basis-full flex-none ${autoHeight && !isActive ? 'max-h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'}`}
              key={item.id || item.src || item.image || idx}
            >
              <div className="overflow-hidden">
                <div className={autoHeight ? "w-full flex justify-center items-center bg-transparent" : "aspect-video w-full bg-black [&>div]:h-full [&>div]:w-full"}>
                  {renderItem ? renderItem(item, isActive) : item.type === "image" ? (
                    <img className={autoHeight ? "max-h-[75vh] w-auto max-w-full object-contain mx-auto rounded-xl shadow-2xl" : "h-full w-full object-cover"} src={item.src || item.image} alt={item.alt || item.title || ""} />
                  ) : (
                    <video
                      className="h-full w-full object-contain"
                      ref={(element) => (itemRefs.current[idx] = element)}
                      src={item.src}
                      poster={item.poster}
                      controls={isActive}
                      playsInline
                      preload={isActive ? "metadata" : "none"}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {items.length > 1 && (
        <>
          <button type="button" className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-slate-900/80 px-3 py-2 text-xl text-white shadow-lg transition hover:bg-slate-700" onClick={handlePrev} aria-label="Previous">
            &#10094;
          </button>
          <button type="button" className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-slate-900/80 px-3 py-2 text-xl text-white shadow-lg transition hover:bg-slate-700" onClick={handleNext} aria-label="Next">
            &#10095;
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 justify-center gap-2">
            {items.map((item, idx) => (
              <button
                key={item.id || item.src || item.image || idx}
                type="button"
                aria-pressed={idx === currentIndex}
                className={`h-2.5 w-2.5 rounded-full transition ${idx === currentIndex ? "bg-white" : "bg-slate-600 hover:bg-slate-400"}`}
                onClick={() => handleSelect(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
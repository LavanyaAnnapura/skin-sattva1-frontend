import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { homeBeforeAfterPairs } from "@/data/homeBeforeAfter";

export const BeforeAfterHomeCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", dragFree: false });

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 3200);

    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <section className="mt-14" data-testid="home-before-after-section">
      <div className="flex items-center justify-between gap-3" data-testid="home-before-after-header">
        <div>
          <p className="section-tag" data-testid="home-before-after-tag">
            Before & After Results
          </p>
          <h3 className="service-title" data-testid="home-before-after-heading">
            Real Patient Transformations
          </h3>
        </div>
        <div className="hidden items-center gap-2 md:flex" data-testid="home-before-after-controls">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="slider-nav-button !text-foreground !border-border !bg-white/80"
            data-testid="home-before-after-prev-button"
            aria-label="Previous before after"
          >
            <ChevronLeft size={16} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="slider-nav-button !text-foreground !border-border !bg-white/80"
            data-testid="home-before-after-next-button"
            aria-label="Next before after"
          >
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-6 embla" ref={emblaRef} data-testid="home-before-after-carousel">
        <div className="embla__container" data-testid="home-before-after-track">
          {homeBeforeAfterPairs.map((pair, index) => (
            <div
              className="before-after-slide"
              key={pair.id}
              data-testid={`home-before-after-slide-${index + 1}`}
            >
              <article className="before-after-card" data-testid={`home-before-after-card-${index + 1}`}>
                <div className="before-after-images" data-testid={`home-before-after-images-${index + 1}`}>
                  <div className="before-after-pane" data-testid={`home-before-pane-${index + 1}`}>
                    <img
                      src={pair.before}
                      alt={`${pair.title} before`}
                      className="before-after-image"
                      data-testid={`home-before-image-${index + 1}`}
                    />
                    <p className="before-after-label" data-testid={`home-before-label-${index + 1}`}>
                      Before
                    </p>
                  </div>
                  <div className="before-after-pane" data-testid={`home-after-pane-${index + 1}`}>
                    <img
                      src={pair.after}
                      alt={`${pair.title} after`}
                      className="before-after-image"
                      data-testid={`home-after-image-${index + 1}`}
                    />
                    <p className="before-after-label" data-testid={`home-after-label-${index + 1}`}>
                      After
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

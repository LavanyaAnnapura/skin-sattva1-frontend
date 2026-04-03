import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export const HeroSlider = ({ slides, onBookClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const timer = setTimeout(() => emblaApi.scrollNext(), 5000);
    return () => clearTimeout(timer);
  }, [emblaApi, selectedIndex]);

  return (
    <section ref={sectionRef} id="home" className="relative h-[88vh] min-h-[38rem]" data-testid="hero-section">
      <div className="embla h-full" ref={emblaRef} data-testid="hero-slider-carousel">
        <div className="embla__container h-full">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={slide.image} data-testid={`hero-slide-${index + 1}`}>
              <motion.img
                src={slide.image}
                alt={slide.alt}
                className="hero-slide-image"
                style={{ y: parallaxY }}
                data-testid={`hero-slide-image-${index + 1}`}
              />

              <div className="hero-overlay" aria-hidden="true" />

              <motion.div
                className="hero-copy"
                initial={{ opacity: 0, y: 32 }}
                animate={{
                  opacity: selectedIndex === index ? 1 : 0,
                  y: selectedIndex === index ? 0 : 24,
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="hero-tag" data-testid={`hero-slide-tag-${index + 1}`}>
                  {slide.tag || "Premium Care Space"}
                </p>
                <h1 className="hero-title" data-testid={`hero-slide-title-${index + 1}`}>
                  {slide.title}
                </h1>
                <p className="hero-subtitle" data-testid={`hero-slide-subtitle-${index + 1}`}>
                  {slide.subtitle}
                </p>
                <p className="hero-description" data-testid={`hero-slide-description-${index + 1}`}>
                  {slide.description}
                </p>
                <button
                  type="button"
                  onClick={onBookClick}
                  className="cta-button mt-2"
                  data-testid={`hero-slide-book-button-${index + 1}`}
                >
                  Book Consultation <ArrowRight size={16} aria-hidden="true" />
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-controls" data-testid="hero-slider-controls">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          className="slider-nav-button"
          data-testid="hero-slider-prev-button"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          className="slider-nav-button"
          data-testid="hero-slider-next-button"
          aria-label="Next slide"
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>

      <div className="hero-dots" data-testid="hero-slider-dots">
        {slides.map((_, index) => (
          <button
            type="button"
            key={`dot-${index + 1}`}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`hero-dot ${selectedIndex === index ? "is-active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
            data-testid={`hero-slider-dot-${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

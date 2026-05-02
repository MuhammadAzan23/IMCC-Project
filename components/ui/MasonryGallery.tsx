'use client';

import { useEffect, useRef, useState } from 'react';

interface MasonryItem {
  id: number;
  src: string;
  alt: string;
  height: number;
}

interface MasonryGalleryProps {
  items: MasonryItem[];
  columns?: number;
  gap?: number;
  animateFrom?: 'left' | 'right' | 'bottom' | 'top';
  blurToFocus?: boolean;
  stagger?: number;
  scaleOnHover?: boolean;
  hoverScale?: number;
  colorShiftOnHover?: boolean;
}

export default function MasonryGallery({
  items,
  columns = 3,
  gap = 16,
  animateFrom = 'bottom',
  blurToFocus = true,
  stagger = 0.08,
  scaleOnHover = true,
  hoverScale = 0.96,
  colorShiftOnHover = true,
}: MasonryGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let gsapInstance: any;
    let scrollTriggerInstance: any;

    const initGSAP = async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsapInstance = gsap;
      scrollTriggerInstance = ScrollTrigger;

      if (!containerRef.current) return;

      const cards = containerRef.current.querySelectorAll('.masonry-card');

      const getInitialProps = () => {
        const base: any = { opacity: 0 };
        if (blurToFocus) base.filter = 'blur(8px)';

        switch (animateFrom) {
          case 'left': base.x = -60; break;
          case 'right': base.x = 60; break;
          case 'top': base.y = -60; break;
          case 'bottom':
          default: base.y = 60; break;
        }
        return base;
      };

      const getFinalProps = () => {
        const base: any = { opacity: 1, x: 0, y: 0 };
        if (blurToFocus) base.filter = 'blur(0px)';
        return base;
      };

      gsap.set(cards, getInitialProps());

      gsap.to(cards, {
        ...getFinalProps(),
        duration: 0.8,
        stagger,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      setLoaded(true);
    };

    initGSAP();

    return () => {
      scrollTriggerInstance?.getAll().forEach((st: any) => st.kill());
    };
  }, [animateFrom, blurToFocus, stagger]);

  // Distribute items into columns
  const columnArrays: MasonryItem[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => {
    columnArrays[i % columns].push(item);
  });

  return (
    <div
      ref={containerRef}
      className="flex w-full"
      style={{ gap: `${gap}px` }}
    >
      {columnArrays.map((col, colIdx) => (
        <div key={colIdx} className="flex-1 flex flex-col" style={{ gap: `${gap}px` }}>
          {col.map((item) => (
            <div
              key={item.id}
              className={`masonry-card overflow-hidden rounded-2xl relative group cursor-pointer ${
                !loaded ? 'opacity-0' : ''
              }`}
              style={{
                height: `${item.height}px`,
                transition: scaleOnHover ? 'transform 0.4s ease' : undefined,
              }}
              onMouseEnter={(e) => {
                if (scaleOnHover) {
                  (e.currentTarget as HTMLElement).style.transform = `scale(${hoverScale})`;
                }
              }}
              onMouseLeave={(e) => {
                if (scaleOnHover) {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                }
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-imcc-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4 ${
                  colorShiftOnHover ? 'group-hover:from-sky-900/60' : ''
                }`}
              >
                <p className="text-white font-bold text-sm">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

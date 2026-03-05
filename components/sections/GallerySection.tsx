'use client';

import { galleryChapters } from "@/lib/data";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function GallerySection() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [visibleCells, setVisibleCells] = useState<Set<number>>(new Set());

  const markImageLoaded = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  // Use Intersection Observer for scroll-triggered animations
  const observeCell = (index: number, element: HTMLElement | null) => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisibleCells((prev) => new Set(prev).add(index));
          }, 100 * index); // Stagger animations
          observer.unobserve(element);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  };

  // Create refs for each cell
  const cellRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    cellRefs.current.forEach((element, index) => {
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCells((prev) => new Set(prev).add(index));
              }, 100 * index); // Stagger animations
              observer.unobserve(element);
            }
          },
          { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
        );

        observer.observe(element);
        return () => observer.disconnect();
      }
    });
  }, []);

  const isCellVisible = (index: number) => visibleCells.has(index);

  return (
    <section
      id="галерия"
      className="bg-[#111] py-16 md:py-24 px-0 z-10 relative overflow-hidden"
    >
      <style>{`
        .story-img { transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
        @media (hover: hover) {
          .story-cell:hover .story-img { transform: scale(1.06); }
        }
        .story-cell.animate .story-img { transform: scale(1.06); }
        .story-caption { opacity: 0; transform: translateY(12px); transition: all 0.5s ease; }
        @media (hover: hover) {
          .story-cell:hover .story-caption { opacity: 1; transform: translateY(0); }
        }
        .story-cell.animate .story-caption { opacity: 1; transform: translateY(0); }
        .image-skeleton {
          background: linear-gradient(90deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      {/* Header */}
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 mb-10 md:mb-16">
        <h2 className="text-[28px] md:text-[42px] font-black text-white text-center mb-3 tracking-tight">
          Нашите истории
        </h2>
        <p className="text-center text-[14px] md:text-[18px] text-white/50">
          Всяко куче заслужава своя момент на блясък ✨
        </p>
      </div>

      {/* ── Chapter 1: Full-width hero — arrival ── */}
      <div
        ref={(el) => { cellRefs.current[0] = el; }}
        className={`story-cell relative h-[40vh] md:h-[55vh] overflow-hidden cursor-pointer mb-[3px] ${isCellVisible(0) ? 'animate' : ''}`}
      >
        <div className={`story-img absolute inset-0 ${loadedImages.has(0) ? "" : "image-skeleton"}`}>
          <Image
            src={galleryChapters.chapter1.img}
            alt={galleryChapters.chapter1.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            onLoad={() => markImageLoaded(0)}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent flex items-end p-12">
          <div className="story-caption">
            <p className="text-white/60 text-[13px] tracking-[0.3em] uppercase mb-2">
              {galleryChapters.chapter1.chapterLabel}
            </p>
            <h3
              className="text-white text-[36px] font-black leading-tight"
              dangerouslySetInnerHTML={{ __html: galleryChapters.chapter1.title }}
            ></h3>
          </div>
        </div>
      </div>

      {/* ── Chapter 2: Side-by-side — wash & prep ── */}
      <div className="flex gap-[3px] mb-[3px]">
        {galleryChapters.chapter2.images.map((chapter, i) => (
          <div
            key={i}
            ref={(el) => { cellRefs.current[i + 1] = el; }}
            className={`story-cell relative flex-1 h-[35vh] md:h-[45vh] overflow-hidden cursor-pointer ${isCellVisible(i + 1) ? 'animate' : ''}`}
          >
            <div className={`story-img absolute inset-0 ${loadedImages.has(i + 1) ? "" : "image-skeleton"}`}>
              <Image
                src={chapter.img}
                alt={chapter.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                onLoad={() => markImageLoaded(i + 1)}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="story-caption">
                <p className="text-white/60 text-[11px] tracking-[0.3em] uppercase mb-1">
                  {chapter.chapterLabel}
                </p>
                <h3 className="text-white text-[22px] font-black">
                  {chapter.title}
                </h3>
                <p className="text-white/70 text-[13px] mt-1">
                  {chapter.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Chapter 3: Wide cinematic — the cut ── */}
      <div className="flex gap-[3px] mb-[3px]">
        {galleryChapters.chapter3.images.map((chapter, i) => (
          <div
            key={i}
            ref={(el) => { cellRefs.current[i + 3] = el; }}
            className={`story-cell relative ${
              chapter.wide ? "w-[65%]" : "flex-1"
            } h-[40vh] md:h-[50vh] overflow-hidden cursor-pointer ${isCellVisible(i + 3) ? 'animate' : ''}`}
          >
            <div className={`story-img absolute inset-0 ${loadedImages.has(i + 3) ? "" : "image-skeleton"}`}>
              <Image
                src={chapter.img}
                alt={chapter.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 65vw"
                loading="lazy"
                onLoad={() => markImageLoaded(i + 3)}
              />
            </div>
            <div
              className={`absolute inset-0 ${
                chapter.wide
                  ? "bg-gradient-to-tr from-black/75 to-transparent"
                  : "bg-gradient-to-t from-black/65 to-transparent"
              } flex items-end p-8`}
            >
              <div className="story-caption">
                <p className="text-white/60 text-[11px] tracking-[0.3em] uppercase mb-2">
                  {chapter.chapterLabel}
                </p>
                <h3
                  className="text-white font-black leading-tight"
                  style={{ fontSize: chapter.wide ? "30px" : "20px" }}
                  dangerouslySetInnerHTML={{ __html: chapter.title }}
                ></h3>
                {chapter.subtitle && (
                  <p className="text-white/70 text-[14px] mt-2">
                    {chapter.subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Chapter 4: Three-column — finishing touches ── */}
      <div className="flex gap-[3px] mb-[3px]">
        {galleryChapters.chapter4.images.map((chapter, i) => (
          <div
            key={i}
            ref={(el) => { cellRefs.current[i + 5] = el; }}
            className={`story-cell relative flex-1 h-[35vh] md:h-[40vh] overflow-hidden cursor-pointer ${isCellVisible(i + 5) ? 'animate' : ''}`}
          >
            <div className={`story-img absolute inset-0 ${loadedImages.has(i + 5) ? "" : "image-skeleton"}`}>
              <Image
                src={chapter.img}
                alt={chapter.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
                onLoad={() => markImageLoaded(i + 5)}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div className="story-caption">
                {chapter.chapterLabel && (
                  <p className="text-white/60 text-[10px] tracking-[0.3em] uppercase mb-1">
                    {chapter.chapterLabel}
                  </p>
                )}
                <h3
                  className="text-white text-[18px] font-black"
                  dangerouslySetInnerHTML={{ __html: chapter.title }}
                ></h3>
                {chapter.subtitle && (
                  <p className="text-white/60 text-[13px] mt-1">
                    {chapter.subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Chapter 5: Reveal — full width gorgeous result ── */}
      <div
        ref={(el) => { cellRefs.current[8] = el; }}
        className={`story-cell relative h-[40vh] md:h-[55vh] overflow-hidden cursor-pointer ${isCellVisible(8) ? 'animate' : ''}`}
      >
        <div className={`story-img absolute inset-0 ${loadedImages.has(8) ? "" : "image-skeleton"}`}>
          <Image
            src={galleryChapters.chapter5.img}
            alt={galleryChapters.chapter5.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            loading="lazy"
            onLoad={() => markImageLoaded(8)}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-black/75 via-black/20 to-transparent flex items-center justify-end p-16 text-right">
          <div className="story-caption max-w-[400px]">
            <p className="text-white/60 text-[13px] tracking-[0.3em] uppercase mb-3">
              {galleryChapters.chapter5.chapterLabel}
            </p>
            <h3
              className="text-white text-[38px] font-black leading-tight"
              dangerouslySetInnerHTML={{
                __html: galleryChapters.chapter5.title,
              }}
            ></h3>
            <p className="text-white/70 text-[16px] mt-4 leading-relaxed">
              {galleryChapters.chapter5.subtitle}
            </p>
            {galleryChapters.chapter5.hasLink && (
              <a
                href="#контакти"
                className="inline-block mt-6 bg-white text-black font-bold text-[15px] px-7 py-3 rounded-full hover:bg-amber-400 transition-colors"
              >
                Запази час →
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

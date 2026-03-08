import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Gallery() {
  const photos = [
    {
      url: "https://res.cloudinary.com/dkwqszhed/image/upload/v1772883237/9_wvt5yt.png",
      alt: "Event moment 1",
      className: "md:col-span-8 md:row-span-2"
    },
    {
      url: "https://res.cloudinary.com/dkwqszhed/image/upload/v1772883231/6_aqwaoe.png",
      alt: "Event moment 2",
      className: "md:col-span-4 md:row-span-1"
    },
    {
      url: "https://res.cloudinary.com/dkwqszhed/image/upload/v1772883229/7_ymknzu.png",
      alt: "Event moment 3",
      className: "md:col-span-4 md:row-span-1"
    },
    {
      url: "https://res.cloudinary.com/dkwqszhed/image/upload/v1772883225/11_piyjnn.png",
      alt: "Event moment 4",
      className: "md:col-span-6 md:row-span-1"
    },
    {
      url: "https://res.cloudinary.com/dkwqszhed/image/upload/v1772883223/10_iosvhr.png",
      alt: "Event moment 5",
      className: "md:col-span-6 md:row-span-1"
    },
    {
      url: "https://res.cloudinary.com/dkwqszhed/image/upload/v1772883221/8_r3uefk.png",
      alt: "Event moment 6",
      className: "md:col-span-4 md:row-span-1"
    },
    {
      url: "https://res.cloudinary.com/dkwqszhed/image/upload/v1772883219/3_b1nbti.png",
      alt: "Event moment 7",
      className: "md:col-span-4 md:row-span-1"
    },
    {
      url: "https://res.cloudinary.com/dkwqszhed/image/upload/v1772883219/4_biexim.png",
      alt: "Event moment 8",
      className: "md:col-span-4 md:row-span-1"
    },
    {
      url: "https://res.cloudinary.com/dkwqszhed/image/upload/v1772883815/17_bb00oz.jpg",
      alt: "Event moment 9",
      className: "md:col-span-4 md:row-span-2"
    },
    {
      url: "https://res.cloudinary.com/dkwqszhed/image/upload/v1772883814/18_xm3fqx.jpg",
      alt: "Event moment 10",
      className: "md:col-span-8 md:row-span-1"
    },
    {
      url: "https://res.cloudinary.com/dkwqszhed/image/upload/v1772883813/19_a4otro.jpg",
      alt: "Event moment 11",
      className: "md:col-span-4 md:row-span-1"
    },
    {
      url: "https://res.cloudinary.com/dkwqszhed/image/upload/v1772883811/15_mitwne.jpg",
      alt: "Event moment 12",
      className: "md:col-span-4 md:row-span-1"
    },
    {
      url: "https://res.cloudinary.com/dkwqszhed/image/upload/v1772883811/16_fe3jrk.jpg",
      alt: "Event moment 13",
      className: "md:col-span-6 md:row-span-1"
    },
    {
      url: "https://res.cloudinary.com/dkwqszhed/image/upload/v1772883810/1_ubbadh.jpg",
      alt: "Event moment 14",
      className: "md:col-span-6 md:row-span-1"
    },
    {
      url: "https://res.cloudinary.com/dkwqszhed/image/upload/v1772883810/14_clvc6f.jpg",
      alt: "Event moment 15",
      className: "md:col-span-4 md:row-span-1"
    },
    {
      url: "https://res.cloudinary.com/dkwqszhed/image/upload/v1772883810/12_pifx7m.jpg",
      alt: "Event moment 16",
      className: "md:col-span-4 md:row-span-1"
    },
    {
      url: "https://res.cloudinary.com/dkwqszhed/image/upload/v1772883810/13_mhgppq.jpg",
      alt: "Event moment 17",
      className: "md:col-span-4 md:row-span-1"
    }
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-zinc-50 scroll-mt-16 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
          <div className="flex flex-col items-start gap-2 max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 leading-tight">
              Moments Captured
            </h2>
            <p className="text-zinc-500 font-light tracking-tight text-base lg:text-lg">
              A few moments from the gathering.
            </p>
          </div>
          <a 
            href="https://shifu-ventures.slack.com/archives/D08SR7NV1E1/p1772874790947729" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-6 py-3.5 transition-all duration-300 w-fit shrink-0"
          >
            <span className="text-[13px] font-bold text-white uppercase tracking-widest transition-colors duration-300">
              View All Photos
            </span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-2 sm:gap-4 auto-rows-[160px] sm:auto-rows-[250px] lg:auto-rows-[300px]">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden bg-zinc-200 group ring-1 ring-zinc-900/5 col-span-1 ${photo.className || ''}`}
            >
              <img 
                src={photo.url} 
                alt={photo.alt} 
                className="absolute inset-0 w-full h-full object-cover scale-[1.15] group-hover:scale-[1.20] transition-all duration-1000 ease-in-out origin-center"
              />
              {/* Subtle elegant dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
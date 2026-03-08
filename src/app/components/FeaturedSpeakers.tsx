import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import pawanImage from 'figma:asset/6b49829d276affc2d20729a83a75c63eeef503e5.png';
import satishImage from 'figma:asset/e81463fa36c45815a742055d015de7150f7eedc9.png';
import shastriImage from 'figma:asset/5385497133b03be15e1dc9eeafd1e5037c471e90.png';

export function FeaturedSpeakers() {
  const speakers = [
    {
      name: "Dr. V.A. Sastry",
      role: "Pioneering IT Veteran",
      batch: "NITW '64",
      credibility: "One of the earliest non-promoter board members of Infosys. Co-founder of RelQ and currently leading MUSA Software Engineering. Has mentored generations of entrepreneurs.",
      photo: shastriImage,
      linkedin: "https://economictimes.indiatimes.com/tech/ites/vyakarnam-anjenaya-sastry-the-man-who-donated-shares-worth-rs-1850-crore-to-infosys/articleshow/37488929.cms"
    },
    {
      name: "Sathish Visanagiri",
      role: "Founder & CEO, Reckonsys",
      batch: "NITW '93",
      credibility: "An exceptional teacher to many entrepreneurs. One of the first people who believed in Sri and wrote the first cheque for Almabase. Amazing mentor for founders on technical feasibility and MVP.",
      photo: satishImage,
      linkedin: "https://www.linkedin.com/in/sathishvisanagiri/"
    },
    {
      name: "Pavan Thatha",
      role: "Founder & CEO, ShieldSquare",
      batch: "NITW '04",
      credibility: "Built ShieldSquare, a global leader in bot mitigation, and led its acquisition by Radware. IIT Bombay gold medalist and long-time mentor to many NITW founders.",
      photo: pawanImage,
      linkedin: "https://www.linkedin.com/in/pavanthatha/"
    }
  ];

  return (
    <section id="speakers" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-16 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-10 sm:mb-12 lg:mb-16 flex flex-col md:flex-row gap-4 sm:gap-8 justify-between items-start md:items-end">
          <div className="flex flex-col gap-2 max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 leading-tight">
              Featured Speakers
            </h2>
            <p className="text-zinc-500 font-light tracking-tight text-base lg:text-lg leading-relaxed">
              Alumni founders who shared their journeys and perspectives during the meetup.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {speakers.map((speaker, index) => (
            <div key={index} className="group relative flex flex-col">
              <div className="aspect-[4/5] w-full bg-zinc-100 mb-6 relative overflow-hidden ring-1 ring-zinc-900/5">
                <ImageWithFallback 
                  src={speaker.photo} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                <a 
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md flex items-center justify-center text-zinc-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-baseline justify-between gap-3 mb-1.5">
                  <h3 className="text-xl font-medium text-zinc-900 tracking-tight">{speaker.name}</h3>
                  <span className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">{speaker.batch}</span>
                </div>
                <p className="text-zinc-900 font-medium text-sm mb-3">{speaker.role}</p>
                <div className="w-8 h-px bg-zinc-200 mb-3"></div>
                <p className="text-zinc-500 font-normal leading-relaxed text-sm">
                  {speaker.credibility}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
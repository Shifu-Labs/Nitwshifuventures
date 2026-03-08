import React from 'react';
import { ArrowRight } from 'lucide-react';

export function NextSteps() {
  const steps = [
    {
      number: "01",
      title: "Recurring Founder Meetups",
      description: "Establish a regular meetup format for alumni entrepreneurs."
    },
    {
      number: "02",
      title: "Community Platform",
      description: "Launch an online platform and WhatsApp community for ongoing collaboration."
    },
    {
      number: "03",
      title: "Alumni Database",
      description: "Build a searchable alumni network database to improve discoverability and connections."
    },
    {
      number: "04",
      title: "Network Expansion",
      description: "Gradually include student entrepreneurs, early-stage founders, and experienced alumni to build a diverse and supportive community."
    }
  ];

  return (
    <section id="next-steps" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-white scroll-mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-24">
        
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
              Next Steps
            </h2>
            <p className="text-zinc-400 font-light tracking-tight text-base lg:text-lg leading-relaxed max-w-md">
              What we plan to do next as a community.
            </p>
          </div>
          <div className="pt-2">
            <div className="border-l-2 border-zinc-700 pl-5 py-1">
              <p className="text-zinc-400 text-[16px] leading-relaxed font-light italic">
                The goal is simple: help 10× more startups emerge from NIT Warangal — with stronger support, deeper collaboration, and greater impact.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col group cursor-default">
              <div className="mb-4 flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-xs font-mono text-zinc-500 tracking-widest">{step.number}</span>
              </div>
              <h3 className="text-lg font-medium text-white mb-2 tracking-tight">{step.title}</h3>
              <p className="text-zinc-400 font-normal leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
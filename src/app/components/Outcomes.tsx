import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function Outcomes() {
  const takeaways = [
    {
      title: "Strong Potential",
      description: "The NITW alumni network has strong potential to support entrepreneurs",
    },
    {
      title: "Visible Stories",
      description: "Making alumni stories visible can inspire current students",
    },
    {
      title: "Market Access",
      description: "Market access and mentorship are as important as early funding",
    },
    {
      title: "Trust Networks",
      description: "Alumni trust networks can simplify hiring and collaboration",
    },
    {
      title: "Focused Meetups",
      description: "Short, focused meetups can drive meaningful conversations and outcomes"
    }
  ];

  return (
    <section id="outcomes" className="py-12 lg:py-16 px-6 lg:px-8 bg-zinc-50 scroll-mt-16 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Key Takeaways */}
        <div className="flex flex-col space-y-8 w-full md:w-1/2">
          <div className="flex flex-col gap-2 border-b border-zinc-200 pb-6">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 leading-tight">
              Key Takeaways
            </h2>
            <p className="text-zinc-500 font-light tracking-tight text-base lg:text-lg">
              Insights gathered from the event's discussions.
            </p>
          </div>
          
          <ul className="space-y-6">
            {takeaways.map((item, index) => (
              <li key={index} className="flex flex-col gap-1.5 group">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">{item.title}</span>
                <span className="text-zinc-700 font-normal leading-relaxed text-[15px] group-hover:text-zinc-900 transition-colors duration-300">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  );
}

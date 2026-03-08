import React from 'react';

export function EventHighlights() {
  const highlights = [
    {
      theme: "ALUMNI NETWORK",
      title: "Strengthening connections between NITW founders and alumni to improve discoverability.",
      paragraphs: [
        "One of the key themes of the gathering was the need to strengthen connections between NIT Warangal entrepreneurs and the broader alumni network.",
        "Many successful alumni stories remain largely unknown within the community, which creates missed opportunities for mentorship, collaboration, and inspiration.",
        "Improving discoverability within the alumni ecosystem was identified as an important step toward unlocking stronger founder support."
      ],
      bullets: [
        "Making alumni founder journeys more visible to students",
        "Improving access to alumni mentors across industries",
        "Enabling stronger alumni-to-alumni collaboration",
        "Leveraging the natural trust within the NITW network for hiring and references"
      ]
    },
    {
      theme: "FUNDING FRAMEWORK",
      title: "Expanding the existing ₹50L student project fund through alumni-backed capital.",
      paragraphs: [
        "NIT Warangal currently has a ₹50 lakh fund allocated to support student projects that demonstrate strong potential.",
        "Participants discussed how the alumni network could extend this initiative by enabling additional funding pathways and mentorship support for student entrepreneurs.",
        "The goal is to strengthen the funding ecosystem that helps students move from projects to real startups."
      ],
      bullets: [
        "Encouraging alumni participation in early stage funding",
        "Extending financial support beyond the existing college fund",
        "Supporting students as they transition from projects to startups",
        "Connecting student founders with alumni investors and advisors"
      ]
    },
    {
      theme: "MARKET ACCESS",
      title: "Leveraging the alumni network for customer introductions and industry partnerships.",
      paragraphs: [
        "Many early founders struggle not with building products, but with gaining access to markets and early customers.",
        "The alumni network can play a powerful role in bridging this gap by opening doors to customers, partnerships, and industry networks.",
        "The focus of the discussion was on enabling meaningful support rather than transactional networking."
      ],
      bullets: [
        "Alumni introductions to early customers",
        "Industry connections in startup ecosystems such as Bangalore",
        "Opportunities for pilot customers and partnerships",
        "Practical mentorship on navigating early market entry"
      ]
    },
    {
      theme: "LEARNING FROM FAILURES",
      title: "A “stepping stone” approach to analyzing setbacks and sharing founder lessons.",
      paragraphs: [
        "The conversation emphasized that strong founder ecosystems learn not only from success stories but also from failures.",
        "Many alumni founders have faced setbacks during their entrepreneurial journeys, and those lessons can provide immense value to younger founders.",
        "Participants discussed creating spaces where these experiences can be shared openly to enable collective learning."
      ],
      bullets: [
        "Encouraging honest conversations about entrepreneurial setbacks",
        "Extracting lessons that help founders avoid common mistakes",
        "Sharing real founder journeys beyond success narratives",
        "Building a culture of openness and learning within the alumni community"
      ]
    }
  ];

  return (
    <section id="highlights" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-zinc-50 scroll-mt-16 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-12 lg:mb-20">
          <div className="flex flex-col gap-2 max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 leading-tight">
              Event Highlights
            </h2>
            <p className="text-zinc-500 font-light tracking-tight text-base lg:text-lg leading-relaxed">
              Highlights from the conversations that happened during the meetup.
            </p>
          </div>
        </div>

        <div className="flex flex-col border-t border-zinc-200">
          {highlights.map((highlight, index) => {
            return (
              <div 
                key={index} 
                className="group relative flex flex-col py-6 lg:py-8 px-6 -mx-6 rounded-none"
              >
                <div className="absolute bottom-0 left-6 right-6 h-px bg-zinc-200/60" />
                
                <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8">
                  <div className="lg:w-1/4 shrink-0 lg:pt-1">
                    <span className="text-[11px] font-semibold tracking-widest text-zinc-400 uppercase">
                      {highlight.theme}
                    </span>
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="text-lg lg:text-xl font-medium tracking-tight leading-snug text-zinc-800">
                      {highlight.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
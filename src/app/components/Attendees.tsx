import React from 'react';
import { Linkedin } from 'lucide-react';
import attendeesData from '../../imports/founders-list.json';
import { ImageWithFallback } from './figma/ImageWithFallback';

const placeholderPhotos = [
  "https://images.unsplash.com/photo-1554765345-6ad6a5417cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1769636929261-e913ed023c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1758599543120-4e462429a4d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1649433658557-54cf58577c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1548597180-23cc88a9a6f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
];

export function Attendees() {
  const attendees = attendeesData.filter(a => a.name !== "Ashwini Tambi").map((attendee, index) => {
    // Find matching photo from team-profiles if available
    let photoUrl = placeholderPhotos[index % placeholderPhotos.length]; // fallback
    
    // Custom mapping for specific attendees based on team-profiles.json
    const nameMap: Record<string, string> = {
      "Sri Maneru": "https://res.cloudinary.com/dkwqszhed/image/upload/v1772888509/sri_rlykpc.jpg",
      "Ish Jindal": "https://secure.gravatar.com/avatar/a596116c1390ea28b130455a23a7f836?s=200&d=mm&r=g",
      "Anupam Singh": "https://nitw-meet.vercel.app/Anupam%20Singh.jpeg",
      "Rohit Agarwal": "https://nitw-meet.vercel.app/Rohit%20Agarwal.jpeg",
      "Yagnasri Alla": "https://nitw-meet.vercel.app/Yagna%20Alla.jpeg",
      "Navneet Gupta": "https://nitw-meet.vercel.app/Navneet%20Singh.jpeg", // Navneet Singh mapping
      "Rakesh Sarma": "https://nitw-meet.vercel.app/Rakesh%20Sharma.jpeg", // Rakesh Sharma mapping
      "Sohit Kumar": "https://nitw-meet.vercel.app/Sohit%20Kumar.jpeg",
      "Piyush Joshi": "https://bluehill.vc/assest/images/Piyush.png",
      "Sridhar Sirugudi": "https://res.cloudinary.com/dkwqszhed/image/upload/v1772888509/sirugudi_rqd94n.jpg",
      "Divya Banda": "https://nitw-meet.vercel.app/Divya%20Banda.jpeg",
      "Sesha Phani": "https://res.cloudinary.com/dkwqszhed/image/upload/v1772888508/sesha_jgfsvo.jpg",
      "Manu Menon": "https://res.cloudinary.com/dkwqszhed/image/upload/v1772888509/manu_gjygev.jpg",
      "Saurabh": "", // Placeholder — no photo available
      "Prateek Sethi": "https://cdn.theorg.com/8b9634c0-4f7a-4edb-a14a-b142cca70b8e_medium.jpg",
      "Mausmi Ambastha": "https://saasboomi.org/wp-content/uploads/2023/08/Mausmi-Ambastha.jpeg",
      "Manu Singh": "https://nitw-meet.vercel.app/Manu%20Singh.jpeg",
      "Manasij Ganguli": "https://storage.googleapis.com/weekday-user-pictures/profile-images/mganguli-fzxlbi.jpg",
      "Aniruddha Khanwilkar": "https://nitw-meet.vercel.app/Aniruddha%20Khanwilkar.jpeg",
      "Ritesh Varma": "https://nitw-meet.vercel.app/Ritesh%20Varma.jpeg",
      "Amaresh Marripudi": "https://res.cloudinary.com/dkwqszhed/image/upload/v1772900273/amaresh_ulgxkf.jpg",
      "Medha Sravani": "https://res.cloudinary.com/dkwqszhed/image/upload/v1772900274/medha_quhqfx.jpg",
      "Manish Mishra": "https://res.cloudinary.com/dkwqszhed/image/upload/v1772900273/manish_svwn5c.jpg",
      "Som": "" // Placeholder — no photo available
    };

    if (attendee.name in nameMap) {
      photoUrl = nameMap[attendee.name];
    }
    
    return {
      ...attendee,
      photo: photoUrl
    };
  }).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section id="attendees" className="pt-16 pb-4 sm:pt-20 sm:pb-6 lg:pt-28 lg:pb-6 px-4 sm:px-6 lg:px-8 bg-zinc-50 scroll-mt-16 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 lg:mb-16 pb-6 border-b border-zinc-200">
          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 leading-tight">
              The Room
            </h2>
            <p className="text-zinc-500 font-light tracking-tight text-base lg:text-lg">
              Alumni who came together for conversations, connections, and shared learning.
            </p>
          </div>
          <div className="w-full md:w-auto mt-4 md:mt-0 text-zinc-400 font-medium text-xs tracking-widest uppercase">
            {attendees.length} Attendees
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {attendees.map((attendee, index) => {
            const designation = [attendee.role, attendee.company].filter(Boolean).join(attendee.role && attendee.company ? ' at ' : '');
            
            return (
              <div 
                key={index} 
                className="group relative flex flex-col bg-white border border-zinc-200 p-5 sm:p-6 hover:shadow-sm hover:border-zinc-300 transition-all duration-300 rounded-none"
              >
                <div className="flex justify-between items-start mb-4 sm:mb-5">
                  <div className="w-14 h-14 shrink-0 bg-zinc-100 ring-1 ring-zinc-900/5 overflow-hidden">
                    {attendee.photo ? (
                      <ImageWithFallback 
                        src={attendee.photo}
                        alt={attendee.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-zinc-200 text-zinc-500 text-sm font-semibold select-none">
                        {attendee.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>
                  {attendee.linkedin && (
                    <a 
                      href={attendee.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-400 hover:text-[#0A66C2] p-1.5 rounded-none flex items-center justify-center shadow-sm"
                      aria-label={`${attendee.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
                    <h3 className="text-[15px] font-semibold text-zinc-900 tracking-tight leading-none">{attendee.name}</h3>
                    {attendee.batch && (
                      <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider bg-zinc-100 px-1.5 py-0.5 leading-none">
                        {attendee.batch}
                      </span>
                    )}
                  </div>
                  
                  {designation && (
                    <p className="text-[13px] text-zinc-600 font-medium leading-snug mb-3 sm:mb-4">{designation}</p>
                  )}
                  
                  <div className="mt-auto">
                    <p className="text-[13px] text-zinc-400 group-hover:text-zinc-500 font-normal leading-relaxed transition-colors duration-300">
                      {attendee.description}
                    </p>
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
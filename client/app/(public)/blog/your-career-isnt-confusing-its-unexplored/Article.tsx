"use client";

import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Users, 
  Lightbulb,
  ArrowRight,
  Bookmark,
  Clock,
  Calendar,
  LinkedinIcon,
  ExternalLink,
  Target,
  Network,
  Search,
  CheckCircle2
} from 'lucide-react';

const Article = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sectors = [
      { title: "Vessel Operations & Technical Management", desc: "Managing ship performance, maintenance, and compliance from shore or onboard." },
      { title: "Shipboard Engineering (Sailing Role)", desc: "Working as a Marine Engineer onboard handling engines, machinery, and daily operations." },
      { title: "Dry Docking & Repairs", desc: "Overseeing vessel maintenance, inspections, retrofits, and yard periods." },
      { title: "Marine Surveying & Audits", desc: "Conducting inspections, condition surveys, pre-purchase inspections, and compliance audits." },
      { title: "Shipbuilding & Design", desc: "Working with shipyards on vessel construction, design, and new builds." },
      { title: "Offshore & Oil/Gas Sector", desc: "Roles in rigs, offshore vessels, FPSOs, and energy projects." },
      { title: "Maritime Safety & Compliance (HSEQ)", desc: "Ensuring vessels meet international safety, environmental, and regulatory standards." },
      { title: "Marine Procurement & Supply Chain", desc: "Handling sourcing, spares, logistics, and vendor management for fleets." },
      { title: "Port & Terminal Operations", desc: "Managing port machinery, cargo operations, and terminal efficiency." },
      { title: "Crewing & Marine HR", desc: "Managing recruitment, deployment, training, and welfare of seafarers." },
      { title: "PMS (Planned Maintenance Systems)", desc: "Working with maintenance software, fleet performance data, and digital ship management systems." },
      { title: "Environmental & Sustainability Roles", desc: "Focusing on emissions, decarbonisation, IMO regulations, ESG goals, and green shipping initiatives." },
      { title: "Maritime Training & Academics", desc: "Becoming a trainer, lecturer, or simulator instructor." },
      { title: "Technical Sales & Marine Equipment", desc: "Working with marine equipment companies in sales, solutions, and client management." },
      { title: "Marine Insurance & Claims", desc: "Handling risk assessment, claims, and inspections for insurers." },
      { title: "Maritime Law & Arbitration", desc: "Specialising in legal, dispute resolution, and compliance areas (with further study)." }
    ];
  
    const author = {
      name: "Mrs. Roohi Mehta",
      position: "Recruitment Director at Navora",
      image: "/roohimehta.png",
      linkedin: "https://www.linkedin.com/in/roohi-mehta-73b45515/",
    };
  
    return (
      <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-[#B8962D]/30">
        {/* Read Progress Bar */}
        <div 
          className="fixed top-0 left-0 h-1 bg-[#B8962D] z-[60] transition-all duration-150" 
          style={{ width: `${scrollProgress}%` }}
        />
  
        <div className="max-w-4xl mx-auto px-6 pt-8 pb-20">
          {/* Article Header */}
          <header className="mb-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-[#1A365D] text-[#B8962D] text-[10px] font-black uppercase tracking-[0.2em] rounded">
                  Career Strategy
                </span>
              </div>
            </div>
  
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-[#1A365D] leading-[1.1] mb-10 tracking-tight">
              There are so many fields... but how do I even know what fields exist?
              {/* “𝐓𝐡𝐞𝐫𝐞 𝐚𝐫𝐞 𝐬𝐨 𝐦𝐚𝐧𝐲 𝐟𝐢𝐞𝐥𝐝𝐬… 𝐛𝐮𝐭 𝐡𝐨𝐰 𝐝𝐨 𝐈 𝐞𝐯𝐞𝐧 𝐤𝐧𝐨𝐰 𝐰𝐡𝐚𝐭 fields 𝐞𝐱𝐢𝐬𝐭?” */}
            </h1>
  
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-y border-slate-100 py-8">
              <div className="flex items-center gap-4">
                <img 
                  src={author.image} 
                  alt={author.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#B8962D]/20 shadow-sm"
                  onError={(e) => {
    e.currentTarget.src =
      'https://ui-avatars.com/api/?name=RV&background=1A365D&color=B8962D';
  }}
                />
                <div>
                  <h3 className="font-bold text-[#1A365D] text-lg leading-tight">{author.name}</h3>
                  <p className="text-sm text-slate-500 font-medium">{author.position}</p>
                  <div className="flex gap-3 mt-1 text-slate-400">
                    <a href={author.linkedin} target="_blank" rel="noopener noreferrer">
                      <LinkedinIcon size={14} className="hover:text-[#B8962D] cursor-pointer transition-colors" />
                    </a>
                    {/* <ExternalLink size={14} className="hover:text-[#B8962D] cursor-pointer transition-colors" /> */}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-slate-400 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#B8962D]" />
                  <span>April 3, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[#B8962D]" />
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          </header>
  
          {/* Content Body */}
          <article className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed">
            
            {/* <div className="bg-[#1A365D] text-white p-8 rounded-2xl mb-12 shadow-xl shadow-blue-900/10 relative overflow-hidden">
              <h4 className="text-[#B8962D] font-black text-xs uppercase tracking-widest mb-4">𝐒𝐞𝐪𝐮𝐞𝐥</h4>
              <p className="text-2xl font-serif italic m-0 relative z-10 leading-snug">
                “𝐓𝐡𝐞𝐫𝐞 𝐚𝐫𝐞 𝐬𝐨 𝐦𝐚𝐧𝐲 𝐟𝐢𝐞𝐥𝐝𝐬… 𝐛𝐮𝐭 𝐡𝐨𝐰 𝐝𝐨 𝐈 𝐞𝐯𝐞𝐧 𝐤𝐧𝐨𝐰 𝐰𝐡𝐚𝐭 fields 𝐞𝐱𝐢𝐬𝐭?”
              </p>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Compass size={120} />
              </div>
            </div> */}
  
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              After my previous post, a Marine Engineer asked me a very honest question:
            </p>
  
            <blockquote className="border-l-4 border-[#B8962D] pl-6 py-2 italic text-slate-500 text-xl bg-slate-50 rounded-r-xl mb-10">
              “𝑩𝒖𝒕 𝒉𝒐𝒘 𝒕𝒐 𝒇𝒊𝒏𝒅 𝒗𝒂𝒓𝒊𝒐𝒖𝒔 𝒊𝒏𝒕𝒆𝒓𝒏𝒔𝒉𝒊𝒑𝒔? 𝑩𝒖𝒕 𝒃𝒆𝒇𝒐𝒓𝒆 𝒕𝒉𝒂𝒕 𝒐𝒏𝒆 𝒉𝒂𝒔 𝒕𝒐 𝒆𝒗𝒆𝒏 𝒌𝒏𝒐𝒘 𝒘𝒉𝒂𝒕 𝒂𝒓𝒆 𝒕𝒉𝒆 𝒇𝒊𝒆𝒍𝒅𝒔 𝒕𝒉𝒂𝒕 𝒆𝒗𝒆𝒏 𝒆𝒙𝒊𝒔𝒕, 𝒉𝒐𝒘 𝒕𝒐 𝒌𝒏𝒐𝒘 𝒕𝒉𝒂𝒕 ?”
            </blockquote>
  
            <p className="mb-12">
              That’s the real starting point. Because before choosing what suits you, you need to first understand <strong>what’s out there.</strong>
            </p>
  
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A365D] mb-8 flex items-center gap-4">
                <span className="text-[#B8962D]">𝐒𝐭𝐞𝐩 𝟏:</span> 𝐌𝐚𝐩 𝐭𝐡𝐞 𝐥𝐚𝐧𝐝𝐬𝐜𝐚𝐩𝐞
              </h2>
              <p className="mb-6">
                When you opt for a particular field let’s say you are from Engineering background you have already figured out your domain something you really liked.
              </p>
              <p className="mb-8">
                Now which field in that particular domain resonates with you… is the area you have to figure out by first <strong>strategizing</strong> or looking how many areas are there. Every domain is much wider than it looks from the outside.
              </p>
  
              <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-100 italic text-slate-600">
                Take Marine Engineering, for example — it’s not just "working on ships." It can branch into:
              </div>
  
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sectors.map((sector, index) => (
                  <div key={index} className="group flex items-start justify-between p-5 bg-white border border-slate-100 rounded-xl hover:border-[#B8962D] hover:shadow-md transition-all duration-300">
                    <div>
                      <h4 className="text-sm font-black text-[#1A365D] uppercase tracking-wider mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#B8962D] rounded-full"></span>
                        {sector.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">{sector.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="mt-8 text-slate-500 italic">Most students only see 1–2 of these. That’s where the gap begins.</p>
            </section>
  
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A365D] mb-8 flex items-center gap-4">
                <span className="text-[#B8962D]">𝐒𝐭𝐞𝐩 𝟐:</span> 𝐅𝐢𝐥𝐭𝐞𝐫 — 𝐁𝐮𝐭 𝐒𝐦𝐚𝐫𝐭𝐥𝐲
              </h2>
              <p className="mb-6 italic">Don’t just ask: “What do I like?”</p>
              <p className="mb-8 italic">Also ask: “What is relevant in the market?” and “Where are opportunities growing?”</p>
  
              <div className="p-10 bg-slate-900 rounded-2xl text-white border-b-8 border-[#B8962D] text-center">
                <h3 className="text-[#B8962D] font-black text-xs uppercase tracking-[0.3em] mb-8">The Sweet Spot</h3>
                <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
                  <div className="px-6 py-3 border border-white/10 rounded-full font-bold">
                    𝐈𝐧𝐭𝐞𝐫𝐞𝐬𝐭
                  </div>
                  <div className="text-[#B8962D] font-bold text-2xl">∩</div>
                  <div className="px-6 py-3 border border-white/10 rounded-full font-bold">
                    𝐌𝐚𝐫𝐤𝐞𝐭 𝐃𝐞𝐦𝐚𝐧𝐝
                  </div>
                  <div className="text-[#B8962D] font-bold text-2xl">∩</div>
                  <div className="px-6 py-3 border border-white/10 rounded-full font-bold">
                    𝐘𝐨𝐮𝐫 𝐒𝐭𝐫𝐞𝐧𝐠𝐭𝐡𝐬
                  </div>
                </div>
              </div>
            </section>
  
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A365D] mb-8 flex items-center gap-4">
                <span className="text-[#B8962D]">𝐒𝐭𝐞𝐩 𝟑:</span> 𝐆𝐞𝐭 𝐂𝐥𝐨𝐬𝐞 𝐭𝐨 𝐭𝐡𝐞 𝐑𝐞𝐚𝐥 𝐖𝐨𝐫𝐥𝐝
              </h2>
              <p className="mb-8">Before even landing an internship:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Talk to professionals in that field",
                  "Follow industry leaders",
                  "Read current trends and updates",
                  "Join relevant communities"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl">
                    <Search size={18} className="text-[#B8962D]" />
                    <span className="font-bold text-[#1A365D] text-sm uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-xl text-[#1A365D] font-serif italic">
                "Because clarity doesn’t come from thinking. It comes from exposure."
              </p>
            </section>
  
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A365D] mb-8 flex items-center gap-4">
                <span className="text-[#B8962D]">𝐒𝐭𝐞𝐩 𝟒:</span> 𝐔𝐬𝐞 𝐈𝐧𝐭𝐞𝐫𝐧𝐬𝐡𝐢𝐩𝐬 𝐒𝐭𝐫𝐚𝐭𝐞𝐠𝐢𝐜𝐚𝐥𝐥𝐲
              </h2>
              <p className="mb-8">Yes, some marine colleges offer structured 6-month internships — that’s a great starting point. But don’t stop there.</p>
              
              <div className="space-y-4">
                <h4 className="font-bold text-[#1A365D] mb-4 uppercase tracking-widest text-xs">Use each experience to answer:</h4>
                {[
                  "Did I enjoy the work or just tolerate it?",
                  "Did the environment energise or drain me?",
                  "Can I see myself growing here long-term?"
                ].map((q, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-[#F8FAFC]">
                    <Target className="text-[#B8962D] shrink-0" size={20} />
                    <p className="text-slate-700 font-medium m-0">{q}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-slate-500">Each internship should give you <strong>direction</strong>, not just a line on your CV.</p>
            </section>
  
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A365D] mb-8 flex items-center gap-4">
                <span className="text-[#B8962D]">𝐒𝐭𝐞𝐩 𝟓:</span> 𝐍𝐞𝐭𝐰𝐨𝐫𝐤 𝐰𝐢𝐭𝐡 𝐈𝐧𝐭𝐞𝐧𝐭
              </h2>
              <p className="mb-8">This is where most people hesitate. But this is also where the biggest advantage lies.</p>
              <ul className="list-none p-0 space-y-4 mb-8">
                <li className="flex items-center gap-3"><Network size={18} className="text-[#B8962D]" /> Reach out to people in roles you’re curious about</li>
                <li className="flex items-center gap-3"><Network size={18} className="text-[#B8962D]" /> Ask simple, genuine questions</li>
                <li className="flex items-center gap-3"><Network size={18} className="text-[#B8962D]" /> Stay consistent</li>
              </ul>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="text-xs font-bold text-[#B8962D] uppercase mb-2">Over time, this does two things:</p>
                <ul className="m-0 list-none p-0 space-y-2">
                  <li className="text-[#1A365D] font-bold flex items-center gap-2"><ArrowRight size={14}/> Expands your awareness</li>
                  <li className="text-[#1A365D] font-bold flex items-center gap-2"><ArrowRight size={14}/> Opens doors to opportunities</li>
                </ul>
              </div>
            </section>
  
            <section className="mb-16 pt-12 border-t border-slate-100">
              <h2 className="text-3xl font-bold text-[#1A365D] mb-8">𝐓𝐡𝐞 𝐑𝐞𝐚𝐥 𝐒𝐡𝐢𝐟𝐭</h2>
              <p className="mb-6">The problem isn’t that students don’t explore. The problem is:</p>
              <ul className="list-none p-0 space-y-3">
                <li className="flex items-center gap-3 font-bold text-slate-700"><CheckCircle2 className="text-red-400" size={20} /> They explore without awareness</li>
                <li className="flex items-center gap-3 font-bold text-slate-700"><CheckCircle2 className="text-red-400" size={20} /> They choose without context</li>
              </ul>
            </section>
  
            <section className="mt-20 pt-12 border-t border-slate-100 text-center pb-24">
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-6">𝐅𝐢𝐧𝐚𝐥 𝐓𝐡𝐨𝐮𝐠𝐡𝐭</p>
              
              <div className="max-w-2xl mx-auto mb-12">
                <p className="text-slate-600 mb-8">You don’t “find” the right field overnight. You build clarity step by step:</p>
                <div className="flex flex-wrap justify-center items-center gap-4 text-[#1A365D] font-black text-sm uppercase">
                  <span>Awareness</span> <ArrowRight size={14} className="text-[#B8962D]" />
                  <span>Exposure</span> <ArrowRight size={14} className="text-[#B8962D]" />
                  <span>Experience</span> <ArrowRight size={14} className="text-[#B8962D]" />
                  <span>Reflection</span>
                </div>
                <p className="mt-8 text-2xl font-serif italic text-[#1A365D]">And only then: Alignment</p>
              </div>
  
              <div className="inline-block p-1 bg-slate-100 rounded-full mb-12">
                <div className="bg-white px-8 py-3 rounded-full shadow-sm border border-slate-200">
                  <span className="text-[#1A365D] font-black text-lg">Careers are not discovered randomly. They are designed deliberately.</span>
                </div>
              </div>
              
              <div className="max-w-md mx-auto">
                <div className="bg-[#1A365D] text-white p-8 rounded-2xl mb-10 text-left">
                  <p className="text-[#B8962D] font-bold text-xs uppercase tracking-widest mb-4">Community Engagement</p>
                  <p className="text-lg font-medium leading-relaxed">
                    I’d love to hear from students and professionals: How did you discover your field? Was it planned — or accidental?
                  </p>
                </div>
  
                <div className="border-t border-slate-100 pt-8 flex flex-col items-center">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Written By</p>
                  <img 
                    src={author.image} 
                    alt={author.name}
                    className="w-16 h-16 rounded-full object-cover grayscale hover:grayscale-0 transition-all mb-3 border-2 border-[#B8962D]/20 shadow-lg"
                    onError={(e) => {
    e.currentTarget.src =
      'https://ui-avatars.com/api/?name=RV&background=1A365D&color=B8962D';
  }}
                  />
                  <h4 className="font-bold text-[#1A365D] text-xl">{author.name}</h4>
                  <p className="text-sm text-slate-500 font-medium mb-4">{author.position}</p>
                  <div className="flex gap-4">
                    <a href={author.linkedin} target="_blank" rel="noopener noreferrer">
                      <LinkedinIcon size={22} className="hover:text-[#B8962D] cursor-pointer transition-colors" />
                    </a>
                    {/* <ExternalLink className="text-slate-300 hover:text-[#B8962D] cursor-pointer" size={20} /> */}
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    );
  };

  export default Article;
"use client";
import { track } from "@vercel/analytics";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Calendar,
  Clock,
  LinkedinIcon,
  Target,
  CheckCircle2,
} from "lucide-react";

const Article = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    setTimeout(() => {
      track("Article Viewed", {
        page: "jv-recruitment-strategy",
        title:
          "Recruitment for Joint Ventures (JVs): Where Strategy Meets Talent",
      });
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const author = {
    name: "Mrs. Roohi Mehta",
    position: "Recruitment Director at Navora",
    image: "/roohimehta.png",
    linkedin: "https://www.linkedin.com/in/roohi-mehta-73b45515/",
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 selection:bg-[#B8962D]/30">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 z-[60] h-1 bg-[#B8962D] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="mx-auto max-w-4xl px-6 pt-8 pb-8">
        {/* Header */}
        <header className="mb-6">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="rounded bg-[#1A365D] px-3 py-1 text-[10px] font-black tracking-[0.2em] text-[#B8962D] uppercase">
                Recruitment Strategy
              </span>
            </div>
          </div>

          <h1 className="mb-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-[#1A365D] md:text-4xl lg:text-5xl">
            Recruitment for Joint Ventures (JVs): Where Strategy Meets Talent
          </h1>

          {/* Banner */}
          <div className="mb-8">
            <img
              src="/banner/jv-recruitment-strategy.png"
              alt="JV Recruitment"
              className="h-auto w-full rounded-2xl border border-slate-100 object-cover shadow-lg transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Author */}
          <div className="flex flex-col justify-between gap-6 border-y border-slate-100 py-2 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <img
                src={author.image}
                alt={author.name}
                className="h-14 w-14 rounded-full border-2 border-[#B8962D]/20 object-cover shadow-sm"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://ui-avatars.com/api/?name=RV&background=1A365D&color=B8962D";
                }}
              />
              <div>
                <h3 className="text-lg font-bold text-[#1A365D]">
                  {author.name}
                </h3>
                <p className="text-sm text-slate-500">{author.position}</p>
                <a href={author.linkedin} target="_blank">
                  <LinkedinIcon size={14} />
                </a>
              </div>
            </div>

            <div className="flex gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[#B8962D]" />
                <span>April 30, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#B8962D]" />
                <span>4 min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-slate prose-lg max-w-none leading-relaxed text-slate-700">
          <p className="mb-6 text-xl leading-relaxed text-slate-600">
            Recruitment for Joint Ventures (JVs): Where Strategy Meets Talent
          </p>

          <p className="mb-6">
            In today’s dynamic business landscape, Joint Ventures (JVs) are
            becoming a powerful growth strategy—bringing together two
            organizations to combine strengths, expand into new markets, and
            accelerate innovation.
          </p>

          <div className="mb-10 rounded-2xl border-l-4 border-[#B8962D] bg-[#1A365D] p-6 text-white">
            <p className="m-0 text-lg font-semibold">
              But here’s the real challenge:
            </p>
            <p className="mt-2 text-slate-200">
              Recruiting the right talent for a JV is very different from
              traditional hiring.
            </p>
          </div>

          {/* WHY DIFFERENT */}
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1A365D]">
              Why JV Hiring is Different?
            </h2>

            <p className="mb-6">
              You’re not hiring for one company—you’re hiring for an ecosystem
              shaped by multiple stakeholders, each bringing:
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                "Different cultures",
                "Different expectations",
                "Different ways of working",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-100 bg-white p-5 text-center font-semibold text-[#1A365D]"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="text-slate-500 italic">
              This makes alignment + adaptability more important than ever.
            </p>
          </section>

          {/* 6 KEY CONSIDERATIONS */}
          <section className="mb-16">
            <h2 className="mb-8 text-3xl font-bold text-[#1A365D]"></h2>
            <h2 className="mb-8 font-serif text-3xl font-bold text-[#1A365D]">
              6 Key Considerations in JV Recruitment
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* 1 */}
              <div className="rounded-xl border bg-white p-5">
                <h4 className="mb-2 font-bold text-[#1A365D]">
                  1. Alignment with Dual Stakeholders
                </h4>
                <p className="text-sm text-slate-600">
                  Candidates must align with both entities—not just one. Clarity
                  on reporing lines, decision-making authority, and success
                  metrics is non-negotiable.
                </p>
              </div>

              {/* 2 */}
              <div className="rounded-xl border bg-white p-5">
                <h4 className="mb-2 font-bold text-[#1A365D]">
                  2. Cultural Compatibility is Critical
                </h4>
                <p className="mb-3 text-sm text-slate-600">
                  In JVs, culture gaps can create friction faster than skill
                  gaps. Look for individuals who are:
                </p>
                <ul className="list-disc pl-4 text-sm text-slate-500">
                  <li>Adaptable</li>
                  <li>Emotionally intelligent</li>
                  <li>Comfortable working in ambiguous environments</li>
                </ul>
              </div>

              {/* 3 */}
              <div className="rounded-xl border bg-white p-5">
                <h4 className="mb-2 font-bold text-[#1A365D]">
                  3. Balancing Skills with Neutrality
                </h4>
                <p className="mb-3 text-sm text-slate-600">
                  The best candidates bring more than expertise they bring
                  balance. They are:
                </p>
                <ul className="list-disc pl-4 text-sm text-slate-500">
                  <li>Neutral and fair in approach</li>
                  <li>Diplomatic in handling cross-company dynamics</li>
                  <li>Natural bridge-builders</li>
                </ul>
              </div>

              {/* 4 */}
              <div className="rounded-xl border bg-white p-5">
                <h4 className="mb-2 font-bold text-[#1A365D]">
                  4. Clarity of Role & Growth Path
                </h4>
                <p className="mb-3 text-sm text-slate-600">
                  Ambiguity around roles is a common JV challenge. Top talent
                  expects:
                </p>
                <ul className="list-disc pl-4 text-sm text-slate-500">
                  <li>Clear role definition</li>
                  <li>Visibility across both organizations</li>
                  <li>A defined growth trajectory</li>
                </ul>
              </div>

              {/* 5 */}
              <div className="rounded-xl border bg-white p-5">
                <h4 className="mb-2 font-bold text-[#1A365D]">
                  5. Stakeholder Management is Everything
                </h4>
                <p className="mb-3 text-sm text-slate-600">
                  JV hiring requires tight coordination between leadership
                  teams. Success depends on:
                </p>
                <ul className="list-disc pl-4 text-sm text-slate-500">
                  <li>Strong alignment</li>
                  <li>Transparent communication</li>
                  <li>Faster, consensus-driven decisions</li>
                </ul>
              </div>

              {/* 6 */}
              <div className="rounded-xl border bg-white p-5">
                <h4 className="mb-2 font-bold text-[#1A365D]">
                  6. Ability to Hold Their Ground
                </h4>
                <p className="mb-3 text-sm text-slate-600">
                  In a JV setup, with multiple voices at the table, it’s easy
                  for individuals to get overshadowed. The right hire is someone
                  who can:
                </p>
                <ul className="list-disc pl-4 text-sm text-slate-500">
                  <li>Hold their ground with confidence</li>
                  <li>Express viewpoints clearly without being steamrolled</li>
                  <li>Stay assertive while still being collaborative</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-slate-100 bg-slate-50 p-6 text-slate-600 italic">
              Because JVs don’t just need agreement—they need constructive
              challenge, balanced influence, and strong voices that ensure
              decisions are well-rounded.
            </div>
          </section>

          {/* FINAL */}
          <section className="mt-20 border-t border-slate-100 pt-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#1A365D]">
              Final Thought
            </h2>

            <p className="mb-6">
              Recruiting for a JV is not about ticking boxes. It’s about
              identifying individuals who can navigate complexity, balance power
              dynamics, and build collaboration without losing their voice.
            </p>

            <div className="inline-block rounded-full bg-slate-100 p-1">
              <div className="rounded-full border border-slate-200 bg-white px-8 py-3 shadow-sm">
                <span className="text-lg font-black text-[#1A365D]">
                  Because ultimately— the success of a JV is not defined on
                  paper, but in how its people work together
                </span>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Article;

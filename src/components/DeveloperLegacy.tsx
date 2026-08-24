import React from 'react';
import { PROJECT_DETAILS } from '../data/projectData';
import { Award, ShieldCheck, Building, Users, HeartHandshake, CheckCircle2, Star, ArrowUpRight } from 'lucide-react';

interface DeveloperLegacyProps {
  onOpenBrochure: () => void;
  onOpenVipTour: () => void;
}

export const DeveloperLegacy: React.FC<DeveloperLegacyProps> = ({ onOpenBrochure, onOpenVipTour }) => {
  const stats = [
    { number: "30+", label: "Years of Trust", desc: "Shaping Pune's most iconic luxury skylines since 1990s" },
    { number: "9M+", label: "Sq. Ft. Delivered", desc: "Spanning high-end residential, commercial & retail landmarks" },
    { number: "15K+", label: "Delighted Families", desc: "A thriving community of satisfied homeowners" },
    { number: "100%", label: "Timely Approvals", desc: "MahaRERA verified compliance across all projects" }
  ];

  const pillars = [
    {
      title: "Pristine Purity of Design",
      desc: "Every blueprint is meticulously crafted to maximize volumetric living, zero dead space, and natural airflow."
    },
    {
      title: "Uncompromising Quality",
      desc: "Shear-wall Mivan construction, acoustic double-glazing, and global tier-1 brand fixtures engineered to last generations."
    },
    {
      title: "Customer-First Governance",
      desc: "Transparent milestone tracking, verified title deeds, and round-the-clock dedicated customer care portals."
    }
  ];

  return (
    <section id="developer" className="py-24 bg-obsidian-900/80 relative overflow-hidden border-t border-gold-subtle/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-obsidian-800 border border-gold-subtle text-gold-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5 text-gold-400" />
            <span>Developer Pedigree</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            30+ Years of Crafting Pune’s Architectural Icons
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Pristine Developers represents the hallmark of credibility, structural mastery, and customer transparency in Maharashtra's real estate ecosystem.
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-glass-card border border-gold-subtle/30 text-center flex flex-col justify-between group hover:border-gold-400/50 transition-colors"
            >
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-bright block group-hover:text-gold-300 transition-colors">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider block mt-1">
                  {stat.label}
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 2-Column Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-glass-card rounded-3xl p-6 sm:p-10 border border-gold-subtle/40 shadow-luxury">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold">
                The Pristine Promise
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Building Landmarks That Stand the Test of Time
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                At Pristine Developers, real estate is an art of enhancing life. From our corporate headquarters in Erandwane to visionary projects across Baner, Wakad, and Kharadi, our signature has always been integrity, aesthetic grandeur, and environmental harmony.
              </p>
            </div>

            <div className="space-y-3">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-obsidian-950/60 border border-gold-subtle/20">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{pillar.title}</h4>
                    <p className="text-zinc-400 text-xs mt-0.5">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center space-x-4">
              <button
                onClick={onOpenVipTour}
                className="gold-shimmer-btn px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-obsidian-950 shadow-gold-glow flex items-center space-x-2"
              >
                <span>Schedule Meeting with Developer VIP Team</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gold-subtle/40 shadow-card-dark">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80"
                alt="Pristine Developers Heritage"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-obsidian-950/85 backdrop-blur-md border border-gold-subtle/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gold-400">Headquarters</span>
                  <p className="text-white text-xs font-semibold">Pristine Square, Erandwane, Pune</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-zinc-400">Legacy Rating</span>
                  <div className="flex items-center space-x-1 text-gold-400 text-xs">
                    <Star className="w-3 h-3 fill-gold-400" />
                    <Star className="w-3 h-3 fill-gold-400" />
                    <Star className="w-3 h-3 fill-gold-400" />
                    <Star className="w-3 h-3 fill-gold-400" />
                    <Star className="w-3 h-3 fill-gold-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

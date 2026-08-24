import React, { useState } from 'react';
import { Car, Train, Navigation, Clock, MapPin, ExternalLink, Compass, ShieldCheck, Waves } from 'lucide-react';
import { AmbientWaterBlobs } from './AmbientWaterBlobs';
import { WaterWaveDivider } from './WaterWaveDivider';
import { GlassTiltCard } from './GlassTiltCard';
import { PROJECT_DETAILS } from '../data/projectData';

export const CommuteMatrix: React.FC = () => {
  const [transportMode, setTransportMode] = useState<'drive' | 'metro'>('drive');

  const commuteDestinations = [
    {
      id: 'baner-high-street',
      name: "BANER HIGH STREET & BALLEWADI",
      category: "LIFESTYLE & DINING",
      distanceKm: "2.8 KM",
      driveTime: "5 MINS",
      metroTime: "8 MINS",
      corridor: "BANER-PASHAN LINK ROAD",
      description: "PUNE'S FOREMOST FINE-DINING, CAFES, AND LUXURY SHOPPING PROMENADE.",
      mapsDestination: "Baner+High+Street+Pune"
    },
    {
      id: 'hinjewadi-it-park',
      name: "HINJEWADI IT PARK (PHASE 1 & 2)",
      category: "TECH HUBS",
      distanceKm: "9.5 KM",
      driveTime: "15 MINS",
      metroTime: "18 MINS (LINE 3)",
      corridor: "MUMBAI-BANGALORE BYPASS",
      description: "GLOBAL TECH CAMPUSES: INFOSYS, TCS, WIPRO, TECH MAHINDRA & COGNIZANT.",
      mapsDestination: "Rajiv+Gandhi+Infotech+Park+Hinjawadi+Pune"
    },
    {
      id: 'aundh-westend',
      name: "AUNDH & WESTEND MALL",
      category: "RETAIL & SHOPPING",
      distanceKm: "4.2 KM",
      driveTime: "8 MINS",
      metroTime: "10 MINS",
      corridor: "SOMESHWARWADI - AUNDH ROAD",
      description: "PREMIER RETAIL MALL, CINEMAS, GOURMET SUPERMARKETS, AND SOCIAL CLUBS.",
      mapsDestination: "Westend+Mall+Aundh+Pune"
    },
    {
      id: 'pune-university',
      name: "SAVITRIBAI PHULE PUNE UNIVERSITY",
      category: "EDUCATION & HERITAGE",
      distanceKm: "5.8 KM",
      driveTime: "10 MINS",
      metroTime: "12 MINS",
      corridor: "UNIVERSITY ROAD",
      description: "PRESTIGIOUS 411-ACRE GREEN UNIVERSITY CAMPUS AND SENAPATI BAPAT ROAD.",
      mapsDestination: "Savitribai+Phule+Pune+University"
    },
    {
      id: 'mumbai-expressway',
      name: "MUMBAI - PUNE EXPRESSWAY TOLL",
      category: "INTERSTATE TRANSIT",
      distanceKm: "11.2 KM",
      driveTime: "12 MINS",
      metroTime: "N/A",
      corridor: "NH 48 ARTERIAL ROUTE",
      description: "EFFORTLESS HIGHWAY ACCESS TO NAVI MUMBAI, BKC, AND CHHATRAPATI SHIVAJI AIRPORT.",
      mapsDestination: "Urse+Toll+Plaza+Mumbai+Pune+Expressway"
    },
    {
      id: 'pune-airport',
      name: "PUNE INT. AIRPORT (PNQ)",
      category: "AVIATION TERMINAL",
      distanceKm: "18.5 KM",
      driveTime: "35 MINS",
      metroTime: "40 MINS",
      corridor: "AIRPORT ROAD / YERWADA",
      description: "DIRECT COMMERCIAL & INTERNATIONAL FLIGHT CONNECTIVITY.",
      mapsDestination: "Pune+Airport"
    },
    {
      id: 'pune-railway-station',
      name: "PUNE RAILWAY STATION & CBD",
      category: "RAIL & BUSINESS DISTRICT",
      distanceKm: "12.0 KM",
      driveTime: "22 MINS",
      metroTime: "25 MINS",
      corridor: "SENAPATI BAPAT / R.B.M ROAD",
      description: "CENTRAL TRANSIT HUB CONNECTING INTERCITY EXPRESS TRAINS AND BUSINESS OFFICES.",
      mapsDestination: "Pune+Railway+Station"
    },
    {
      id: 'balewadi-stadium',
      name: "BALLEWADI SPORTS COMPLEX",
      category: "SPORTS ARENA",
      distanceKm: "5.0 KM",
      driveTime: "8 MINS",
      metroTime: "10 MINS",
      corridor: "BALLEWADI STADIUM ROAD",
      description: "OLYMPIC-STANDARD STADIUM, AQUATIC ARENA, BADMINTON & TENNIS CHAMPIONSHIPS.",
      mapsDestination: "Shree+Shiv+Chhatrapati+Sports+Complex+Balewadi"
    }
  ];

  return (
    <section id="commute-matrix" className="py-24 bg-gradient-to-b from-[#f8f9fa] via-sky-50/20 to-white relative overflow-hidden uppercase font-sans">
      <AmbientWaterBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-card-luxe border border-white/90 text-pristine-orange text-xs font-bold uppercase tracking-widest mb-3 font-google">
            <Compass className="w-3.5 h-3.5 text-pristine-orange animate-pulse" />
            <span>TRANSIT TIMES & ARTERIAL REACH</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            COMMUTE & TRANSIT MATRIX
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-pristine-orange to-sky-400 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light font-google">
            ACCESSIBLE FROM BANER-PASHAN LINK ROAD (BESIDE WAKESHWAR TEMPLE). EXPLORE PRECISE DRIVE AND TRANSIT DURATIONS TO PUNE'S MAJOR HUBS.
          </p>
        </div>

        {/* Transport Mode Switcher */}
        <div className="flex justify-center mb-12 font-google">
          <div className="p-1.5 rounded-full glass-card-luxe border border-white/90 shadow-glass-luxury flex items-center space-x-2">
            <button
              onClick={() => setTransportMode('drive')}
              className={`px-6 sm:px-8 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center space-x-2 ${
                transportMode === 'drive'
                  ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white/60'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>DRIVING TIME (CAR / CAB)</span>
            </button>

            <button
              onClick={() => setTransportMode('metro')}
              className={`px-6 sm:px-8 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center space-x-2 ${
                transportMode === 'metro'
                  ? 'btn-pristine-orange shadow-pristine-orange scale-105'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white/60'
              }`}
            >
              <Train className="w-4 h-4" />
              <span>METRO & PUBLIC TRANSIT</span>
            </button>
          </div>
        </div>

        {/* Commute Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {commuteDestinations.map((item) => (
            <GlassTiltCard
              key={item.id}
              className="p-6 glass-card-luxe border border-white/90 shadow-glass-luxury flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200/70 font-google">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-pristine-orange bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200/50">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500 font-mono font-bold">
                    {item.distanceKm}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base text-gray-900 mb-1.5 group-hover:text-pristine-orange transition-colors">
                  {item.name}
                </h3>

                <p className="text-[11px] text-gray-600 font-light leading-relaxed font-google mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 font-google">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] text-gray-500 font-bold">ESTIMATED TIME:</span>
                  <div className="flex items-center space-x-1.5 text-gray-900 font-bold text-sm bg-gray-50 px-3 py-1 rounded-xl border border-gray-200">
                    <Clock className="w-3.5 h-3.5 text-pristine-orange" />
                    <span>{transportMode === 'drive' ? item.driveTime : item.metroTime}</span>
                  </div>
                </div>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&origin=${PROJECT_DETAILS.coordinates.lat},${PROJECT_DETAILS.coordinates.lng}&destination=${encodeURIComponent(item.mapsDestination)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-pristine-orange hover:border-pristine-orange text-[11px] font-bold flex items-center justify-center space-x-1.5 transition-colors shadow-sm"
                >
                  <span>PLAN LIVE ROUTE</span>
                  <ExternalLink className="w-3 h-3 text-pristine-orange" />
                </a>
              </div>
            </GlassTiltCard>
          ))}
        </div>

        {/* Live Route Navigation Banner */}
        <div className="glass-card-luxe p-6 sm:p-8 rounded-3xl border border-white/90 shadow-glass-luxury flex flex-col sm:flex-row items-center justify-between gap-4 font-google">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-pristine-orange/15 text-pristine-orange flex items-center justify-center flex-shrink-0 shadow-sm">
              <Navigation className="w-6 h-6" />
            </div>
            <div>
              <strong className="text-gray-900 text-sm block">STARTING POINT: THE LORD'S BY PRISTINE DEVELOPERS</strong>
              <span className="text-xs text-gray-600 font-light">BESIDE WAKESHWAR TEMPLE, BANER-PASHAN LINK ROAD, SOMESHWARWADI, PASHAN, PUNE</span>
            </div>
          </div>

          <a
            href={PROJECT_DETAILS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pristine-orange px-7 py-3 rounded-full text-xs uppercase tracking-wider font-bold shadow-pristine-orange whitespace-nowrap flex items-center space-x-2"
          >
            <span>OPEN IN GOOGLE MAPS GPS</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <WaterWaveDivider fillColor="#ffffff" className="mt-16" />
    </section>
  );
};

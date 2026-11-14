"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, LOCATION_OPTIONS, type LocationKey } from "@/context/LocationContext";

export default function LocationSelector() {
  const { selectedLocation, setLocation } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 
                   bg-gray-50/80 hover:bg-gray-100/80 text-primary text-xs font-semibold
                   transition-all duration-200 shadow-sm hover:shadow"
        aria-label="Select location"
        aria-expanded={isOpen}
      >
        <MapPin size={13} className="text-primary flex-shrink-0" />
        <span className="truncate max-w-[110px] sm:max-w-[140px]">{selectedLocation.shortLabel}</span>
        <ChevronDown
          size={12}
          className={`text-gray-400 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-xl 
                       border border-gray-100 p-1.5 z-50 overflow-hidden"
          >
            <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100">
              Select Your City / Area
            </div>
            {Object.values(LOCATION_OPTIONS).map((loc) => {
              const isSelected = selectedLocation.key === loc.key;
              return (
                <button
                  key={loc.key}
                  onClick={() => {
                    setLocation(loc.key as LocationKey);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left
                             transition-colors duration-150 ${
                               isSelected
                                 ? "bg-primary-light/60 text-primary font-bold"
                                 : "text-gray-700 hover:bg-gray-50 font-medium"
                             }`}
                >
                  <div className="min-w-0">
                    <p className="text-xs leading-snug">{loc.label}</p>
                    <p className="text-[10px] text-gray-400">{loc.phone}</p>
                  </div>
                  {isSelected && <Check size={14} className="text-primary flex-shrink-0 ml-2" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


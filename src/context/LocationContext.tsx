"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type LocationKey = "mahipalpur" | "samastipur";

export interface LocationOption {
  key: LocationKey;
  label: string;
  shortLabel: string;
  phone: string;
  cleanPhone: string;
}

export const LOCATION_OPTIONS: Record<LocationKey, LocationOption> = {
  mahipalpur: {
    key: "mahipalpur",
    label: "Mahipalpur (Delhi)",
    shortLabel: "Delhi",
    phone: "+91 7303637086",
    cleanPhone: "917303637086",
  },
  samastipur: {
    key: "samastipur",
    label: "Samastipur (Bihar)",
    shortLabel: "Samastipur",
    phone: "+91 7678328875",
    cleanPhone: "917678328875",
  },
};

interface LocationContextType {
  selectedLocation: LocationOption;
  setLocation: (key: LocationKey) => void;
}

const LocationContext = createContext<LocationContextType>({
  selectedLocation: LOCATION_OPTIONS.mahipalpur,
  setLocation: () => {},
});

export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedKey, setSelectedKey] = useState<LocationKey>("mahipalpur");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("medon_selected_location") as LocationKey;
      if (saved && LOCATION_OPTIONS[saved]) {
        setSelectedKey(saved);
      }
    } catch {
      // localStorage may fail in some restricted environments
    }
  }, []);

  const setLocation = (key: LocationKey) => {
    if (LOCATION_OPTIONS[key]) {
      setSelectedKey(key);
      try {
        localStorage.setItem("medon_selected_location", key);
      } catch {
        // ignore
      }
    }
  };

  return (
    <LocationContext.Provider
      value={{
        selectedLocation: LOCATION_OPTIONS[selectedKey],
        setLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);


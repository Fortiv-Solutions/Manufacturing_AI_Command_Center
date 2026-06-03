import { useState, useEffect } from "react";
import { sectors, Sector } from "@/data/modules";

export function useActiveSector() {
  const [activeSectorId, setActiveSectorId] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("fortiv_active_sector") || "discrete-manufacturing";
    }
    return "discrete-manufacturing";
  });

  useEffect(() => {
    const handleSync = () => {
      if (typeof window !== "undefined") {
        const val = localStorage.getItem("fortiv_active_sector") || "discrete-manufacturing";
        setActiveSectorId(val);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("fortiv_sector_changed", handleSync);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("fortiv_sector_changed", handleSync);
      }
    };
  }, []);

  const activeSector = sectors.find((s) => s.id === activeSectorId) || sectors[0];

  const handleSetActiveSector = (id: string) => {
    setActiveSectorId(id);
    if (typeof window !== "undefined") {
      localStorage.setItem("fortiv_active_sector", id);
      window.dispatchEvent(new Event("fortiv_sector_changed"));
    }
  };

  return {
    activeSector,
    activeSectorId,
    setActiveSectorId: handleSetActiveSector,
    sectors,
  };
}

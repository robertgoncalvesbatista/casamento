import { PropsWithChildren, useEffect, useState } from "react";

import { initialWeddingDetails } from "../../config/geral";
import { WeddingDetails } from "../../types";

import api from "../../config/api";
import { WeddingContext } from "./wedding.context";

export function WeddingProvider({ children }: PropsWithChildren) {
  const [weddingDetails, setWeddingDetails] = useState<WeddingDetails>(() => {
    const saved = localStorage.getItem("weddingDetails");
    return saved ? JSON.parse(saved) : initialWeddingDetails;
  });

  const [gifts, setGifts] = useState<any[]>([]);

  useEffect(() => {
    const getInstruments = async () => {
      try {
        if (gifts.length > 0) return;

        const response = await api.get("/gift");
        setGifts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getInstruments();
  }, [gifts.length]);

  useEffect(() => {
    localStorage.setItem("weddingDetails", JSON.stringify(weddingDetails));
  }, [weddingDetails]);

  const updateWeddingDetails = (details: WeddingDetails) => {
    setWeddingDetails(details);
  };

  const value = {
    gifts,
    setGifts,
    weddingDetails,
    updateWeddingDetails,
  };

  return (
    <WeddingContext.Provider value={value}>{children}</WeddingContext.Provider>
  );
}

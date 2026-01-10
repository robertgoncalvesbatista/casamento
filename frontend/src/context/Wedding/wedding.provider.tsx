import { PropsWithChildren, useEffect, useState } from "react";

import { initialWeddingDetails } from "../../config/Geral";
import { WeddingDetails } from "../../types";

import { Gift } from "../../../generated/prisma/client";
import giftService from "../../services/GiftService";
import { WeddingContext } from "./wedding.context";

export function WeddingProvider({ children }: PropsWithChildren) {
  const [weddingDetails, setWeddingDetails] = useState<WeddingDetails>(() => {
    const saved = localStorage.getItem("weddingDetails");
    return saved ? JSON.parse(saved) : initialWeddingDetails;
  });

  const [gifts, setGifts] = useState<Gift[]>([]);

  useEffect(() => {
    const getInstruments = async () => {
      if (gifts.length > 0) return;

      const data = await giftService.index();
      setGifts(data ?? []);
    };

    getInstruments();
  }, []);

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

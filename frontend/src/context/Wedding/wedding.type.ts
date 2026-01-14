import { Gift } from "../../services/GiftService";
import { WeddingDetails } from "../../types";

export type WeddingContextData = {
  gifts: Gift[];
  setGifts: React.Dispatch<React.SetStateAction<Gift[]>>;
  weddingDetails: WeddingDetails;
  updateWeddingDetails: (details: WeddingDetails) => void;
};

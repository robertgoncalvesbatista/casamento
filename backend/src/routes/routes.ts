import { Router } from "express";

import GiftController from "../controllers/GiftController.ts";
import GuestController from "../controllers/GuestController.ts";

const router = Router();

router.get("/gift", GiftController.index);
router.get("/gift/:id", GiftController.read);
router.post("/gift", GiftController.create);
router.put("/gift/:id", GiftController.update);
router.delete("/gift/:id", GiftController.delete);

router.get("/guest", GuestController.index);
router.get("/guest/:id", GuestController.read);
router.post("/guest", GuestController.create);
router.put("/guest/:id", GuestController.update);
router.delete("/guest/:id", GuestController.delete);

export default router;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { WeddingProvider } from "./context/Wedding/wedding.provider";

import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";
import GiftsPage from "./pages/GiftsPage";
import ConfirmPresencePage from "./pages/ConfirmPresencePage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <WeddingProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nossa-historia" element={<StoryPage />} />
            <Route path="/presentes" element={<GiftsPage />} />
            <Route path="/confirmar-presenca" element={<ConfirmPresencePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </WeddingProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

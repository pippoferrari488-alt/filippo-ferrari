import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const OFFICIAL_SITE = "https://filippo-ferrari-official.vercel.app";

if (window.location.hostname === "filippo-ferrari.vercel.app") {
  window.location.replace(
    `${OFFICIAL_SITE}${window.location.pathname}${window.location.search}${window.location.hash}`,
  );
} else {
  document.title = "Filippo Ferrari";
  createRoot(document.getElementById("root")!).render(<App />);
}

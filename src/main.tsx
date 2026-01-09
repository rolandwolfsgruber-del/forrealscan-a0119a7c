import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Self-hosted Inter Tight font - faster than Google Fonts
import "@fontsource/inter-tight/300.css";
import "@fontsource/inter-tight/400.css";
import "@fontsource/inter-tight/500.css";
import "@fontsource/inter-tight/600.css";
import "@fontsource/inter-tight/700.css";
import "@fontsource/inter-tight/800.css";
import "@fontsource/inter-tight/900.css";
import { logBuildBanner } from "./lib/buildInfo";

logBuildBanner();

createRoot(document.getElementById("root")!).render(<App />);

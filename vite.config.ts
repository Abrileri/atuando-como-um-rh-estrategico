import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "./", // <- ISSO É O SEGREDO PRA RODAR NO CLIQUE
  plugins: [react()],
});

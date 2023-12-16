import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // gobal import 같음
    globals: true,
    // dom 요소에 접근하기위해 jsdom 방식으로 테스트
    environment: "jsdom",
    setupFiles: "./src/test/setup/setup.js",
    coverage: {
      provider: "v8",
      include: ["src/constants", "src/**/compoents"],
    },
    reporters: ["verbose"],
    include: ["./src/**/*{test,spec}.jsx"],
    cache: false,
  },
});

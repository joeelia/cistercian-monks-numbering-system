import { defineConfig, loadEnv } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { createHtmlPlugin } from "vite-plugin-html";
export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  console.log(process.env);
  console.log(mode);
  console.log(process.env.VITE_APP_DATA_SCRIPT);
  return defineConfig({
    plugins: [
      viteSingleFile({ removeViteModuleLoader: true }),
      createHtmlPlugin({
        minify: true,
      }),
    ],
  });
};

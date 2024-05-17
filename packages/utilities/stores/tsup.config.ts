import { defineConfig, type Options } from "tsup";

const baseOptions: Options = {
  clean: true,
  entry: ["src/**/*.ts"],
  dts: true,
  minify: false,
  skipNodeModulesBundle: true,
  sourcemap: false,
  shims: true,
  target: "es2022",
};

export default [
  defineConfig({
    ...baseOptions,
    outDir: "dist",
    format: "esm"
  })
]
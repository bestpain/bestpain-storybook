import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/react-webpack5",

  webpackFinal: async (webpackConfig) => {
    webpackConfig.resolve = webpackConfig.resolve || {};

    webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      "@": path.resolve(process.cwd(), "src"),
    };

    webpackConfig.module = webpackConfig.module || { rules: [] };

    // Remove existing CSS/SCSS rules to avoid duplicate processing.
    webpackConfig.module.rules = (webpackConfig.module.rules || []).filter(
      (rule) => {
        if (
          !rule ||
          typeof rule !== "object" ||
          !("test" in rule) ||
          !(rule.test instanceof RegExp)
        ) {
          return true;
        }

        return !rule.test.test("file.css") && !rule.test.test("file.scss");
      },
    );

    webpackConfig.module.rules.push(
      // CSS + Tailwind
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },

      // SCSS + Tailwind
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    );

    return webpackConfig;
  },
};

export default config;

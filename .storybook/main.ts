import type { StorybookConfig } from "@storybook/react-webpack5";
import { Configuration } from "webpack";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    config.module!.rules!.push({
      test: /\.(pcss)$/,
      use: [
          { loader: "style-loader" },
          { loader: "css-modules-typescript-loader" },
          {
              loader: "css-loader",
              options: {
                  modules: {
                      localIdentName: "[name]__[local]--[hash:base64:5]",
                  },
                  sourceMap: true,
                  importLoaders: 1,
              },
          },
          { loader: "postcss-loader", options: { sourceMap: true } },
      ],
    });

    return config;
  }
};
export default config;

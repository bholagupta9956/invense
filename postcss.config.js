const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  enabled: true,
  content: [
    "./src/**/*.html",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  css: "src/assets/main.css",

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:/.]+(?<!:)/g) || [],
});

const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    // require("postcss-import"),
    tailwindcss("./tailwind.config.js"),
    // require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};

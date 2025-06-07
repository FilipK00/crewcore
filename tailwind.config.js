module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase }) {
  const colors = {
    "neutral-300": "#D1D5DB", // Example color, replace with your own values
    "blue-500": "#3B82F6",
    "purple-500": "#8B5CF6",
    "pink-500": "#EC4899",
    // Add more custom colors as needed
  };

  const newVars = {};

  for (const [colorName, colorValue] of Object.entries(colors)) {
    newVars[`--${colorName}`] = colorValue;
  }

  addBase({
    ":root": newVars,
  });
}

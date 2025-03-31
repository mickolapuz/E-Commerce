export const COLOR_PALETTE = {
  beige: createPalette("#EFE5DC"),
  darkEspresso: createPalette("#3E2723"),
  mediumBrown: createPalette("#5D4037"),
  richBrown: createPalette("#795548"),
  white: createPalette("#FFFFFF"),
  hover: createPalette("#5D4037"),
  warmLatte: createPalette("#D7CCC8"),
  softMocha: createPalette("#A1887F")
};

function createPalette(color: string) {
  const hexCode = color.replace("#", "");
  const bigint = parseInt(hexCode, 16);
  const red = (bigint >> 16) & 255;
  const green = (bigint >> 8) & 255;
  const blue = bigint & 255;

  return {
    main: `rgba(${red}, ${green}, ${blue}, 1)`,
    opacity75: `rgba(${red}, ${green}, ${blue}, 0.75)`,
    opacity50: `rgba(${red}, ${green}, ${blue}, 0.5)`,
    opacity25: `rgba(${red}, ${green}, ${blue}, 0.25)`
  };
}

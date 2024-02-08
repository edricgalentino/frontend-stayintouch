export type colorType = "primary" | "secondary" | "ghost";

const baseColor = {
  primary: {
    basic: "text-tertiary btn-primary",
    outlined: "text-tertiary border-primary border-2 bg-transparent",
  },
  secondary: {
    basic: "btn-secondary",
    outlined: "text-secondary border-secondary border-2 hover:bg-secondary/10 bg-transparent",
  },
  ghost: {
    basic: "hover:bg-primary text-tertiary",
    outlined: "",
  },
};

const colorProvider = (color: colorType, isOutline: boolean = false) => {
  return baseColor[color][`${isOutline ? "outlined" : "basic"}`];
};

export default colorProvider;

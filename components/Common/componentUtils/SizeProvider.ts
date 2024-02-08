export type sizeType = "xs" | "sm" | "md" | "lg";

const baseShapeVariant = {
  xs: {
    className: "btn-xs md:btn-xs",
  },
  sm: {
    className: "btn-xs md:btn-sm",
  },
  md: {
    className: "btn-sm md:btn-md",
  },
  lg: {
    className: "btn-md md:btn-lg",
  },
};
export const sizeProvider = (variant: sizeType) => {
  return baseShapeVariant[variant].className;
};

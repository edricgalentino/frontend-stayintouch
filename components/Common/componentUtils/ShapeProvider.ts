export type variantType = "default" | "outline" | "rounded";

const baseShapeVariant = {
  default: {
    className: "md:rounded-lg rounded-md",
  },
  outline: {
    className: "btn-outline",
  },
  rounded: {
    className: "rounded-full",
  },
};
export const shapeProvider = (variant: variantType) => {
  return baseShapeVariant[variant].className;
};

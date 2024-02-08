import colorProvider, { colorType } from "./componentUtils/ColorProvider";
import { shapeProvider, variantType } from "./componentUtils/ShapeProvider";
import { sizeProvider, sizeType } from "./componentUtils/SizeProvider";

type customButtonProps = {
  color?: colorType;
  variant?: variantType;
  size?: sizeType;
};
type ButtonUILibPropsInterface = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & customButtonProps;

const Button = ({ color = "primary", variant = "default", size = "sm", ...props }: ButtonUILibPropsInterface) => {
  return (
    <button
      {...props}
      disabled={false}
      className={`${shapeProvider(variant)} ${colorProvider(color, variant === "outline")} ${sizeProvider(size)} ${props.className ?? ""}
      btn btn-${color} font-medium shadow-none ${props.disabled ? "disabled" : ""}`}
    />
  );
};

export default Button;

type TooltipProps = {
  text: string;
  className?: string;
  children: React.ReactNode;
};

const Tooltip = ({ text, children, ...props }: TooltipProps) => {
  return (
    <div className={`tooltip tooltip-info ${props.className}`} data-tip={text}>
      {children}
    </div>
  );
};

export default Tooltip;

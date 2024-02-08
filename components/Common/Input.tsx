type InputProps = { label?: string; errorMsg?: string; children?: React.ReactNode } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const FormInput = ({ label, className, errorMsg, children, ...props }: InputProps) => {
  return (
    <div className="form-control w-full space-y-2">
      {label && <Label label={label} />}
      {children ? children : <Input {...props} value={props.value} />}
      {errorMsg && <ErrorInput errorMsg={errorMsg} />}
    </div>
  );
};

export const Label = ({ label }: InputProps) => {
  return (
    <label className="text-sm md:text-base" htmlFor={label}>
      {label}
    </label>
  );
};

export const Input = ({ ...props }: InputProps) => {
  return (
    <input
      {...props}
      disabled={false}
      className={`input input-bordered text-tertiary text-sm rounded-lg block w-full p-2.5 h-fit ${
        props.disabled ? "pointer-events-none disabled" : ""
      }`}
    />
  );
};

export const ErrorInput = ({ errorMsg }: InputProps) => {
  return <label className="text-sm text-danger mt-1">{errorMsg}</label>;
};

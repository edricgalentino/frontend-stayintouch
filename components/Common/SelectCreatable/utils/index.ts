import makeAnimated from "react-select/animated";

export const selectStyleObject = {
  option: (baseStyles: any) => ({
    ...baseStyles,
    backgroundColor: "white",
    color: "#222222",
    "&:hover": {
      backgroundColor: "#f5ede3",
    },
  }),
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    boxShadow: "none",
    minHeight: "40px",
    height: "fit-content",
    padding: "0",
    backgroundColor: state.isDisabled ? "#f1f5f9" : "white",
    border: state.isDisabled ? "1px solid white" : "1px solid rgb(209 213 219)",
    borderRadius: "0.5rem",
    color: "inherit",
    "&:hover": {
      border: state.isDisabled ? "1px solid white" : "1px solid rgb(209 213 219)",
    },
  }),
  valueContainer: (baseStyles: any) => ({
    ...baseStyles,
    fontSize: "0.875rem",
  }),
  multiValue: (baseStyles: any) => ({
    ...baseStyles,
    backgroundColor: "#f5ede3",
    borderRadius: "8px",
    paddingInline: "0.3rem",
    color: "#222222",
  }),
  multiValueRemove: (baseStyles: any) => ({
    ...baseStyles,
    color: "#222222",
    ":hover": {
      color: "#DE593D",
    },
  }),
  dropdownIndicator: () => ({
    display: "none",
  }),
};

export const animatedCreatable = makeAnimated();

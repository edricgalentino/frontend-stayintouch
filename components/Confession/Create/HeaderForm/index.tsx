import Button from "@/components/Common/Button";
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";
import { Step } from "../hooks/useCreateConfession";
import Link from "next/link";
import Loading from "@/components/Common/Loading";

type HeaderFormPropsType = {
  steps: Step[];
  currentActiveStep: number;
  handleActiveStep: (type: "next" | "back") => void;
  handleCreateConfession?: () => Promise<void>;
  isLoading?: boolean;
};

const HeaderForm = ({ steps, currentActiveStep, handleActiveStep, handleCreateConfession, isLoading }: HeaderFormPropsType) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      <Steps steps={steps} currentActiveStep={currentActiveStep} handleActiveStep={handleActiveStep} />
      <TitleStep steps={steps} currentActiveStep={currentActiveStep} />
      <NavStep
        steps={steps}
        currentActiveStep={currentActiveStep}
        handleActiveStep={handleActiveStep}
        handleCreateConfession={handleCreateConfession}
        isLoading={isLoading}
      />
    </div>
  );
};

export default HeaderForm;

const Steps = ({ steps, currentActiveStep, handleActiveStep }: HeaderFormPropsType) => {
  return (
    <ul className="steps">
      {steps.map((step, index) => (
        <li
          className={`step ${step.isComplete ? "step-secondary" : "hidden"}`}
          key={index}
          onClick={() => {
            if (index !== currentActiveStep) {
              handleActiveStep(index > currentActiveStep ? "next" : "back");
            }
          }}
        >
          <h1
            className={`text-left transition-all ease-in-out mx-4 whitespace-nowrap ${
              index === currentActiveStep ? "md:text-xl text-sm opacity-100 font-semibold" : "md:text-sm text-sm opacity-50 md:p-2 md:px-10"
            } hidden md:block`}
          >
            {step.label}
          </h1>
        </li>
      ))}
    </ul>
  );
};

const TitleStep = ({ steps, currentActiveStep }: Omit<HeaderFormPropsType, "handleActiveStep">) => {
  return <h3 className="block md:hidden text-lg opacity-100 font-semibold">{steps[currentActiveStep].label}</h3>;
};

const NavStep = ({ steps, currentActiveStep, handleActiveStep, handleCreateConfession, isLoading }: HeaderFormPropsType) => {
  return (
    <div className="flex w-full justify-between">
      <Link href={currentActiveStep === 0 ? "/confession" : ``}>
        <Button color="primary" onClick={() => handleActiveStep("back")}>
          <RiArrowLeftFill /> Back {currentActiveStep === 0 && "to Home"}
        </Button>
      </Link>
      <Button
        color={currentActiveStep === steps.length - 1 ? "secondary" : "primary"}
        onClick={() => {
          if (currentActiveStep === steps.length - 1) {
            handleCreateConfession && handleCreateConfession();
          } else {
            handleActiveStep("next");
          }
        }}
      >
        {isLoading ? (
          <Loading />
        ) : currentActiveStep === steps.length - 1 ? (
          "Create Confession"
        ) : (
          <>
            Next <RiArrowRightFill />
          </>
        )}
      </Button>
    </div>
  );
};

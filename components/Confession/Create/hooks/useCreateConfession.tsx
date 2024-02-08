import { Confession, createConfessionDto } from "@/components/Confession/type";
import { useState } from "react";
import confessionService from "@/components/Confession/services/service";
import useSnackbar from "@/lib/global/Snackbar/useSnackbar";
import { useRouter } from "next/navigation";
import { getErrorMessage } from "@/lib/helpers/request";

export type Step = {
  label: string;
  isComplete: boolean;
};
const UseCreateConfession = () => {
  // React Select
  const tagsOptions = [
    { value: "Love", label: "Love" },
    { value: "Friendship", label: "Friendship" },
    { value: "Confession", label: "Confession" },
    { value: "Relationships", label: "Relationships" },
    { value: "Happiness", label: "Happiness" },
    { value: "Sadness", label: "Sadness" },
    { value: "Dreams", label: "Dreams" },
    { value: "Motivation", label: "Motivation" },
    { value: "Memories", label: "Memories" },
    { value: "Secret Admirer", label: "Secret Admirer" },
  ];
  const categoryOptions = [
    { value: "Personal", label: "Personal" },
    { value: "Romantic", label: "Romantic" },
    { value: "Inspirational", label: "Inspirational" },
    { value: "Relationship Advice", label: "Relationship Advice" },
    { value: "Life Lessons", label: "Life Lessons" },
    { value: "Self-Improvement", label: "Self-Improvement" },
    { value: "Heartfelt Stories", label: "Heartfelt Stories" },
    { value: "Motivational Moments", label: "Motivational Moments" },
    { value: "Reflective Thoughts", label: "Reflective Thoughts" },
    { value: "Happy Memories", label: "Happy Memories" },
  ];
  // State
  const [formCreate, setFormCreate] = useState<createConfessionDto>({
    name: "",
    to: "",
    tags: [],
    category: "",
    excerpt: "",
    message: "",
    seen: 0,
    likes: 0,
    replies: [],
    created_from: "public",
    created_at: "",
    updated_at: "",
    updated_by: "",
  });
  const { setSnackbar } = useSnackbar();
  const router = useRouter();
  const [currentActiveStep, setCurrentActiveStep] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [steps, setSteps] = useState<Step[]>([
    {
      label: "Basic Information",
      isComplete: true,
    },
    {
      label: "Confession Details",
      isComplete: false,
    },
    {
      label: "Preview",
      isComplete: false,
    },
  ]);

  async function handleCreateConfession() {
    const errorNotAllowed = checkIsAllowedToCreate();
    if (errorNotAllowed !== "") {
      setSnackbar({
        message: errorNotAllowed,
        type: "error",
      });
      return;
    }
    setIsLoading(true);
    try {
      await confessionService.createConfession<Confession>(formCreate);
      setSnackbar({
        message: "Create confession successfully",
        type: "success",
      });
      setTimeout(() => {
        router.push("/confession");
      }, 2000);
    } catch (error) {
      setSnackbar({
        message: `Create confession failed: ${getErrorMessage(error)}`,
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  }

  function handleActiveStep(command: "back" | "next") {
    if (command === "back") {
      if (currentActiveStep === 0) return;
      setCurrentActiveStep((prev) => prev - 1);
      setSteps(
        steps.map((step, index) => {
          if (index === currentActiveStep) {
            return { ...step, isComplete: false };
          }
          return step;
        })
      );
    } else if (command === "next") {
      if (currentActiveStep === steps.length - 1) return;
      setCurrentActiveStep((prev) => prev + 1);
      setSteps(
        steps.map((step, index) => {
          if (index === currentActiveStep + 1) {
            return { ...step, isComplete: true };
          }
          return step;
        })
      );
    }
  }

  function checkIsAllowedToCreate(): string {
    if (
      formCreate.name === "" ||
      formCreate.to === "" ||
      formCreate.tags.length === 0 ||
      formCreate.category === "" ||
      formCreate.excerpt === "" ||
      formCreate.message === ""
    ) {
      return "Please fill in all fields";
    } else if (!steps[2].isComplete) {
      return "Please complete all steps";
    }
    return "";
  }

  return {
    formCreate,
    setFormCreate,
    tagsOptions,
    categoryOptions,
    currentActiveStep,
    steps,
    handleActiveStep,
    handleCreateConfession,
    isLoading,
  };
};

export default UseCreateConfession;

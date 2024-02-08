"use client";
import useSnackbar from "@/lib/global/Snackbar/useSnackbar";
import { RiCloseFill, RiInformationLine } from "react-icons/ri";

const Snackbar = () => {
  const { message, type, setSnackbar } = useSnackbar();
  const checkColorType = () => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-500 border border-green-500";
      case "error":
        return "bg-red-100 text-red-500 border border-red-500";
      case "info":
        return "bg-blue-100 text-blue-500 border border-blue-500";
      default:
        return "bg-gray-100 text-gray-500 border border-gray-500";
    }
  };

  return (
    <>
      <div className={`flex justify-center w-full`}>
        <div
          className={`alert p-2 sm:pt-2 pt-0 gap-2 w-fit z-[99] rounded-md shadow-lg flex flex-row fixed transition-all duration-200 mx-auto ${
            type ? "opacity-100 translate-y-10" : "opacity-0 -translate-y-full"
          } ${checkColorType()}`}
        >
          <RiInformationLine className="min-w-[16px]" />
          <p>{message}</p>
          <RiCloseFill
            className="cursor-pointer w-4 h-4 min-w-[16px]"
            onClick={() => {
              setSnackbar({ message, type: "" });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Snackbar;

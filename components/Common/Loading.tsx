const Loading = ({ text = "Loading..." }: { text?: string }) => {
  return (
    <div className="flex gap-3 justify-center items-center">
      <span className="loading loading-dots loading-md"></span>
      <span>{text}</span>
    </div>
  );
};

export default Loading;

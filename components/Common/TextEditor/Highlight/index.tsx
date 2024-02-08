const HighlightTextEditor = ({ value, forCreate }: { value: string; forCreate?: boolean }) => {
  return (
    <div
      className={`text-justify text-tertiary w-full ${forCreate ? "border p-2.5 rounded-lg" : ""}`}
      dangerouslySetInnerHTML={{ __html: value }}
    ></div>
  );
};

export default HighlightTextEditor;

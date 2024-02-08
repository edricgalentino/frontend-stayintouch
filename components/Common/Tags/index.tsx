import Button from "../Button";

type TagsChipProps = {
  tags: string[];
  setTags: (tags: string[]) => void | React.Dispatch<React.SetStateAction<string[]>>;
};

const TagsChip = ({ tags, setTags }: TagsChipProps) => {
  const handleClick = (tag: string) => {
    const tagExists = tags.includes(tag);

    if (tagExists) {
      setTags(tags?.filter((t) => t !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  return (
    <>
      {["love", "hate", "sad", "happy", "angry", "sick"].map((tag) => (
        <Button key={tag} onClick={() => handleClick(tag)} color={tags.includes(tag) ? "secondary" : "primary"}>
          #{tag}
        </Button>
      ))}
    </>
  );
};

export default TagsChip;

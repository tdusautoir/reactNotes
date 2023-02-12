import { useEffect, useState, useCallback } from "react";
import { Tags } from "./NoteTags.styled";

const NoteTags = ({ tagsId, onAdd }) => {
  const [tags, setTags] = useState(null);
  const [allTags, setAllTags] = useState(null);

  const getTags = useCallback(async () => {
    const response = await fetch("/tags");
    const data = await response.json();

    setAllTags(data.filter((tag) => !tagsId.includes(tag.id)));
    setTags(data.filter((tag) => tagsId.includes(tag.id)));
  }, [tagsId]);

  const addTag = (tagId) => {
    onAdd(parseInt(tagId));
    setAllTags((oldAlltags) => {
        return oldAlltags.filter(
            (tag) => tag.id !== parseInt(tagId)
        );
    });
  };

  useEffect(() => {
    getTags();
  }, [getTags]);

  return (
    <>
      <Tags>
        {tags && tags.map((tag) => <p key={tag.id}>{tag.name}</p>)}
        {allTags && allTags.length > 0 && (
          <div>
            <select value={0} onChange={(event) => addTag(event.target.value)}>
                <option value={0} disabled>Add tag</option>
              {allTags.map((tag) => (
                <option key={tag.id} value={tag.id}>
                  {tag.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </Tags>
    </>
  );
};

export default NoteTags;

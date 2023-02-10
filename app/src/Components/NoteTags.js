import { useEffect, useState, useCallback } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Tags } from "./NoteTags.styled";

const NoteTags = ({tagsId}) => {
    const [tags, setTags] = useState(null);
    const [allTags, setAllTags] = useState(null);

    const getTags = useCallback(async () => {
        const response = await fetch(`/tags`);
        const data = await response.json();

        setAllTags(data);
        setTags(data.filter((tag) => tagsId.includes(tag.id)));
    }, [tagsId]);

    useEffect(() => {
        getTags();
    }, [getTags])

    return <>
        <Tags>
            {tags && tags.map((tag) => (<p key={tag.id}>{tag.name}</p>))}
            <div><AiOutlinePlus/><select>{allTags && allTags.filter((tag) => !(tags.includes(tag))).map((tag) => (<option key={tag.id}>{tag.name}</option>))}</select></div>
        </Tags>
    </>
};

export default NoteTags;
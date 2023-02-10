import { useEffect, useState, useCallback } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Tags } from "./NoteTags.styled";

const NoteTags = ({tagsId}) => {
    const [tags, setTags] = useState(null);

    const getTags = useCallback(async () => {
        const response = await fetch(`/tags`);
        const data = await response.json();

        setTags(data.filter((tag) => tagsId.includes(tag.id)));
    }, [tagsId]);

    useEffect(() => {
        getTags();
    }, [getTags])

    return <>
        <Tags>
            {tags && tags.map((tag) => (<p key={tag.id}>{tag.name}</p>))}
            <div><AiOutlinePlus/></div>
        </Tags>
    </>
};

export default NoteTags;
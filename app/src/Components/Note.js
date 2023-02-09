import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Form, Title, Content} from "./Note.styled";

const Note = ({ onDelete, onChange }) => {
    const { id } = useParams();
    const [note, setNote] = useState(null);

    const getNote = useCallback(async () => {
        const response = await fetch(`/notes/${id}`);
        const note = await response.json();

        setNote(note);
    }, [id]);

    const updateNoteTitle = (event) => {
        setNote({ title: event.target.value, content: note.content, id: note.id });
    };

    const updateNoteContent = (event) => {
        setNote({ title: note.title, content: event.target.value, id: note.id });
    };

    useEffect(() => {
        getNote();
    }, [getNote]);

    useEffect(() => {
        if(note) {
            onChange(note);
        }
    }, [note]);

    return (
        <>
            <Form onSubmit={(event) => event.preventDefault() }>
                <Title
                    placeholder="Type your title here..."
                    type="text"
                    value={note ? note.title : ""}
                    onChange={updateNoteTitle}
                />
                <Content
                    placeholder="Type your content here..."
                    value={note ? note.content : ""}
                    onChange={updateNoteContent}
                />
            </Form>
            <button onClick={() => onDelete(id)}>Supprimer</button>
        </>
    );
};

export default Note;

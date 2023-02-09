import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { LoadingNote } from "./NoteLink.styled";
import { Form, Title, Content, DeleteButton } from "./Note.styled";
import { MdDelete } from "react-icons/md";

const Note = ({ onDelete, onChange, onAdd}) => {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getNote = useCallback(async () => {
        if(id) {
            setIsLoading(true);
            const response = await fetch(`/notes/${id}`);
            const note = await response.json();
    
            setNote(note);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    }, [id]);

    const updateNoteTitle = (event) => {
        setNote({ ...note, title: event.target.value });
    };

    const updateNoteContent = (event) => {
        setNote({ ...note, content: event.target.value });
    };

    const updateNote = async () => { 
        await fetch(`/notes/${note.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(note)
        })
    };

    const addNote = async () => { 
        const response = await fetch('/notes', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(note)
        });

        const newNote = await response.json();
        onAdd(newNote);
    };

    useEffect(() => {
        getNote();
    }, [getNote]);

    useEffect(() => {
        if(id) {
            onChange(note);
        }

        const delay = setTimeout(async () => {
            if(note) {
                if(id) {
                    updateNote();
                } else {
                    addNote();
                }
            }
        }, 1000);

        return () => clearTimeout(delay);
    }, [note]);

    return (
        <>
            <Form onSubmit={(event) => event.preventDefault()}>
                {!isLoading ? (
                    <>
                        <Title
                            placeholder="Type your title here..."
                            type="text"
                            value={note ? note.title ? note.title : "" : ""}
                            onChange={updateNoteTitle}
                        />
                        <Content
                            placeholder="Type your content here..."
                            value={note ? note.content ? note.content : "" : ""}
                            onChange={updateNoteContent}
                        />
                        { id && <DeleteButton onClick={() => onDelete(id)}><MdDelete/></DeleteButton> }
                    </>
                ) : <LoadingNote/> }
            </Form>
        </>
    );
};

export default Note;

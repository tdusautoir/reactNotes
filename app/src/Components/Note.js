import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Title, Content } from './Note.styled';

const Note = () => {

    const { id } = useParams();
    const [note, setNote] = useState(null);

    const getNote = useCallback(async () => {

            const response = await fetch(`/notes/${id}`);
            const note = await response.json();
            
            setNote(note);
    }, [id]);
    
    useEffect(() => {
        getNote();
    }, [getNote])

    return (
        <Form>
            <Title placeholder='Type your title here...' type="text" defaultValue={note && note.title}/>
            <Content placeholder='Type your content here...' defaultValue={note ? note.content : ""}/>
            <button>Enregister</button>
        </Form>
    )
}

export default Note;

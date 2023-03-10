import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LoadingNote } from "./NoteLink.styled";
import { Form, Title, Content, DeleteButton, Buttons } from "./Note.styled";
import { MdDelete } from "react-icons/md";
import { AiFillPushpin, AiOutlinePushpin } from "react-icons/ai";
import Modal from "./Modal";
import Tags from "./NoteTags";

const updateNote = async (note) => {
  await fetch(`/notes/${note.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
};

const addNote = async (note) => {
  const response = await fetch("/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({...note, tags: []}),
  });

  return await response.json();
};

const Note = ({ onDelete, onChange, onAdd, onPinned }) => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [status, setStatus] = useState("add");

  const getNote = useCallback(async () => {
    if (id) {
        setIsLoading(true);
        const response = await fetch(`/notes/${id}`);
        
        if(response.status === 200) {
          const note = await response.json();
  
          setNote(note);
          setStatus("update");
          setIsLoading(false);
        } else {
          //note not found
          navigate('/');
        }
    } else {
        setIsLoading(false);
    }
  }, [id, navigate]);

  const updateNoteTitle = (event) => {
    setNote((note) => ({ ...note, title: event.target.value }));
  };

  const updateNoteContent = (event) => {
    setNote((note) => ({ ...note, content: event.target.value }));
  };

  const addTag = async (tagId) => {
    if(!note.tags.includes(tagId)) {
      const response = await fetch(`/notes/${note.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({...note, tags: [...note.tags, tagId]}),
      });
  
      if(response.status === 200) {
        setNote((note) => ({...note, tags: [...note.tags, tagId]}));
      }
    }
  }

  useEffect(() => {
    if(id === undefined) {
      setNote(null)
    }
  }, [id])

  useEffect(() => {
    getNote();
  }, [getNote]);

  useEffect(() => {
    if (id) {
      onChange(note);
    }

    const delay = setTimeout(async () => {
      if (note) {
        if (id) {
          updateNote(note);
        } else {
          addNote(note).then((note) => onAdd(note));
        }
      }
    }, 1000);

    return () => clearTimeout(delay);
  }, [note, id, onAdd, onChange]);

  return (
    <>
      <Form onSubmit={(event) => event.preventDefault()}>
        {!isLoading ? (
          <>
            { note && note.tags && ( <Tags tagsId={note.tags} onAdd={addTag} /> )} 
            <Title
              placeholder="Type your title here..."
              type="text"
              value={note ? (note.title ? note.title : "") : ""}
              onChange={updateNoteTitle}
            />
            <Content
              placeholder="Type your content here..."
              value={note ? (note.content ? note.content : "") : ""}
              onChange={updateNoteContent}
            />
            {status === 'delete' && <Modal changeStatus={setStatus} onConfirmed={() => onDelete(id)}/>}
            {id && (
              <Buttons>
                <DeleteButton onClick={() => { onPinned(note); note.pinned ? setNote((note) => ({...note, pinned: false})) : setNote((note) => ({...note, pinned: true})) }}>
                  {note ? !note.pinned ? ( <AiOutlinePushpin /> ) : ( <AiFillPushpin /> ) : null}
                </DeleteButton>
                <DeleteButton onClick={() => setStatus("delete")}>
                  <MdDelete />
                </DeleteButton>
              </Buttons>
            )}
          </>
        ) : (
          <LoadingNote />
        )}
      </Form>
    </>
  );
};

export default Note;

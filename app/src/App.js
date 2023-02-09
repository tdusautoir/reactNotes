import { Side, Main, NoteList } from "./App.styled";
import { darkTheme, GlobalStyle } from "./GlobalStyle";
import Note from "./Components/Note";
import NoteLink from "./Components/NoteLink";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  const getNotes = async () => {
    const response = await fetch("/notes");
    const notes = await response.json();

    setNotes(notes);
  };

  const deleteNote = (id) => {
    console.log("note" + id);
  }

  const updateNote = (updatedNote) => {
    setNotes(notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    }));

    const delay = setTimeout(async () => {
      await fetch(`/notes/${updatedNote.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedNote),
      });
    }, 500);

    return () => clearTimeout(delay);
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Side>
          {notes && (
            <NoteList>
              {notes.map((note) => (
                <li key={note.id}>
                  <NoteLink id={note.id} title={note.title} content={note.content} />
                </li>
              ))}
            </NoteList>
          )}
        </Side>
        <Main>
          <Routes>
            <Route path="/" element={<div>Sélectionnez une note pour l'editez</div>}></Route>
            <Route path="/notes/:id" element={<Note onDelete={deleteNote} onChange={updateNote} />}></Route>
          </Routes>
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;

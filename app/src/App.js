import { Side, Main, NoteList, Loading } from "./App.styled";
import { darkTheme, GlobalStyle } from "./GlobalStyle";
import Note from "./Components/Note";
import NoteLink from "./Components/NoteLink";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const getNotes = async () => {
    const response = await fetch("/notes");
    const notes = await response.json();

    setNotes(notes);
    setIsLoading(false);
  };

  const deleteNote = async (id) => {
    await fetch(`/notes/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    setNotes(notes.filter((note) => note.id !== parseInt(id)));
    navigate("/");
  };

  const addNote = (note) => {
    setNotes([...notes, note]);
    navigate(`/notes/${note.id}`);
  }
  
  const updatedNote = (updatedNote) => {
    setNotes(
      notes.map((note) => {
          if (note.id === updatedNote.id) {
            return updatedNote;
          } else {
            return note;
          }
      })
    );
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Side>
          {!isLoading ? (
            notes && (
              <NoteList>
                {notes.map((note) => (
                  <li key={note.id}>
                    <NoteLink
                      id={note.id}
                      title={note.title ? note.title : "Title"}
                      content={note.content ? note.content : "content"}
                      load
                    />
                  </li>
                ))}
              </NoteList>
            )
          ) : (
            <Loading />
          )}
        </Side>
        <Main>
          <Routes>
              <Route
                path="/"
                element={!isLoading && <Note onDelete={deleteNote} onChange={updatedNote} onAdd={addNote}/>}
              ></Route>
            <Route
              path="/notes/:id"
              element={<Note onDelete={deleteNote} onChange={updatedNote} onAdd={addNote}/>}
            ></Route>
          </Routes>
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;

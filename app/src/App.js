import { Side, Main, NoteList } from "./App.styled";
import { lightTheme, darkTheme, GlobalStyle } from "./GlobalStyle";
import Note from "./Components/Note";
import NoteLink from "./Components/NoteLink";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const response = await fetch("/notes");
    const notes = await response.json();

    setNotes(notes);
  };

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
                  <NoteLink id={note.id} title={note.title} />
                </li>
              ))}
            </NoteList>
          )}
        </Side>
        <Main>
          <Routes>
            <Route path="/" element={<div>Sélectionnez une note pour l'editez</div>}></Route>
            <Route path="/notes/:id" element={<Note />}></Route>
          </Routes>
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;

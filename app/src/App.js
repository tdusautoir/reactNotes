import { Side, Main, NoteList, Loading, SideTitle } from "./App.styled";
import { darkTheme, GlobalStyle, lightTheme } from "./GlobalStyle";
import Note from "./Components/Note";
import NoteLink from "./Components/NoteLink";
import SideNav from "./Components/SideNav";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { AiFillPushpin } from "react-icons/ai";

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedNote, setSelectedNote] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState(darkTheme);
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

    setNotes((oldNotes) => { return oldNotes.filter((note) => parseInt(note.id) !== parseInt(id))});
    navigate("/");
  };

  const pinnedNote = async (pinnedNote) => {
    const pinned = pinnedNote.pinned ? false : true;
    const response = await fetch(`/notes/${pinnedNote.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pinned: pinned }),
    });

    const updatedNote = await response.json();

    setNotes((oldNotes) => {
      return oldNotes.map((note) => {
        if (note.id === parseInt(pinnedNote.id)) {
          return updatedNote;
        } else {
          return note;
        }
      });
    });
  };

  const matchSearchTerm = (note) => {
    return (
      (note.title ? note.title : "").includes(searchTerm) ||
      (note.content ? note.content : "").includes(searchTerm)
    );
  };

  const addNote = useCallback((note) => {
    setNotes((oldNotes) => { return [...oldNotes, note] });
    setSelectedNote(note.id);
    navigate(`/notes/${note.id}`);
  }, [navigate]);

  const updatedNote = useCallback((updatedNote) => {
    if(updatedNote) {
      setNotes((oldNotes) => {
        return oldNotes.map((note) => {
          if (note.id === updatedNote.id) {
            return updatedNote;
          } else {
            return note;
          }
        });
      })
    }
  }, []);

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Side>
          {!isLoading ? (
            <>
              <SideNav
                onNavigate={navigate}
                onToggleTheme={() =>
                  setTheme((oldTheme) => { return oldTheme === darkTheme ? lightTheme : darkTheme })
                }
                onSearch={setSearchTerm}
              />
              <SideTitle>
                <AiFillPushpin />
                Pinned
              </SideTitle>
              {notes && (
                <NoteList>
                  {notes
                    .filter((note) => matchSearchTerm(note))
                    .map(
                      (note) =>
                        note.pinned && (
                          <li key={note.id}>
                            <NoteLink
                              pinned={note.pinned}
                              active={parseInt(note.id) === selectedNote}
                              id={note.id}
                              title={note.title ? note.title : "Title"}
                              content={note.content ? note.content : "content"}
                              onSelect={setSelectedNote}
                            />
                          </li>
                        )
                    )}
                </NoteList>
              )}
              <SideTitle>Notes</SideTitle>
              {notes && (
                <NoteList>
                  {notes
                    .filter((note) => matchSearchTerm(note))
                    .map(
                      (note) =>
                        !note.pinned && (
                          <li key={note.id}>
                            <NoteLink
                              pinned={note.pinned}
                              active={parseInt(note.id) === selectedNote}
                              id={note.id}
                              title={note.title ? note.title : "Title"}
                              content={note.content ? note.content : "content"}
                              onSelect={setSelectedNote}
                            />
                          </li>
                        )
                    )}
                </NoteList>
              )}
            </>
          ) : (
            <Loading />
          )}
        </Side>
        <Main>
          <Routes>
            <Route
              path="*"
              element={
                !isLoading && (
                  <Note
                    onDelete={deleteNote}
                    onChange={updatedNote}
                    onAdd={addNote}
                    onPinned={pinnedNote}
                  />
                )
              }
            ></Route>
            <Route
              path="/notes/:id"
              element={
                <Note
                  onDelete={deleteNote}
                  onChange={updatedNote}
                  onAdd={addNote}
                  onPinned={pinnedNote}
                />
              }
            ></Route>
          </Routes>
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;

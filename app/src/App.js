import { Side, Main, NoteList, Loading, SideTitle, SearchInput } from "./App.styled";
import { darkTheme, GlobalStyle } from "./GlobalStyle";
import Note from "./Components/Note";
import NoteLink from "./Components/NoteLink";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { AiFillPushpin } from "react-icons/ai";

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedNote, setSelectedNote] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
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

  const pinnedNote = async (pinnedNote) => {
    const pinned = pinnedNote.pinned ? false : true;
    const response = await fetch(`/notes/${pinnedNote.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pinned: pinned }),
    });

    const updatedNote = await response.json();

    setNotes(notes.map((note) => {
      if (note.id === parseInt(pinnedNote.id)) {
        return updatedNote;
      } else {
        return note;
      }
    }));
  };

  const doesNotMatchSearchTerm = (note) => {
    if(note.title) {
      if(note.title.includes(searchTerm)) {
        return true;
      } else if(note.content) {
        if(note.content.includes(searchTerm)) {
          return true;
        }
      }
    } else if(note.content) {
      if(note.content.includes(searchTerm)) {
        return true;
      }
    }

    return false;
  }

  const addNote = (note) => {
    setNotes([...notes, note]);
    setSelectedNote(note.id);
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
            <>
              <SearchInput type="search" onChange={(e) => setSearchTerm(e.target.value)}/>
              <SideTitle><AiFillPushpin/>Pinned</SideTitle>
                { notes && (
                  <NoteList>
                    {notes.filter((note) => doesNotMatchSearchTerm(note)).map((note) => note.pinned && (
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
                    ))}
                  </NoteList>
                )}
              <SideTitle>Notes</SideTitle>
              { notes && (
                <NoteList>
                  {notes.filter((note) => doesNotMatchSearchTerm(note)).map((note) => !note.pinned && (
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
                  ))}
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
                path="/"
                element={!isLoading && <Note onDelete={deleteNote} onChange={updatedNote} onAdd={addNote} onPinned={pinnedNote}/>}
              ></Route>
            <Route
              path="/notes/:id"
              element={<Note onDelete={deleteNote} onChange={updatedNote} onAdd={addNote} onPinned={pinnedNote}/>}
            ></Route>
          </Routes>
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;

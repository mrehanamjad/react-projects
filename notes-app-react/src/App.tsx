import { useState, useEffect } from "react";
import { AddNote, Header, NoteItem, Top } from "./components";
import { NotesProvider } from "./contexts";

interface NotesT {
  id: number;
  title: string;
  content: string;
  bgColor: string;
  bgImage: string;
}

function App() {
  const [notes, setNotes] = useState<NotesT[]>([]);

  const addNote = (note: NotesT) => {
    setNotes((prev) => [note, ...prev]);
  };
  const updateNote = (id: number, note: NotesT) => {
    setNotes((prev) =>
      prev.map((prevNote) => (prevNote.id === id ? note : prevNote))
    );
  };
  const deleteNote = (id: number) => {
    setNotes((prev: NotesT[]) => prev.filter((note: NotesT) => note.id != id));
  };

  

  useEffect(() => {
    const prevNotes: string = localStorage.getItem("Notes") ?? "";
       
    if (prevNotes && prevNotes.length > 0) {
      const jsonNotes = JSON.parse(prevNotes);
      setNotes(jsonNotes);   
    }    
  }, []);


  useEffect(() => {
    if (notes && notes.length > 0) localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);


  return (
    <NotesProvider value={{ notes, addNote, updateNote, deleteNote }}>
      <Header />
      <Top />
      <AddNote />
      {notes.map((note) => (
        <NoteItem key={note.id} noteData={note} />
      ))}
    </NotesProvider>
  );
}

export default App;
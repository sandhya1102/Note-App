import { useState, useEffect } from 'react';
import Note from './components/Note';
import { saveNote, getNote } from './utils/storage';

const STORAGE_KEY = 'my-notes';

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    setNotes(getNote(STORAGE_KEY));
  }, []);

  const handleAddNote = () => {
    if (!input.trim()) {
      toast.error("Note cannot be empty!");
      return;
    }
    const updatedNotes = [...notes, input];
    setNotes(updatedNotes);
    saveNote(STORAGE_KEY, updatedNotes);
    setInput('');
    toast.success("Note added!");
    
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Note Taking App</h1>
      <input
        type="text"
        className="w-full border p-2 mb-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write a note..."
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4" onClick={handleAddNote}>
        Add Note
      </button>
      {notes.map((note, index) => (
        <Note key={index} note={note} />
      ))}
    </div>
  );
}

export default App;

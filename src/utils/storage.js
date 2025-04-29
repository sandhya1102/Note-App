export const saveNote = (key, note) => {
    localStorage.setItem(key, JSON.stringify(note));
  };
  
  export const getNote = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  };
  
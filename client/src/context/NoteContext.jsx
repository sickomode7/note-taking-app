import { createContext, useEffect, useState } from "react";
import BACKEND_URL from "../api/url";

export const NoteContext = createContext();

export const NoteProvider=({children})=>{
    const [notes, setNotes] = useState([]);
const [loading, setLoading] = useState(true);

// fetch all notes
const getNotes = async() => {
    setLoading(true);
    try {
        const response = await BACKEND_URL.get("/get-notes");
        setNotes(response.data);
    } catch (error) {
        console.error("Error fetching notes:", error);
    } finally {
        setLoading(false);
    }
}

useEffect(()=>{
    getNotes();
},[])

// create a note
const createNote = async(note) => {
    try {
        const res = await BACKEND_URL.post("/create-note", note)
        setNotes((prev) => [res.data, ...prev])
    } catch (error) {
        console.error("Error creating note:", error)
        throw error
    }
}

// update a note
const updateNote = async(id, updateNote) => {
    try {
        const res = await BACKEND_URL.put(`/update-note/${id}`, updateNote)
        setNotes((prev) => prev.map((note) => (note._id === id ? res.data : note)))
    } catch (error) {
        console.error("Error updating note:", error)
        throw error
    }
}

// delete a note
const deleteNote = async(id) => {
    try {
        await BACKEND_URL.delete(`/delete-note/${id}`)
        setNotes((prev) => prev.filter((note) => note._id !== id))
    } catch (error) {
        console.error("Error deleting note:", error)
        throw error
    }
}

return(
    <NoteContext.Provider value={{notes,loading,createNote,updateNote,deleteNote}}>
        {children}
    </NoteContext.Provider>
)
}
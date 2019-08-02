export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";


let NoteEntry = 0;
const now = new Date();
const note_date = now.toLocaleDateString();
const note_time = now.toLocaleTimeString();

export const addNote = (title, content) => ({
    type: ADD_NOTE,
    id: NoteEntry++,
    title,
    content,
    note_date,
    note_time
});

export function removeNote(id) {
    return {
        type: REMOVE_NOTE,
        id
    }
}

export function editNote(id, title, content) {
    return {
        type: EDIT_NOTE,
        id,
        title,
        content,
    }
}



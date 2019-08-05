export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const TOGGLE_NOTEDETAIL = "TOGGLE_NOTEDETAIL";
export const FILTER_NOTE = "FILTER_NOTE";
export const RESET_FILTER = "RESET_FILTER";


let NoteEntry = 8;
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

export const toggle_NoteDetail = (id) => ({
    type: TOGGLE_NOTEDETAIL,
    id
});

export const filterNote = (id) => ({
    type: FILTER_NOTE,
    id
});
export const resetFilter = () => ({type: RESET_FILTER});




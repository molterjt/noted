import {combineReducers} from 'redux';
import {ADD_NOTE, REMOVE_NOTE, EDIT_NOTE, TOGGLE_NOTEDETAIL, RESET_FILTER, FILTER_NOTE} from '../actions';

const now = new Date();
const note_date = now.toLocaleDateString();
const note_time = now.toLocaleTimeString();
 export const INITIAL_STATE = [
    {
        content: "This is an example note.  You can delete this by clicking the trashcan in the upper-right corner of the note tile. ",
        id:1,
        showNoteTile: true,
        title: "Example Delete Note",
        note_date: note_date,
        note_time: note_time,
    },
    {
        id:2,
        showNoteTile: true,
        title: "Example Edit Note",
        note_date: note_date,
        note_time: note_time,
        content: "If you need to edit your note. Expand the full note and select the pencil icon."
    },
    {
        id:3,
        showNoteTile: true,
        title: "Example NoteList",
        note_date: note_date,
        note_time: note_time,
        content: "If you like to write a lot notes, you might find it easier to filter a note for quick viewing by pressing the note in the NoteList on the right."
    },

]


export const Notes = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_NOTE:
            return [
                {
                    id: action.id,
                    title: action.title,
                    content: action.content,
                    note_date: action.note_date,
                    note_time: action.note_time,
                    showNoteTile: true
                },
                ...state
            ];
        case REMOVE_NOTE:
            return state.filter(note => note.id !== action.id);
        case EDIT_NOTE:
            return state.map(note =>
                note.id === action.id
                    ? Object.assign( {}, note, {title: action.title, content: action.content})
                    : note
            );
        case TOGGLE_NOTEDETAIL:
            return state.map(note =>
                note.id === action.id
                    ? Object.assign({}, note, { showDetailModal: !note.showDetailModal })
                    : note
            );
        case FILTER_NOTE:
            return state.map(note =>
                note.id !== action.id
                ? Object.assign( {}, note, {showNoteTile: !note.showNoteTile})
                : note
            );
        case RESET_FILTER:
            return state.map(note =>
                Object.assign( {}, note, {showNoteTile: true})
            );
        default:
            return state;
    }
}

export default combineReducers({Notes});
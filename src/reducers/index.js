
import {ADD_NOTE, REMOVE_NOTE, EDIT_NOTE} from '../actions';


const AllNotes = (state=[], action) => {
    switch(action.type){
        case ADD_NOTE:
            return [
                {
                    id: action.id,
                    title: action.title,
                    content: action.content,
                    note_date: action.note_date,
                    note_time: action.note_time
                }
                ,...state
            ];
        case REMOVE_NOTE:
            return state.filter(note => note.id !== action.id);
        case EDIT_NOTE:
            return state.map(note =>
                note.id === action.id
                    ? Object.assign( {}, note, {title: action.title, content: action.content})
                    : note
            );
        default:
            return state;
    }
}

export default AllNotes;
import {connect} from 'react-redux';
import NoteList from '../components/note-list/NoteList';
import {editNote, filterNote, removeNote, toggle_NoteDetail,resetFilter} from "../actions";


const mapStateToProps = (state) => ({noteData: state.Notes});
const mapDispatchToProps = (dispatch) => ({

    onRemoveNote: id => {
        dispatch(removeNote(id))
    },
    onEditNote: id => {
        dispatch(editNote(id))
    },
    onShowNoteDetailModal: id => {
        dispatch(toggle_NoteDetail(id))
    },
    onFilterNote: id => {
        dispatch(filterNote(id))
    },
    onResetFilter: () => {
        dispatch(resetFilter())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
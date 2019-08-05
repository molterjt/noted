import {connect} from 'react-redux';
import {removeNote, editNote, toggle_NoteDetail, filterNote} from "../actions";
import TileGallery from '../components/tile-gallery/TileGallery';


const mapStateToProps = (state) => ({ notes: state.Notes});
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
});

export default connect(mapStateToProps, mapDispatchToProps)(TileGallery);
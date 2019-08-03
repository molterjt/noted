import {connect} from 'react-redux';
import {removeNote, editNote} from "../actions";
import TileGallery from '../components/tile-gallery/TileGallery';


const mapStateToProps = (state) => ({ notes: state.Notes});
const mapDispatchToProps = (dispatch) => ({

    onRemoveNote: id => {
        dispatch(removeNote(id))
    },
    onEditNote: id => {
        dispatch(editNote(id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TileGallery);
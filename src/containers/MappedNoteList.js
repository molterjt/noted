import {connect} from 'react-redux';
import NoteList from '../components/note-list/NoteList';


const mapStateToProps = (state) => ({noteData: state.Notes});

export default connect(mapStateToProps)(NoteList);
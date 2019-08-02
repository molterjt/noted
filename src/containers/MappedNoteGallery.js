import {connect} from 'react-redux';

import TileGallery from '../components/tile-gallery/TileGallery';


const mapStateToProps = (state) => ({ notes: state.AllNotes});

export default connect(mapStateToProps)(TileGallery);
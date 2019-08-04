import React from 'react'
import PropTypes from 'prop-types'
import NoteTile from '../note-tile/NoteTile';

const TileGallery = ({notes, onRemoveNote }) => (
  <div className="note-tile-container">
      {notes.length > 0 ?
        notes.map((note, index) => (
            <NoteTile
                key={index}
                id={note.id}
                title={note.title}
                note_time={note.note_time}
                note_date={note.note_date}
                content={note.content}
                handleDelete={() => onRemoveNote(note.id)}
            />
        ))
          : <h3 style={{color:'#26a2dd',alignSelf:'center', textAlign:'center', justifyContent:'center', display:'flex', marginTop: 30}}>
              Write your first note!
          </h3>
      }
  </div>
);
TileGallery.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            content: PropTypes.string,
            note_date: PropTypes.string,
            note_time: PropTypes.string,
            handleDelete: PropTypes.func,
        })
    )
};
export default TileGallery;
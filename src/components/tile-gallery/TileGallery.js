import React from 'react'
import PropTypes from 'prop-types'
import NoteTile from '../note-tile/NoteTile';
import FormInput from '../form-Input/FormInput';
import TextBox from '../text-box/TextBox';
import {FiPlusCircle} from 'react-icons/fi'


const TileGallery = ({notes, onRemoveNote, onEditNote }) => (
  <div className="note-tile-container">
      {notes ?
        notes.map((note, index) => (
            <NoteTile
                key={index}
                id={note.id}
                title={note.title}
                note_time={note.note_time}
                note_date={note.note_date}
                content={note.content}
                handleDelete={() => onRemoveNote(note.id)}
                handleEdit={() => onEditNote(note.id)}
            />
        ))
          : 'Write your first note!'
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
            handleEdit: PropTypes.func,
            handleDelete: PropTypes.func,
        })
    )
};
export default TileGallery;
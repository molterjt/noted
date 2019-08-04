import React from 'react';
import PropTypes from 'prop-types';
import "./NoteList-Style.scss";

import NoteListItem from '../note-list-item/NoteListItem';

const NoteList = ({noteData}) => (
  <div className="note-list">
      <h1 className="header">Note List</h1>
      {
          noteData.length > 0
          ?
              noteData.map( (note, index) => (
                  <NoteListItem
                    key={index}
                    title={note.title}
                    note_date={note.note_date}
                  />
              ))

          : <span style={{marginLeft: 10, marginTop: 30}}>
                  No notes yet ...
              </span>
      }
  </div>
);
NoteList.propTypes = {
    noteData: PropTypes.array,
};
export default NoteList;
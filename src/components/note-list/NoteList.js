import React from 'react';
import PropTypes from 'prop-types';
import "./NoteList-Style.scss";

import NoteListItem from '../note-list-item/NoteListItem';

const NoteList = ({noteData}) => (
  <div>
      {
          noteData
          ? (
                  <div>
                      {
                          noteData.map( (note, index) => (
                              <NoteListItem
                                key={index}
                                title={note.title}
                                note_date={note.note_date}
                              />
                          ))
                      }
                  </div>

          )
          : <span>Create Your First Note!</span>
      }
  </div>
);
NoteList.propTypes = {
    noteData: PropTypes.array,
};
export default NoteList;
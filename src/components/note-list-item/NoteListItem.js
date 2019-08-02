import React from 'react';
import PropTypes from 'prop-types';
import "./NoteLIstItem-Style.scss";


const NoteListItem = ({title, note_date, tags}) => (
    <div className="note-list-item" >
        <h4 className="title">{title}</h4>
        <h5 className="note_date">{note_date}</h5>
    </div>
);
NoteListItem.propTypes = {
    title: PropTypes.string,
    note_date: PropTypes.string,
};
export default NoteListItem;
import React from 'react';
import PropTypes from 'prop-types';
import "./NoteLIstItem-Style.scss";


const NoteListItem = ({title, note_date, showNoteTile, filter_note}) => (
    <div>
        {showNoteTile
            ?<div className="note-list-item"  onClick={filter_note}>
                <h4 className="title">{title}</h4>
                <h5 className="note_date">{note_date}</h5>
            </div>
            : null
        }
    </div>

);
NoteListItem.propTypes = {
    title: PropTypes.string,
    note_date: PropTypes.string,
    showNoteTile: PropTypes.bool,
    filter_note: PropTypes.func,
};
export default NoteListItem;
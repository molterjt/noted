import React from 'react';
import PropTypes from 'prop-types';
import ModalController from '../../components/modal-box/ModalController'
import './NoteTile-style.scss';
import {FiTrash2} from 'react-icons/fi';
import NoteDetail from "../note-detail/NoteDetail";


class NoteTile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            expandNote: false,
            previewContent: '',
        };
    }
    render(){
        const {id, title, note_date, note_time, content, handleDelete} = this.props;

        return(
            <div className={this.state.expandNote ? 'expanded-note' : 'note-tile'}>
                <header className={'header-info'}>
                    <span className={'note_date'}>{note_date}</span>
                    <span className={'note_time'}>{note_time}</span>
                    <FiTrash2
                        onClick={handleDelete}
                        color={"red"}
                        size={20}
                        className="trash-can"
                    />
                </header>
                <h1 className={'title'}>{title}</h1>
                <div>
                    <p className={'content'}>{`${content.substring(0,60)}...`}</p>
                </div>
                <footer>
                    <ModalController
                        buttonLabel={'Edit'}
                    >
                        <NoteDetail
                            id={id}
                            title={title}
                            note_time={note_time}
                            note_date={note_date}
                            content={content}

                        />
                    </ModalController>
                </footer>
            </div>
        );
    }
}
NoteTile.propTypes = {
    title: PropTypes.string,
    note_date: PropTypes.string,
    note_time: PropTypes.string,
    content: PropTypes.string,
    handleDelete: PropTypes.func,
};

export default NoteTile;
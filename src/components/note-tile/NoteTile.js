import React from 'react';
import PropTypes from 'prop-types';
import ModalController from '../../components/modal-box/ModalController'
import './NoteTile-style.scss';

import {FiTrash2, FiChevronsDown, FiChevronsUp} from 'react-icons/fi';
import {FiEdit3, FiMinimize2, FiMaximize2} from 'react-icons/fi';
import {IoIosOpen} from 'react-icons/io';

import NoteDetail from "../note-detail/NoteDetail";




class NoteTile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            expandNote: false,
            previewContent: '',
        };
    }

    handleExpandNote = () => {
        this.setState({expandNote: !this.state.expandNote})
    };

    handleContentPreview = (noteContent) => {
        if(noteContent.length < 60){
            this.setState({
                previewContent: noteContent
            })
        }else{
            this.setState({
                previewContent: `${noteContent.substring(0,60)}...`
            });
        }
    };

    componetDidMount(){
        this.handleContentPreview();
    }
    render(){
        const {id, title, note_date, note_time, content, handleDelete, handleEdit, editForm} = this.props;

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
                            handleEdit={handleEdit}
                            editForm={editForm}
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
    handleEdit: PropTypes.func,
};

export default NoteTile;
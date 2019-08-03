import React from 'react';
import PropTypes from 'prop-types';
import './NoteDetail-Style.scss';
import EditNote from '../../containers/EditNote';
import {FiEdit3} from 'react-icons/fi';


class NoteDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showForm: false,
        }

    }
    handleShowForm = () => {
        this.setState({showForm: !this.state.showForm})
    };

    render(){
        const { id, title, note_date, note_time, content } = this.props;
        return(
            <div className="note-detail-container">
                <header className="header-info">
                    <span className="note_date">{note_date}</span>
                    <span className="note_date">{note_time}</span>
                </header>
                <h1 className='title'>{title}</h1>
                <div className="content-container">
                    <p className="content-text"> {content} </p>
                </div>
                <footer className="edit-note-container">
                    {
                        this.state.showForm
                            ?  <FiEdit3
                                    size={24}
                                    color={'blue'}
                                    onClick={() => this.handleShowForm()}
                                />
                            :  <FiEdit3
                                    size={24}
                                    color={'red'}
                                    onClick={() => this.handleShowForm()}
                                />
                    }
                    {this.state.showForm
                        ? <div>
                            <EditNote id={id}/>
                        </div>
                        : null
                    }
                </footer>
            </div>
        );
    }
}
NoteDetail.propTypes={
    title: PropTypes.string,
    time_stamp: PropTypes.string,
    content: PropTypes.string,
    handleDelete: PropTypes.func,
    handleEdit: PropTypes.func,
};
export default NoteDetail;




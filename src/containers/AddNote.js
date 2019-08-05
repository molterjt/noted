import React from 'react';
import "../App.scss";
import {addNote} from '../actions';
import {connect} from 'react-redux';
import FormInput from '../components/form-Input/FormInput';
import TextBox from '../components/text-box/TextBox';
import {FiPlusCircle,FiMinimize,FiEdit} from 'react-icons/fi'

class AddNote extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            content: '',
            showAddNote: false,
        };
    }
    toggleAddNoteForm = () => this.setState({showAddNote: !this.state.showAddNote});
    handleSubmit = async (event) => {
        event.preventDefault();
        const {title, content} = this.state;
        if(title.length < 1 || content.length < 1) return alert('You got to have something to say... right?');

        await this.props.dispatch(addNote(title, content));
        this.setState({
            title: '',
            content: '',
            showAddNote: false,

        });
    };
    handleChange = (event) => {
        event.preventDefault();
        const {value, name} = event.target;
        this.setState({ [name]: value });
    };

    render(){
        const {title, content, showAddNote} = this.state;
        return(
            <div>

                {
                    showAddNote
                        ?(
                            <div className={'form-container'}>
                                <label className="hide-note-label">Hide New Note</label>
                                <FiMinimize size={36} color={'#1cb684'} onClick={this.toggleAddNoteForm} style={{cursor:'pointer'}}/>
                                <form>
                                    <FormInput
                                        type={'text'}
                                        name={'title'}
                                        value={title}
                                        required={true}
                                        autoComplete={'off'}
                                        label={'Note Title'}
                                        handleChange={this.handleChange}
                                    />
                                    <TextBox
                                        name={'content'}
                                        value={content}
                                        required={true}
                                        onChange={this.handleChange}
                                        placeholder={"Something profound and brilliant... "}
                                    />
                                    <div className="create-note-button-container">
                                        <FiPlusCircle
                                            onClick={this.handleSubmit}
                                            color={'red'}
                                            size={36}
                                            style={{cursor:'pointer'}}
                                        />
                                        <label className="hide-note-label">Create Note</label>
                                    </div>
                                </form>
                            </div>
                        )
                        : (
                            <div className="addNoteContainer">
                                <label className="add-note-label">Write New Note</label>
                                <FiEdit size={36} color={'#1cb684'} onClick={this.toggleAddNoteForm} style={{cursor:'pointer'}} />

                            </div>

                        )
                }
            </div>
        );
    }
}
export default connect()(AddNote);
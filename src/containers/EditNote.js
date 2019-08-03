import React from 'react';
import {connect} from 'react-redux';
import {editNote} from '../actions';
import FormInput from '../components/form-Input/FormInput';
import TextBox from '../components/text-box/TextBox';
import {FiPlusCircle} from 'react-icons/fi'


class EditNote extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newTitle: '',
            newContent: '',
        };
    };
    handleChange = (event) => {
        event.preventDefault();
        const {value, name} = event.target;
        this.setState({ [name]: value });
    };
    submitEdit = async (event) => {
        event.preventDefault();
        const {newTitle, newContent} = this.state;
        const {id, dispatch} = this.props;
        dispatch(editNote(id, newTitle, newContent));
        this.setState({
            newTitle: '',
            newContent: '',
        })
    }
    render(){
        return(
            <form>
                <FormInput
                    type={'text'}
                    name={'newTitle'}
                    value={this.state.newTitle}
                    required={true}
                    autoComplete={'off'}
                    label={'Note Title'}
                    handleChange={this.handleChange}
                />
                <TextBox
                    name={'newContent'}
                    value={this.state.newContent}
                    required={true}
                    onChange={this.handleChange}
                    placeholder={"Didn't convey it quite right?  Edit your note now"}
                />
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>

                    <FiPlusCircle
                        onClick={this.submitEdit}
                        color={'#1cb684'}
                        size={24}
                        style={{cursor:'pointer', marginTop: 10}}
                    />
                    <label style={{color: 'deepskyblue'}}>Edit Note</label>
                </div>
            </form>
        );
    }
};

export default connect()(EditNote);
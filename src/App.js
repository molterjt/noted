import React from 'react';
import './App.scss';
import NoteTile from './components/note-tile/NoteTile';
import FormInput from './components/form-Input/FormInput';
import TextBox from './components/text-box/TextBox';
import ModalController from './components/modal-box/ModalController';
import NoteList from './components/note-list/NoteList'
import {FiPlusCircle, FiEdit, FiMinimize} from 'react-icons/fi'

import MappedNoteGallery from './containers/MappedNoteGallery';

const now = new Date();
const note_date = now.toLocaleDateString();
const note_time = now.toLocaleTimeString();

const data = [
    {
        title: "Breakfast",
        note_date: note_date,
        note_time: note_time,
        content: "Today is Wednesday, July 31, 2019.  I am currently listening to the JRE podcast.  Had Chipotle for dinner"
    },
    {
        title: "10:00 am Meeting",
        note_date: note_date,
        note_time: note_time,
        content: "Today is Wednesday, July 31, 2019.  I am currently listening to the JRE podcast.  Had Chipotle for dinner"
    },
    {
        title: "Lunch",
        note_date: note_date,
        note_time: note_time,
        content: "Today is Wednesday, July 31, 2019.  I am currently listening to the JRE podcast.  Had Chipotle for dinner"
    },
    {
        title: "Sitting at Airport",
        note_date: note_date,
        note_time: note_time,
        content: "Today is Wednesday, July 31, 2019.  I am currently listening to the JRE podcast.  Had Chipotle for dinner"
    },
    {
        title: "Cannot Sleep",
        note_date: note_date,
        note_time: note_time,
        content: "Today is Wednesday, July 31, 2019.  I am currently listening to the JRE podcast.  Had Chipotle for dinner"
    },
    {
        title: "My Dog is Crazy",
        note_date: note_date,
        note_time: note_time,
        content: "Today is Wednesday, July 31, 2019.  I am currently listening to the JRE podcast.  Had Chipotle for dinner"
    },
    {
        title: "Eleven",
        note_date: note_date,
        note_time: note_time,
        content: "\n" +
        "New Photon deployment options, a full Prisma 2 tutorial, and events in the Prisma office!\n" +
        "Deploy Photon to ZEIT, AWS, Netlify, & More!\n" +
        "Thanks to a number of improvements in the Prisma schema, you can now deploy your Photon-based applications to the cloud provider of your choice. It also works in serverless environments like AWS Lambda, ZEIT Now or Netlify Functions.\n" +
        "\n"
    },
]



class App extends React.Component{
  constructor(){
    super();
    this.state={
        fakeData: data,
        title: '',
        editTitle: '',
        content: '',
        editContent: '',
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const {title, content, fakeData} = this.state;
    if(title.length < 1 || content.length < 1) return alert('You got to have something to say... right?');
    const newNote = Object.assign({
        title: title,
        note_date: note_date,
        note_time: note_time,
        content: content,
    });
    this.setState({
        fakeData: [newNote, ...fakeData],
        title: '',
        content: '',
        showAddNote: false,

    })
  };

  handleEdit = async(event,position) => {
      const {editTitle, editContent, fakeData} = this.state;
      fakeData.map((note, index) => {
          if(index === position){
              Object.assign({}, note, {title: editTitle, content: editContent});
          }
          return fakeData
      })
  }
  handleChange = (event) => {
    event.preventDefault();
    const {value, name} = event.target;
    this.setState({ [name]: value });
  };
  handleNoteDelete = async (position) => {
    const {fakeData} = this.state;
    const copyData = fakeData;
    copyData.splice(position,1);
    await this.setState({ fakeData: [...copyData] });
  };
  toggleAddNoteForm = () => this.setState({showAddNote: !this.state.showAddNote});
  render(){
    const {title, content, fakeData, showAddNote} = this.state;

    return(
        <div className="top-level-container">

            <div className="left-container">
                <h2>Note List:</h2>
                <NoteList
                    noteData={fakeData}
                />
            </div>

            <div className="right-container">
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
                                    autocomplete={'off'}
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
                                {/*<textarea*/}
                                    {/*className="note-content-box"*/}
                                    {/*name={'content'}*/}
                                    {/*value={content}*/}
                                    {/*required={true}*/}
                                    {/*onChange={this.handleChange}*/}
                                    {/*placeholder={"Something profound and brilliant... "}*/}
                                    {/*style={{padding: 5, fontFamily: "Avenir, serif", fontSize: 14}}*/}
                                {/*/>*/}
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
                            <label className="add-note-label">Add Note</label>
                            <FiEdit size={36} color={'#1cb684'} onClick={this.toggleAddNoteForm} style={{cursor:'pointer'}} />

                        </div>

                    )

                }
                <MappedNoteGallery/>


                {/*<div className={'note-tile-container'}>*/}
                    {/*{*/}
                        {/*this.state.fakeData.map((x,index) => (*/}
                            {/*<NoteTile*/}
                                {/*key={index}*/}
                                {/*title={x.title}*/}
                                {/*note_time={x.note_time}*/}
                                {/*note_date={x.note_date}*/}
                                {/*content={x.content}*/}
                                {/*handleDelete={() => this.handleNoteDelete(index)}*/}
                                {/*handleEdit={() => this.handleEdit(index)}*/}
                                {/*editForm={*/}
                                    {/*<form>*/}
                                        {/*<FormInput*/}
                                            {/*type={'text'}*/}
                                            {/*name={'editTitle'}*/}
                                            {/*value={this.state.editTitle}*/}
                                            {/*required={true}*/}
                                            {/*autocomplete={'off'}*/}
                                            {/*label={'Note Title'}*/}
                                            {/*handleChange={this.handleChange}*/}
                                        {/*/>*/}
                                        {/*<TextBox*/}
                                            {/*name={'editContent'}*/}
                                            {/*value={this.state.editContent}*/}
                                            {/*required={true}*/}
                                            {/*onChange={this.handleChange}*/}
                                            {/*placeholder={"Didn't convey it quite right?  Edit your note now"}*/}
                                        {/*/>*/}
                                        {/*<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>*/}

                                            {/*<FiPlusCircle*/}
                                                {/*onClick={this.handleEdit}*/}
                                                {/*color={'#1cb684'}*/}
                                                {/*size={24}*/}
                                                {/*style={{cursor:'pointer', marginTop: 10}}*/}
                                            {/*/>*/}
                                            {/*<label style={{color: 'deepskyblue'}}>Edit Note</label>*/}
                                        {/*</div>*/}
                                    {/*</form>*/}
                                {/*}*/}

                            {/*/>*/}
                        {/*))*/}
                    {/*}*/}
                {/*</div>*/}

            </div>
        </div>
    );
  }
}



export default App;

import React from 'react';
import './App.scss';
import MappedNoteGallery from './containers/MappedNoteGallery';
import MappedNoteList from './containers/MappedNoteList';
import AddNote from './containers/AddNote';


const App = () => (
    <div className="top-level-container">
        <div className="left-container">
            <MappedNoteList/>
        </div>
        <div className="right-container">
            <h1 className="title-header">noted.</h1>
            <AddNote/>
            <MappedNoteGallery/>
        </div>
    </div>
);

export default App;

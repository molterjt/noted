import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';
import App from './App';
import MappedNoteList from './containers/MappedNoteList';
import MappedNoteGallery from './containers/MappedNoteGallery';
import AddNote from './containers/AddNote';
import EditNote from './containers/EditNote';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer, {INITIAL_STATE} from './reducers';
import {Notes} from "./reducers";
import * as types from './actions';

const store = createStore(
    rootReducer
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( <Provider store={store}>
      <App />
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders MappedNoteGallery without crashing', () => {
    shallow(<Provider store={store}><MappedNoteGallery /></Provider>);
});

it('renders MappedNoteList without crashing', () => {
    shallow(<Provider store={store}><MappedNoteList /></Provider>);
});

it('renders AddNote without crashing', () => {
    shallow(<Provider store={store}><AddNote /></Provider>);
});

it('renders EditNote without crashing', () => {
    shallow(<Provider store={store}><EditNote /></Provider>);
});

it('renders title', () => {
    const wrapper = shallow(<App />);
    const title = <h1 className="title-header">noted.</h1>;
    //expect(wrapper.contains(title)).toBe(true);
    expect(wrapper.contains(title)).toEqual(true);
});


const now = new Date();
const note_date = now.toLocaleDateString();
const note_time = now.toLocaleTimeString();
describe('Note Reducers', () => {
    it('should return the initial state', () => {
        expect(Notes(undefined, {})).toEqual(
            [
                {
                    id:1,
                    showNoteTile: true,
                    title: "Example Delete Note",
                    note_date: note_date,
                    note_time: note_time,
                    content: "This is an example note.  You can delete this by clicking the trashcan in the upper-right corner of the note tile. "
                },
                {
                    id:2,
                    showNoteTile: true,
                    title: "Example Edit Note",
                    note_date: note_date,
                    note_time: note_time,
                    content: "If you need to edit your note. Expand the full note and select the pencil icon."
                },
                {
                    id:3,
                    showNoteTile: true,
                    title: "Example NoteList",
                    note_date: note_date,
                    note_time: note_time,
                    content: "If you like to write a lot notes, you might find it easier to filter a note for quick viewing by pressing the note in the NoteList on the right."
                },

            ]
        )
    });
    it('should handle ADD_NOTE', () => {
        expect(
            Notes([], {

                type: types.ADD_NOTE,
                id: 8,
                title: 'Test Note',
                content: 'Test Note',

            })
        ).toEqual([
            {
                id: 8,
                title: 'Test Note',
                content: 'Test Note',
                showNoteTile: true,

            }
        ])
    });


});



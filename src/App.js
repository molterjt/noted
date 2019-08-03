import React from 'react';
import './App.scss';
import NoteList from './components/note-list/NoteList'
import MappedNoteGallery from './containers/MappedNoteGallery';
import AddNote from './containers/AddNote';

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



const App = () => (
    <div className="top-level-container">
        <div className="left-container">
            <h2>Note List:</h2>
            <NoteList
                noteData={data}
            />
        </div>
        <div className="right-container">
            <AddNote/>
            <MappedNoteGallery/>
        </div>
    </div>
);

export default App;

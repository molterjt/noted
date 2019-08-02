import React from 'react'
import PropTypes from 'prop-types'
import NoteTile from '../note-tile/NoteTile';
import FormInput from '../form-Input/FormInput';
import TextBox from '../text-box/TextBox';
import {FiPlusCircle} from 'react-icons/fi'


const TileGallery = ({notes}) => (
  <div className="note-tile-container">

      {notes ?
        notes.map((note, index) => (
            <NoteTile
                key={index}
                title={note.title}
                note_time={note.note_time}
                note_date={note.note_date}
                content={note.content}
                handleDelete={() => this.handleNoteDelete(index)}
                handleEdit={() => this.handleEdit(index)}
                editForm={
                    <form>
                        <FormInput
                            type={'text'}
                            name={'editTitle'}
                            value={this.state.editTitle}
                            required={true}
                            autocomplete={'off'}
                            label={'Note Title'}
                            handleChange={this.handleChange}
                        />
                        <TextBox
                            name={'editContent'}
                            value={this.state.editContent}
                            required={true}
                            onChange={this.handleChange}
                            placeholder={"Didn't convey it quite right?  Edit your note now"}
                        />
                        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>

                            <FiPlusCircle
                                onClick={this.handleEdit}
                                color={'#1cb684'}
                                size={24}
                                style={{cursor:'pointer', marginTop: 10}}
                            />
                            <label style={{color: 'deepskyblue'}}>Edit Note</label>
                        </div>
                    </form>
                }

            />
        ))
          : 'Write your first note!'
      }

  </div>
);
TileGallery.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            content: PropTypes.string,
            note_date: PropTypes.string,
            note_time: PropTypes.string,
            handleEdit: PropTypes.func,
            handleDelete: PropTypes.func,
        })
    )
};

export default TileGallery;
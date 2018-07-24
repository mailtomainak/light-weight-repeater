import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    companyId:PropTypes.string,
    isVisible:PropTypes    
};


class CustomNote extends Component {
    constructor(props) {
        super(props);
        this.state={
            isVisible:false
        }

        this.showNotesForm = this.showNotesForm.bind(this);
        this.saveNotes = this.saveNotes.bind(this);
        this.showNotesList = this.showNotesList.bind(this);
    }

    updateForm(){
        this.setState(prevState=>({
            isVisible:!prevState.isVisible
        })) 
    }
    showNotesForm(){
        this.updateForm();      
    }

    saveNotes(){
        //hide form 
        this.updateForm();
        //dispatch action
    }
    showNotesList(){
        //DISPATCH ACTION 
    }
    render() {
        return (
           <div>
                
            {this.state.isVisible===true?
            <div>
                <textarea name="notesText" id="notesText" cols="30" rows="10"></textarea>
                <input type="button" value="Save" onClick={this.saveNotes}/>
            </div>
            :<div>
                
                <button onClick={this.showNotesForm}>Add Notes</button>
                
            </div>}
            <button onClick={this.showNotesList}>View Notes</button>
            </div>
          
        );
    }
}


CustomNote.propTypes = propTypes;


export default CustomNote;

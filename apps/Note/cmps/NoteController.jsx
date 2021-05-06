import { noteService } from '../services/note.service.js'

export class NoteController extends React.Component {
    state = {
        type: 'text',
        txt: 'Enter Your Text',
    }
    changeInputText = (ev) => {
        const inputType = ev.target.name;
        switch (inputType) {
            case 'text':
                this.setState({ txt: 'Enter Your Text', type: 'text' })
                break;
            case 'video':
                this.setState({ txt: 'Enter YouTube URL', type: 'video' })
                break;
            case 'photo':
                this.setState({ txt: 'Enter Photo URL', type: 'photo' })
                break;
            case 'todo':
                this.setState({ txt: 'Enter Tasks Seperated by comma', type: 'todo' })
                break;
        }
    }

    handleChange = ({ target }) => {
        const { txt } = this.state;
        const field = target.name
        const value = target.value
        console.log(target.value);
        this.setState(prevState => ({ ...prevState, [field]: [value] }))
        this.setState({ txt: target.value })
    }

    loadNotes = () => {
        noteService.query().then(notes => {
            this.setState(prevState => ({ ...prevState, notes }))
        })
        console.log('loading notes');
    }

    addNote = () => {
        const { txt } = this.state;
        const { type } = this.state;
        { type === txt && <TextNote note={txt} /> }
        noteService.addNote(txt).then(() => this.loadNotes())


        // { type === 'photo' && <PhotoNote note={txt} /> }
        // { type === 'video' && <VideoNote note={txt} /> }

        //this.setState({ txt: '' })
        //after change state of txt to '' need to update the input target.value to '' too
    }

    render() {
        const { txt } = this.state;
        const { type } = this.state;
        return (
            <div className="add-note-container flex space-evenly align-center">
                <textarea type="search" onChange={this.handleChange} placeholder={txt}></textarea>
                <button name="text" onClick={this.changeInputText}><i className="fas fa-font fa-2x"></i></button>
                <button name="video" onClick={this.changeInputText}><i className="fab fa-youtube fa-2x"></i></button>
                <button name="photo" onClick={this.changeInputText}><i className="fas fa-image fa-2x"></i></button>
                <button name="todo" onClick={this.changeInputText}><i className="fas fa-tasks fa-2x"></i></button>
                <button className="add-btn" name="add" onClick={this.addNote}><i className="fas fa-plus fa-2x"></i></button>
            </div>
        )
    }
}
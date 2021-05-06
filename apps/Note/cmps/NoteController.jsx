import { noteService } from '../services/note.service.js'

export class NoteController extends React.Component {
    state = {
        type: 'text',
        placeHolder: 'Enter Your Text',
        text: '',
    }

    changeInputText = (ev) => {
        const inputType = ev.target.name;
        switch (inputType) {
            case 'text':
                this.setState({ placeHolder: 'Enter Your Text', type: 'text' })
                break;
            case 'video':
                this.setState({ placeHolder: 'Enter YouTube URL', type: 'video' })
                break;
            case 'photo':
                this.setState({ placeHolder: 'Enter Photo URL', type: 'photo' })
                break;
            case 'todo':
                this.setState({ placeHolder: 'Enter Tasks Seperated by comma', type: 'todo' })
                break;
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ ...prevState, [field]: value }))
    }

    loadNotes = () => {
        noteService.query().then(notes => {
            this.setState(prevState => ({ ...prevState, notes }))
        })
        console.log(this.state);
    }

    addNote = () => {
        const { text } = this.state;
        const { type } = this.state;
        { type === 'text' && <TextNote note={text} /> }
    }

    render() {
        const { placeHolder } = this.state;
        return (
            <div className="add-note-container flex space-evenly align-center">
                <textarea name="text" type="search" onChange={this.handleChange} placeholder={placeHolder}></textarea>
                <button name="text" onClick={this.changeInputText}><i className="fas fa-font fa-2x"></i></button>
                <button name="video" onClick={this.changeInputText}><i className="fab fa-youtube fa-2x"></i></button>
                <button name="photo" onClick={this.changeInputText}><i className="fas fa-image fa-2x"></i></button>
                <button name="todo" onClick={this.changeInputText}><i className="fas fa-tasks fa-2x"></i></button>
                <button className="add-btn" name="add" onClick={this.addNote}><i className="fas fa-plus fa-2x"></i></button>
            </div>
        )
    }
}
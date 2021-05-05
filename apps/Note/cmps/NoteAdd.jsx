
import { noteService } from '../services/note.service.js'

export class NoteAdd extends React.Component {
    state = {
        txt: '',
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ ...prevState, [field]: [value] }))
    }


    render() {
        const { txt } = this.state;
        const { addNote } = this.props;
        return (
            <div className="note-add">
                <label>
                    <input name="txt" type="text" placeholder="Enter your text"
                        onChange={this.handleChange} />
                    <button className="btn" onClick={() => addNote(txt)}>Add</button>

                </label>
            </div>
        )
    }
}


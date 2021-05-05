import { noteService } from '../services/note.service.js'
import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'

export class NotePreview extends React.Component {
    state = {
        note: null,
        type: null,
        isPinned: false,
    }

    componentDidMount() {
        const { note } = this.props;
        this.setState({ note })
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({
            note: {
                [field]: value
            }
        }))
    }



    render() {
        const { note } = this.state;
        const { removeNote } = this.props;
        if (!note) return <h1>Loading...</h1>


        return (
            <React.Fragment>
                <article className='note-preview'>
                    {/* <NoteText note={note} key={note.id} removeNote={removeNote} /> */}
                    <React.Fragment>
                        <textarea id={note.id} value={note.txt} onChange={this.handleChange} rows="10" cols="20">
                            {note.txt}
                        </textarea>
                        <p>created at {new Date(note.createdAt).toLocaleString()}</p>
                        <button className="btn" onClick={() => removeNote(note)}>🗑️</button>
                        <button className="btn">Pin</button>
                    </React.Fragment>

                </article>
            </React.Fragment>

        )
    }
}



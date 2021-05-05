const { Link } = ReactRouterDOM
import { noteService } from './services/note.service.js'
import { storageService } from '../../services/storage-service.js'
import { NoteList } from '../Note/cmps/NoteList.jsx'
import { NoteAdd } from '../Note/cmps/NoteAdd.jsx'

const KEY = 'notes';

export class NoteApp extends React.Component {
    state = {
        notes: null,
        filterBy: {
            txt: '',
        },
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes() {
        noteService.query().then(notes => {
            this.setState(prevState => ({ ...prevState, notes }))
        })
    }

    addNote = (txt) => {
        noteService.addNote(txt).then(() => this.loadNotes())
    }

    removeNote = (note) => {
        noteService.removeNote(note.id).then(() => this.loadNotes())
    }

    render() {
        const { notes, filterBy } = this.state
        if (!notes) return <div>Loading...</div>
        return (
            <React.Fragment>
                <section className="container">
                    <NoteAdd addNote={this.addNote} />
                </section>
                <section className="container note-app">
                    <NoteList notes={notes} removeNote={this.removeNote} />
                </section>
            </React.Fragment>
        )
    }
}



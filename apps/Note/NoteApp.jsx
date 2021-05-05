const { Link } = ReactRouterDOM
import { noteService } from './services/note.service.js'
import { storageService } from '../../services/storage-service.js'
import { NoteList } from '../Note/cmps/NoteList.jsx'
import { NoteAdd } from '../Note/cmps/NoteAdd.jsx'
import { NoteFilter } from '../Note/cmps/NoteFilter.jsx'

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

    onSetFilter = (filterBy) => {
        this.setState({ filterBy: { ...this.state.filterBy, ...filterBy } }, this.loadNotes)
    }

    render() {
        const { notes, filterBy } = this.state
        if (!notes) return <div>Loading...</div>
        return (
            <React.Fragment>
                <div className="container note-add">
                    <NoteFilter onSetFilter={this.onSetFilter} />
                    <NoteAdd addNote={this.addNote} />
                </div>

                <div className="container note-container">
                    <NoteList notes={notes} removeNote={this.removeNote} />
                </div>

            </React.Fragment>
        )
    }
}



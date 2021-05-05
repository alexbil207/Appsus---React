const { Link } = ReactRouterDOM
import { noteService } from './services/note.service.js'
import { NoteController } from './cmps/NoteController.jsx'

const KEY = 'notes';

export class NoteApp extends React.Component {
    state = {
        notes: null,
        filterBy: null,
    }
    componentDidMount() {
        this.loadNotes()

    }
    loadNotes() {
        noteService.query().then(notes => {
            this.setState(() => ({ notes }))
        })
    }
    addNote = (txt) => {
        noteService.addNote(txt).then(() => this.loadNotes())
    }
    addImgNote = (url) => {
        noteService.addNoteImg(url).then(() => this.loadNotes())
    }
    removeNote = (note) => {
        noteService.removeNote(note.id).then(() => this.loadNotes())
    }


    render() {
        const { notes } = this.state;
        if (!notes) return <div>Loading...</div>
        return (
            <NoteController />
        )
    }
}



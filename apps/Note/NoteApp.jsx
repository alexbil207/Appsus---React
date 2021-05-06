import { noteService } from './services/note.service.js'
import { NoteController } from './cmps/NoteController.jsx'
import { NoteFilter } from './cmps/NoteFilter.jsx'
import { NoteList } from './cmps/NoteList.jsx'


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
            <React.Fragment>
                <section className="controller-section">
                    <NoteController />
                    <NoteFilter />
                </section>
                <NoteList notes={notes} removeNote={this.removeNote} />
            </React.Fragment>
        )
    }
}



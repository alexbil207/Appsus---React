import { noteService } from './services/note.service.js'
import { NoteController } from './cmps/NoteController.jsx'
import { NoteFilter } from './cmps/NoteFilter.jsx'
import { NoteList } from './cmps/NoteList.jsx'
import { EditNote } from './cmps/EditNote.jsx'
// import { eventBusService } from './cmps/NoteList.jsx'
import { LoadingCmps } from '../../cmps/LoadingCmps.jsx'



export class NoteApp extends React.Component {
    state = {
        notes: null,
        filterBy: null,
        isEditClicked: false,
    }
    componentDidMount() {
        this.loadNotes()

    }
    loadNotes() {
        noteService.query().then(notes => {
            this.setState(() => ({ notes }))
        })
    }
    addNote = (noteInfo) => {
        noteService.addNote(noteInfo).then(() => this.loadNotes())
    }

    removeNote = (note) => {
        noteService.removeNote(note.id).then(() => this.loadNotes())
    }

    noteUpdate(updateInfo) {
        noteService.noteUpdate(updateInfo).then(() => this.loadNotes())
    }


    render() {
        const { notes, isEditClicked } = this.state;
        if (!notes) return <LoadingCmps />
        return (
            <React.Fragment>
                <section className="controller-section">
                    <NoteController addNote={this.addNote} />
                    <NoteFilter />
                </section>
                <NoteList notes={notes} removeNote={this.removeNote} noteUpdate={this.noteUpdate} />
            </React.Fragment>
        )
    }
}



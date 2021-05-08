import { noteService } from './services/note.service.js'
import { NoteController } from './cmps/NoteController.jsx'
import { NoteFilter } from './cmps/NoteFilter.jsx'
import { NoteList } from './cmps/NoteList.jsx'
import { LoadingCmps } from '../../cmps/LoadingCmps.jsx'


export class NoteApp extends React.Component {
    state = {
        notes: null,
        filterBy: {
            type: 'all',
        },
    }
    componentDidMount() {
        this.loadNotes()
    }
    loadNotes() {
        noteService.query(this.state.filterBy).then(notes => {
            this.setState(() => ({ notes }))
        })
    }
    addNote = (noteInfo) => {
        noteService.addNote(noteInfo).then(() => this.loadNotes())
    }

    removeNote = (note) => {
        noteService.removeNote(note.id).then(() => this.loadNotes())
        showUserMsg('Note removed!', 'error')
    }

    onFilterChange = (filterBy) => {
        this.setState({ filterBy }, () => this.loadNotes())
    }


    render() {
        const { notes } = this.state;
        if (!notes) return (
            <React.Fragment>
                < NoteFilter onFilterChange={this.onFilterChange} />
                <LoadingCmps />
            </React.Fragment>
        )
        return (
            <React.Fragment>
                <section className="controller-section flex">
                    <NoteFilter onFilterChange={this.onFilterChange} />
                    <NoteController addNote={this.addNote} />
                </section>
                <NoteList notes={notes} removeNote={this.removeNote} noteUpdate={this.noteUpdate} />
            </React.Fragment >
        )
    }
}



const { Link } = ReactRouterDOM
import { noteService } from './services/note.service.js'
import { NoteList } from '../Note/cmps/NoteList.jsx'
import { NoteAdd } from '../Note/cmps/NoteAdd.jsx'

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
                this.setState(prevState=>({...prevState, notes}))
            })
    }

    removeNote = (note) => {
        noteService.removeNote(note.id).then(() => this.loadNotes())
        console.log('removing');
    }
    
    render() {
        const { notes, filterBy } = this.state
        if (!notes) return <div>Loading...</div>
        return (
            <React.Fragment>
                <section className="container">
                <NoteAdd />
                </section>
            <section className="container note-app">

                <NoteList notes={notes} removeNote={this.removeNote} />
            </section>
            </React.Fragment>
        )
    }
}



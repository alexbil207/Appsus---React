const { Link } = ReactRouterDOM
import { noteService } from './services/note.service.js'
import { NoteList } from '../Note/cmps/NoteList.jsx'
import { NotePreview } from '../Note/cmps/NotePreview.jsx'

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
        noteService.query(this.state.filterBy)
            .then((notes) => {
                console.log(notes);
                this.setState({ notes })
            })
    }



    render() {
        const { notes, filterBy } = this.state
        if (!notes) return <div>Loading...</div>
        return (
            <section className="container note-app">
                <h1>Hello Notes</h1>
                {/* <NotePreview notes={notes}/> */}
                <NoteList notes={notes} />
            </section>
        )
    }
}
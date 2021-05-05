import { TextNote } from './TextNote.jsx'
import { PhotoNote } from './PhotoNote.jsx'
import { VideoNote } from './VideoNote.jsx'


export class NotePreview extends React.Component {
    state = {
        note: null,
        type: null,
        isPinned: false,
    }

    componentDidMount() {
        const { note } = this.props;
        this.setState({ note, type: note.type })
    }




    render() {
        const { note, type } = this.state;
        const { removeNote } = this.props;
        console.log('type', type);
        if (!note) return <h1>Loading...</h1>
        console.log(note);

        return (

            <article id={note.id} className='note-preview'>
                {type === 'text' && <TextNote note={note} />}
                {type === 'photo' && <PhotoNote note={note} />}
                {type === 'video' && <VideoNote note={note} />}
                <div className="preview-btns flex space-between">
                    <button onClick={() => removeNote(note)}><i className="fas fa-trash-alt fa-2x"></i></button>
                    <button ><i className="fas fa-thumbtack fa-2x"></i></button>
                </div>
            </article>
        )
    }
}



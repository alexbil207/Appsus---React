import { TextNote } from './TextNote.jsx'
import { PhotoNote } from './PhotoNote.jsx'
import { VideoNote } from './VideoNote.jsx'
import { TodoNote } from './TodoNote.jsx';


export class NotePreview extends React.Component {
    state = {
        note: null,
        type: null,
        isPinned: false,
        color: null,
        isColorShown: false,
    }

    componentDidMount() {
        const { note } = this.props;
        this.setState({ note, type: note.type })
    }

    handleChange = ({ target }) => {
        const { note } = this.props;
        const value = target.name
        this.setState(prevState => ({ ...prevState, color: value }), () => console.log(this.state)
        )
        note.color = value;
    }


    render() {
        const { note, type, color, isColorShown } = this.state;
        const { removeNote, pinNote } = this.props;
        if (!note) return <h1>Loading...</h1>
        return (
            <article id={note.id} className={`note-preview ${note.color} ${color}`}>
                {type === 'text' && <TextNote note={note} />}
                {type === 'photo' && <PhotoNote note={note} />}
                {type === 'video' && <VideoNote note={note} />}
                {type === 'todo' && <TodoNote note={note} />}
                <div className="preview-btns flex space-between">
                    <button onClick={() => removeNote(note)}><i className="fas fa-trash-alt fa-2x"></i></button>
                    <button onClick={() => this.setState({ isColorShown: !isColorShown })} ><i className="fas fa-palette fa-2x"></i></button>
                    <button onClick={() => this.setState({ isEditClicked: !isEditClicked })}>
                        <i className="fas fa-edit fa-2x"></i></button>
                    <button ><i className="fas fa-thumbtack fa-2x"></i></button>
                </div>
                <div className={`colors flex gap ${isColorShown ? '' : 'hidden'}`}>
                    <button onClick={this.handleChange} className="pink" name="pink"></button>
                    <button onClick={this.handleChange} className="greenish" name="greenish"></button>
                    <button onClick={this.handleChange} className="yellow" name="yellow"></button>
                    <button onClick={this.handleChange} className="cyan" name="cyan"></button>
                    <button onClick={this.handleChange} className="green-pastel" name="green-pastel"></button>
                </div>
            </article>
        )
    }
}



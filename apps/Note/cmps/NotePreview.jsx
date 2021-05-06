import { TextNote } from './TextNote.jsx'
import { PhotoNote } from './PhotoNote.jsx'
import { VideoNote } from './VideoNote.jsx'


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
        const value = target.name
        this.setState(prevState => ({ ...prevState, color: value }), () => console.log(this.state)
        )
    }

    render() {
        const { note, type, color, isColorShown } = this.state;
        const { removeNote } = this.props;
        if (!note) return <h1>Loading...</h1>

        return (
            <article id={note.id} className={`note-preview ${color}`}>
                {type === 'text' && <TextNote note={note} />}
                {type === 'photo' && <PhotoNote note={note} />}
                {type === 'video' && <VideoNote note={note} />}
                <div className="preview-btns flex space-between">
                    <button onClick={() => removeNote(note)}><i className="fas fa-trash-alt fa-2x"></i></button>
                    <button onClick={() => this.setState({ isColorShown: !isColorShown })} ><i className="fas fa-palette fa-2x"></i></button>
                    <button ><i className="fas fa-edit fa-2x"></i></button>
                    <button ><i className="fas fa-thumbtack fa-2x"></i></button>
                </div>
                <div className={`colors flex gap ${isColorShown ? '' : 'hidden'}`}>
                    <button onClick={this.handleChange} className="red" name="red"></button>
                    <button onClick={this.handleChange} className="blue" name="blue"></button>
                    <button onClick={this.handleChange} className="orange" name="orange"></button>
                    <button onClick={this.handleChange} className="yellow" name="yellow"></button>
                    <button onClick={this.handleChange} className="purple" name="purple"></button>
                </div>
            </article>
        )
    }
}



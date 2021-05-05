export class NoteController extends React.Component {
    state = {
        type: 'text',
        txt: 'Enter Your Text',
    }
    changeInputText = (ev) => {
        console.log(ev.target.name)
        const inputType = ev.target.name;
        switch (inputType) {
            case 'text':
                this.setState({ txt: 'Enter Your Text', type: 'text' })
                break;
            case 'video':
                this.setState({ txt: 'Enter YouTube URL', type: 'video' })
                break;
            case 'photo':
                this.setState({ txt: 'Enter Photo URL', type: 'photo' })
                break;
            case 'todo':
                this.setState({ txt: 'Enter Tasks Seperated by comma', type: 'todo' })
                break;
        }
    }


    render() {
        const { txt } = this.state;
        return (
            <div className="add-note-container flex space-evenly align-center">
                <textarea type="search" placeholder={txt}></textarea>
                <button name="text" onClick={this.changeInputText}><i className="fas fa-font fa-2x"></i></button>
                <button name="video" onClick={this.changeInputText}><i className="fab fa-youtube fa-2x"></i></button>
                <button name="photo" onClick={this.changeInputText}><i className="fas fa-image fa-2x"></i></button>
                <button name="todo" onClick={this.changeInputText}><i className="fas fa-tasks fa-2x"></i></button>
                <button><i className="fas fa-plus fa-2x"></i></button>
            </div>
        )
    }
}
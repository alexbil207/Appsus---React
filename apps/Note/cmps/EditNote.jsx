import { NoteController } from '../cmps/NoteController.jsx'

export class EditNote extends React.Component {

    state = {
        note: null,
        isEditClicked: true,
    }

    closeEdit = () => {
        console.log('closing modal');
        this.setState({ isEditClicked: !isEditClicked })
        //How do I set the state in Note Preview to close the modal?
    }


    render() {
        const { note, isEditClicked } = this.props;
        console.log(note); // gets the note
        console.log(isEditClicked);
        return (
            <div className="edit-note-modal">
                <button onClick={this.closeEdit} className="close-btn btn">X</button>
                <NoteController />
            </div>
        )
    }

}
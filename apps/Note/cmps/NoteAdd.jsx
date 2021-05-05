


export class NoteAdd extends React.Component {
    state = {
        note: null,
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({
            note: {
                [field]: value
            }
        }))
    }

    render() {
        return (
            <div className="note-add">
                <h1>here we add a note</h1>
                <label>
                    <input type="text" onChange={this.handleChange} />
                </label>
            </div>
        )
    }

}


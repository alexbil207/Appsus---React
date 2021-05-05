

export class NoteText extends React.Component {
    state = {
        note: null,
        type: null,
        isPinned: false,
    }

    componentDidMount() {
        const { note } = this.props;
        this.setState({ note })
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
            <h1>hi</h1>
        )
    }
}


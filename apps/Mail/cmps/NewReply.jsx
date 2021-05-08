const { withRouter } = ReactRouterDOM

export class _NewReply extends React.Component {
    state = {
        mailId: '',
        body: null,
        url: null,
    }
    componentDidMount() {
        const mailId = this.props.match.params.mailId;
        this.setState(prevState => ({ ...prevState, mailId }))
    }

    handleChanges = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState(prevState => ({ ...prevState, [field]: value }))
    }
    onSubmit = () => {
        const { addReply } = this.props;
        const { body } = this.state;
        if (!body) return
        addReply(this.state)
    }
    render() {
        const { closeModal } = this.props;
        return (
            <React.Fragment>
                <label htmlFor="text">Image URL: <input name="url" id="url" type="url" onChange={this.handleChanges}></input></label>
                <textarea name="body" placeholder="Body" onChange={this.handleChanges}></textarea>
                <div className="btns flex" >
                    <button className="close-btn" onClick={() => { closeModal() }}>Close</button>
                    <button className="submit-btn" onClick={this.onSubmit}>Submit</button>
                </div>
            </React.Fragment>

        )
    }
}

export const NewReply = withRouter(_NewReply)

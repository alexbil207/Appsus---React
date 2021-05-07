export class NewMail extends React.Component {
    state = {
        from: null,
        to: null,
        body: null,
        subject: null,
        isSend: true,
        isRead: true,
    }
    handleChanges = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState(prevState => ({ ...prevState, [field]: value }))
    }
    onSubmit = (ev) => {
        ev.preventDefault();
    }
    onClick = () => {
        const { addMail, newMail } = this.props;
        newMail();
        addMail(this.state);
    }




    render() {
        const { newMail } = this.props;
        return (
            <form className="new-mail-container container flex column">
                <label htmlFor="to">To: <input name="to" id="to" type="email" onChange={this.handleChanges} required></input></label>
                <label htmlFor="from">From: <input name="from" id="from" type="email" onChange={this.handleChanges} required></input></label>
                <label htmlFor="subject">Subject: <input name="subject" id="subject" type="text" onChange={this.handleChanges} required></input></label>
                <textarea name="body" placeholder="Body" onChange={this.handleChanges} required></textarea>
                <div className="btns flex" >
                    <button onClick={() => newMail()}>Close</button>
                    <input type="submit" onSubmit={this.onSubmit} onClick={this.onClick} />
                    {/* <button onClick={this.onSubmit}>Submit</button> */}
                </div>
            </form>

        )
    }
}
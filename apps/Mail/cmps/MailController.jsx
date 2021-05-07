
export class MailController extends React.Component {
    state = {
        text: null,
        category: null,
    }

    handleChanges = (ev) => {
        const { onFilterChange } = this.props;
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState({ [field]: value }, () => onFilterChange(this.state))
    }


    render() {
        const { newMail } = this.props;
        return (
            <div className="controller-container container flex space-between align-center">
                <button onClick={() => newMail()}>➕</button>
                <div className="mail-filter">
                    <label htmlFor="text-input">🔍</label>
                    <input name="text" type="text" id="text-input" placeholder="Search" onChange={this.handleChanges} />
                    <select name="category" onChange={this.handleChanges}>
                        <option value="inbox">Inbox</option>
                        <option value="isSend">Sent</option>
                        <option value="isFavorite">Favorite</option>
                        <option value="isRead">Unread</option>
                    </select>
                </div>

            </div>
        )
    }
}
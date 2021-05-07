const { Link } = ReactRouterDOM;
import { mailService } from '../services/mail.service.js'

export class MailPreview extends React.Component {
    state = {
        mail: null,
        isFavorite: false,
        isRead: false,
    }

    componentDidMount() {
        const { mail } = this.props;
        this.setState({
            mail,
            isFavorite: mail.isFavorite,
            isRead: mail.isRead,
        })
    }

    handleChanges = (ev) => {
        const field = ev.target.name;
        const { mail } = this.state;
        this.setState(prevState => ({ ...prevState, [field]: !this.state[field] }), () => {
            mailService.mailUpdate({
                mailId: mail.id,
                field
            });
        })
    }

    handleMailAddress = (mail) => {
        const idx = mail.indexOf('@');
        return mail.slice(0, idx);
    }

    render() {
        const { mail, isFavorite, isRead } = this.state;
        const { removeMail } = this.props;
        if (!mail) return <h1>Loading!</h1>
        return (
            <div className={`mail-card flex space-between align-center ${isRead ? '' : 'unread'}`} key={mail.id} >
                <label title="Add/Remove to Favorites"> <img name="isFavorite" src={`./apps/Mail/assets/icons/${isFavorite ? "star_gold.svg" : "star.svg"}`}
                    onClick={this.handleChanges} /></label>
                <Link className="flex space-between" to={`/Mail/${mail.id}`}>
                    <h4>From: {this.handleMailAddress(mail.from)}</h4>
                    <p>{mail.subject}</p>
                    <h4>{new Date(mail.sentAt).toLocaleString()}</h4>
                </Link>
                <div className="mail-btns">
                    <label title="Delete mail"> <button onClick={() => removeMail(mail)}>🗑️</button></label>
                    <label title="Mark as Read/Unread"><button name="isRead" onClick={this.handleChanges}>{isRead ? '📩' : '✉️'}</button></label>
                </div>
            </div>
        )
    }
}

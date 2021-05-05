const { Link } = ReactRouterDOM;

import { mailService } from '../services/mail.service.js'

export class MailPreview extends React.Component {
    state = {
        mail: null,
        isFavorite: false,
        isRead: false,
        isRender: false,

    }
    componentDidMount() {
        const { mail, isFavorite } = this.props;
        this.setState({ mail, isFavorite })
    }
    addToFavorite = () => {
        const { mail, isFavorite } = this.state;
        this.setState(prevState => ({ ...prevState, isFavorite: !isFavorite }), () => {
            mailService.favoriteUpdate(mail.id, isFavorite);
        })
    }


    render() {
        const { mail, isFavorite } = this.state;
        const { removeMail } = this.props;
        if (!mail) return <h1>Loading!</h1>
        return (
            <div className="mail-card flex space-between align-center" key={mail.id} >
                <img src={`./apps/Mail/assets/icons/${isFavorite ? "star_gold.svg" : "star.svg"}`} onClick={this.addToFavorite} />
                <Link className="flex space-between" to={`/Mail/:${mail.id}`}>
                    <h4>From:{mail.from}</h4>
                    <p>{mail.subject.length > 5 ? mail.subject.slice(0, 5) : mail.subject}...</p>
                    <h4>{new Date(mail.sentAt).toLocaleString()}</h4>
                </Link>
                <div className="mail-btns">
                    <button onClick={() => removeMail(mail)}>🗑️</button>
                    <button >✉️</button>
                </div>
            </div>
        )
    }
}
import { mailService } from '../services/mail.service.js'


export class MailDetails extends React.Component {
    state = {
        mail: null,
        isRead: null,
    }
    componentDidMount() {
        const id = this.props.match.params.mailId;
        mailService.getMailById(id).then(mail => {
            this.setState({ mail, isRead: mail.isRead }, () => this.updateMail())
        })
    }
    updateMail = () => {
        const { mail, isRead } = this.state;
        if (isRead) return
        mailService.mailUpdate({
            mailId: mail.id,
            field: 'isRead',
        });
    }

    render() {
        const { mail } = this.state;
        if (!mail) return <h1>Loading..</h1>
        return <section className="mail-details-container container flex column">
            <p className="mail-data"><b>From: </b>{mail.from}</p>
            <p className="mail-data"><b>To: </b>{mail.to}</p>
            <p className="mail-data"><b>CC: </b></p>
            <p className="mail-data"><b>Subject: </b>{mail.subject}</p>
            <p className="mail-body">{mail.body}</p>
            <div className="nav-btns">
                <button onClick={() => this.props.history.push('/Mail')}>Back</button>

            </div>
        </section>
    }
}
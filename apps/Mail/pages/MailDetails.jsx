import { mailService } from '../services/mail.service.js'
import { ReplyCmp } from '../cmps/ReplyCmp.jsx';

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
        const { replies } = mail;
        return <section key={mail.id} className="mail-details-container container flex column">
            <p className="mail-data"><b>From: </b>{mail.from}</p>
            <p className="mail-data"><b>To: </b>{mail.to}</p>
            <p className="mail-data"><b>CC: </b></p>
            <p className="mail-data"><b>Date: </b>{new Date(mail.sentAt).toLocaleString()}</p>
            <p className="mail-data"><b>Subject: </b>{mail.subject}</p>
            <div className="mail-body flex column">
                {replies && replies.map(reply => <ReplyCmp reply={reply} />)}
                <p>{mail.body}</p>
            </div>
            <div className="nav-btns">
                <button onClick={() => this.props.history.push('/Mail')}>Back</button>

            </div>
        </section>
    }
}
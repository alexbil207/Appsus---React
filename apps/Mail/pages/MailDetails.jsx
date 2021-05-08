import { mailService } from '../services/mail.service.js'
import { ReplyCmp } from '../cmps/ReplyCmp.jsx';
import { LoadingCmps } from '../../../cmps/LoadingCmps.jsx';
import { NewReply } from '../cmps/NewReply.jsx';

export class MailDetails extends React.Component {
    state = {
        mail: null,
        isRead: null,
        isReply: false,

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

    addReply = (replyInfo) => {
        mailService.createReplays(replyInfo).then(() => this.props.history.push('/Mail'))
    }

    closeModal = () => {
        const { isReply } = this.state;
        this.setState({ isReply: !isReply })
    }


    render() {
        const { mail, isReply } = this.state;
        if (!mail) return <LoadingCmps />
        const { replies } = mail;
        return <section key={mail.id} className="mail-details-container container flex column">
            <p className="mail-data"><b>From: </b>{mail.from}</p>
            <p className="mail-data"><b>To: </b>{mail.to}</p>
            <p className="mail-data"><b>CC: </b></p>
            <p className="mail-data"><b>Date: </b>{new Date(mail.sentAt).toLocaleString('he-IL')}</p>
            <p className="mail-data"><b>Subject: </b>{mail.subject}</p>
            <div className="mail-body flex column">
                {replies && replies.map(reply => <ReplyCmp reply={reply} />)}
                <p>{mail.body}</p>
                {mail.url && <img src={mail.url} />}
            </div>
            <div className="nav-btns flex space-between">
                <button className="back-btn" onClick={() => this.props.history.push('/Mail')}>Back</button>
                <button className="reply-btn" onClick={this.closeModal}>Reply</button>
            </div>
            <div className={`new-mail-container flex column ${isReply ? '' : 'hidden'}`}>
                <NewReply addReply={this.addReply} closeModal={this.closeModal} />
            </div>
        </section>
    }
}

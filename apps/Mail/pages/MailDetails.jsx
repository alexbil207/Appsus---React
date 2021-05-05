import { mailService } from '../services/mail.service.js'


export class MailDetails extends React.Component {
    state = {
        mail: null,
    }
    componentDidMount() {
        const id = this.props.match.params.mailId;
        mailService.getMailById(id).then(mail => {
            this.setState({ mail })
        })
    }

    render() {
        const { mail } = this.state;
        if (!mail) return <h1>Loading..</h1>
        return <section className="mail-details-container container flex column">
            <p className="mail-data"><b>From: </b>{mail.from}</p>
            <p className="mail-data"><b>To: </b>{mail.to}</p>
            <p className="mail-data"><b>CC: </b></p>
            <p className="mail-data"><b>Subject: </b>{mail.subject}</p>
            <pre className="mail-body">{mail.body}</pre>


        </section>
    }
}
import { mailService } from './services/mail.service.js'
import { MailController } from './cmps/MailController.jsx'
import { MailList } from './cmps/MailList.jsx'

export class MailApp extends React.Component {
    state = {
        mails: null,
        filterBy: null,
    }
    componentDidMount() {
        this.loadMails();
    }

    loadMails() {
        mailService.query().then(res => {
            this.setState({ mails: res })
        })
    }
    removeMail = (mail) => {
        mailService.removeMail(mail.id).then(() => this.loadMails())
    }

    render() {
        const { mails } = this.state;
        if (!mails) return (
            <React.Fragment>
                <MailController />
                <h1>Loading......</h1>
            </React.Fragment>
        )
        return (
            <React.Fragment>
                <MailController />
                <MailList mails={mails} removeMail={this.removeMail} />

            </React.Fragment>
        )

    }
}
















// // Simple React Component
// export function MailApp() {
//     return <section className="mail-app">
//         <MailFilter />

//     </section>
// }




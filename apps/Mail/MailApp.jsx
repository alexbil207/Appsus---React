import { mailService } from './services/mail.service.js'
import { MailController } from './cmps/MailController.jsx'
import { MailList } from './cmps/MailList.jsx'
import { NewMail } from './cmps/NewMail.jsx'
import { LoadingCmps } from '../../cmps/LoadingCmps.jsx'

export class MailApp extends React.Component {
    state = {
        mails: null,
        filterBy: { category: 'inbox' },
        isNewClicked: false,
    }
    componentDidMount() {
        this.loadMails();
    }

    loadMails() {
        const { filterBy } = this.state;
        mailService.query(filterBy).then(res => this.setState({ mails: res }))
    }
    addMail = (mailInfo) => {
        mailService.createMails(mailInfo).then(() => this.loadMails())
        showUserMsg('Mail sent', 'success')
    }
    removeMail = (mail) => {
        mailService.removeMail(mail.id).then(() => this.loadMails())
        showUserMsg('Mail removed!', 'error')
    }

    newMailClick = () => {
        const { isNewClicked } = this.state;
        this.setState({ isNewClicked: !isNewClicked })
    }
    onFilterChange = (filterBy) => {
        this.setState({ filterBy }, () => this.loadMails())
    }

    render() {
        const { mails, isNewClicked } = this.state;
        if (!mails) return (
            <React.Fragment>
                <MailController onFilterChange={this.onFilterChange} />
                <LoadingCmps />
            </React.Fragment>
        )
        return (
            <React.Fragment>
                <MailController newMail={this.newMailClick} onFilterChange={this.onFilterChange} />
                <MailList mails={mails} removeMail={this.removeMail} newMail={this.newMailClick} />
                {isNewClicked && <NewMail newMail={this.newMailClick} addMail={this.addMail} />}
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




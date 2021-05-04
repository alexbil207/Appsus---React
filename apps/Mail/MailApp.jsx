import { mailService } from './services/mail.service.js'
import { MailFilter } from './cmps/MailFilter.jsx'
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
    render() {
        const { mails } = this.state;
        if (!mails) return (
            <React.Fragment>
                <MailFilter />
                <h1>Loading......</h1>
            </React.Fragment>
        )
        return (
            <React.Fragment>
                <MailFilter />
                <MailList mails={mails} />

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




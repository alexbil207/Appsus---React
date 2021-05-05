import { MailPreview } from './MailPreview.jsx'

export function MailList({ mails, removeMail }) {
    return (
        <div className="mail-container container">
            {mails.map(mail => { return <MailPreview mail={mail} key={mail.id} removeMail={removeMail} /> })}
        </div>
    )
}
import { MailPreview } from './MailPreview.jsx'

export function MailList({ mails }) {
    return (
        <div className="mail-container container">
            {mails.map(mail => { return <MailPreview mail={mail} key={mail.id} /> })}
        </div>
    )
}
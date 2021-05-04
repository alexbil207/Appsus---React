
export function MailPreview({ mail }) {
    console.log(mail)

    return (
        <div className="mail-card flex space-between align-center" key={mail.id} >
            <h4>From:{mail.from}</h4>
            <p>Subject:{mail.subject}</p>
            <h4>Date:{new Date(mail.sentAt).toLocaleString()}</h4>
            <div className="mail-btns">
                <button>🗑️</button>
                <button>✉️</button>
            </div>

        </div>
    )
}
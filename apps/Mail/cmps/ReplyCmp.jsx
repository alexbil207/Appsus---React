export function ReplyCmp({ reply }) {
    return (
        <div key={reply.id} className="reply-card" >
            <p className="mail-data"><b>From: </b>{reply.from}</p>
            <p className="mail-data"><b>Date: </b>{new Date(reply.sentAt).toLocaleString('he-IL')}</p>
            <p className="mail-data">{reply.body}</p>
            <hr></hr>
        </div>
    )

}
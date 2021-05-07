import { TaskPreview } from './TaskPreview.jsx'

export function TodoNote({ note }) {
    return (
        <React.Fragment>
            <p className="note-header"><i className="fas fa-tasks fa-2x"></i></p>
            {note.tasks.map(task => <TaskPreview key={task} task={task} />)}
        </React.Fragment>
    )
}
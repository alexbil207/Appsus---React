import { NotePreview } from './NotePreview.jsx'

export function NoteList({ notes , removeNote }) {
  return (
    <div className="note-list">
      { notes.map(note => <NotePreview note={note} key={note.id} removeNote={removeNote} />)}
    </div>
  )
}
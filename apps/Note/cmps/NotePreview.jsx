
export function NotePreview({ note }) {
    // if (note.type === "NoteText")
    //     return (
    //         console.log('text')
    // )


    return (


        <article className='note-preview'>
            <p> note id -{note.id}</p>
            
            <textarea id={note.id} value={note.info.txt} rows="10" cols="20">
            {note.info.txt}
            </textarea>

            <p>created at {note.createdAt}</p>
            <button>Delete</button>
            <button>Pin</button>
        </article>


        //   <article className='note-preview'>
        //     <img src={'https://robohash.org/'} alt="" />
        //     <p>Text - {note.info.txt}</p>
        //   </article>
    )
}
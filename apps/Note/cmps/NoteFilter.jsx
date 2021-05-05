export class NoteFilter extends React.Component {
    state = {
        type: null,
    }
    render() {
        return (
            <div className="search-type flex justify-center align-center">
                <label htmlFor="search">🔍</label>
                <input name="text" type="text" id="text-input" placeholder="Search" />
                <select name="category">
                    <option value="all">All</option>
                    <option value="text">Text</option>
                    <option value="video">Video</option>
                    <option value="photo">Photo</option>
                    <option value="Todo">ToDo</option>
                </select>
            </div>
        )
    }
}
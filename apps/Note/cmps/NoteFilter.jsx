export class NoteFilter extends React.Component {
    state = {
        type: null,
    }

    handleChange = ({ target }) => {
        const { onFilterChange } = this.props;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value }, () => onFilterChange(this.state));
    }

    render() {
        return (
            <div className="search-type flex justify-center align-center">
                <select name="type" onChange={this.handleChange} >
                    <option value="all">All</option>
                    <option value="text">Text</option>
                    <option value="video">Video</option>
                    <option value="photo">Photo</option>
                    <option value="todo">To-Do</option>
                </select>
            </div>
        )
    }
}
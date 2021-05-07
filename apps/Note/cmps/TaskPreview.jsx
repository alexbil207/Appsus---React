
export class TaskPreview extends React.Component {
    state = {
        isDone: false,
    }
    render() {
        const { task } = this.props;
        const { isDone } = this.state;

        return <li className={isDone ? 'done' : ''} onClick={() => this.setState({ isDone: !isDone })}>{task}</li>
    }
}
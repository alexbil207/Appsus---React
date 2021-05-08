import { eventBusService } from '../services/event-bus-service.js'


export class UserMsg extends React.Component {

  removeEvent;

  state = {
    msg: null
  }

  componentDidMount() {
    this.removeEvent = eventBusService.on('show-user-msg', (msg) => {
      this.setState({ msg })
    })
  }

  componentWillUnmount() {
    this.removeEvent()
  }

  render() {
    if (!this.state.msg) return <span></span>
    const msgClass = this.state.msg.type || ''
    return (
      <section className={'user-msg ' + msgClass}>
        {this.state.msg.txt}
        <button onClick={() => {
          this.setState({ msg: null })
        }}>x</button>
      </section>
    )
  }
}


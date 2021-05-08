import { eventBusService } from '../services/event-bus-service.js'


export class UserMsg extends React.Component {

  removeEvent;

  state = {
    msg: null,
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
    setTimeout(() => {
      this.setState({ msg: null })
    }, 1500);
    const msgClass = this.state.msg.type || ''
    return (
      <section className={'user-msg ' + msgClass}>
        {this.state.msg.txt}
      </section>
    )
  }
}


export class NoteFilter extends React.Component {

    state = {
      filterBy: {
        txt: '',
      }
    }
  
    handleChange = (ev) => {
      const field = ev.target.name
      const value = ev.target.value 
    //   console.log(ev.target.value);
      this.setState(({ filterBy }) => ({
        filterBy: { ...filterBy, [field]: value }
      }), () => {
        this.props.onSetFilter(this.state.filterBy)
      })
    }
  
    onFilter = (ev) => {
      ev.preventDefault()
      this.props.onSetFilter(this.state.filterBy)
    }
  
    render() {
      const { txt } = this.state.filterBy
      return (
  
        <form className="note-filter" onSubmit={this.onFilter}>
          <label htmlFor="byText"></label>
          <input placeholder="...Filter notes" type="text" id="byText"  name="txt" value={txt} onChange={this.handleChange} />
          <button className="btn">Search</button>
        </form>
      )
    }
  }
class Visibility extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toggle: true
    }
    this.toggleDetails = this.toggleDetails.bind(this)
  }

  toggleDetails () {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      }
    })
  }

  render () {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleDetails}>
          {this.state.toggle ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.toggle ? <p>Toggle Block</p> : <p></p>}
      </div>
    )
  }
}

const appRoot = document.querySelector('#app')
ReactDOM.render(<Visibility />, appRoot)

console.log('app.js is running')

class IndecisionApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      options: this.props.options
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
  }
  handleAddOption (option) {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    } else {
      this.setState(prevState => ({
        options: prevState.options.concat([option])
      }))
    }
  }

  handlePick () {
    const randomNum = Math.round(Math.random() * this.state.options.length)
    alert(this.state.options[randomNum])
  }

  handleDeleteOptions () {
    this.setState(() => ({
      options: []
    }))
  }

  componentDidMount () {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
        console.log('fetching data')
      }
    } catch (e) {
      // Do nothing
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
      console.log('saving data')
    }
  }

  componentWillUnmount () {
    //console.log('switching pages')
  }

  handleDeleteOption (optionToRemove) {
    this.setState(prevState => {
      return {
        options: prevState.options.filter(option => optionToRemove !== option)
      }
    })
  }

  render () {
    return (
      <div>
        <Header />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          handleDeleteOptions={this.handleDeleteOptions}
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = props => {
  return (
    <div id='header'>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision',
  subtitle: 'Let the computer decide'
}

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should I do?
      </button>
    </div>
  )
}

const Options = props => {
  return (
    <div>
      These are your options
      <ol>
        {props.options.map(option => {
          return (
            <Option
              key={option}
              optionText={option}
              handleDeleteOption={props.handleDeleteOption}
            />
          )
        })}
      </ol>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
    </div>
  )
}

const Option = props => {
  return (
    <li>
      {props.optionText}
      <button
        onClick={e => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        Remove
      </button>
    </li>
  )
}

class AddOption extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: undefined
    }
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleAddOption (e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    this.setState(() => ({
      error
    }))
    if (!error) {
      e.target.elements.option.value = ''
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
        <div>{this.state.error && <p>{this.state.error}</p>}</div>
      </div>
    )
  }
}

const User = props => {
  return (
    <div>
      <p>Name: {props.name} </p>
      <p>Age: {props.age}</p>
    </div>
  )
}

const appTarget = document.querySelector('#app')
ReactDOM.render(
  <IndecisionApp options={['Devils Den', 'Backyard BBQ']} />,
  appTarget
)

const app = {
  title: 'Indecision App',
  subtitle: 'Your life in hands of a computer',
  options: []
}

function getOptions (options) {
  var element = <ol></ol>
}

const onRemoveAll = () => {
  app.options = []
  render()
}

const onFormSubmit = e => {
  e.preventDefault()

  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    render()
  }
}

const onMakeDecision = () => {
  const randomNum = Math.round(Math.random() * app.options.length)
  const option = app.options[randomNum]
  alert(option)
}

const numbers = [55, 101, 1000]

const render = () => {
  const appRoot = document.querySelector('#app')
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are some options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map(option => {
          return <li key={option}>Option: {option}</li>
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        Make Decision
      </button>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

render()

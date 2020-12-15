import React from 'react'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
  state = {
    options: ['Devils Den', 'Backyard BBQ'],
    selectedOption: undefined,
    selectNow: false
  }

  handleClearSelectedOption = () => {
    console.log('handling clear')
    this.setState(() => ({ selectedOption: undefined, selectNow: false }))
  }

  handleAddOption = option => {
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

  handlePick = () => {
    const randomNum = Math.round(
      Math.random() * (this.state.options.length - 1)
    )
    console.log(randomNum)
    const chosenOption = this.state.options[randomNum]
    console.log('chosen option: ' + chosenOption)
    this.setState(() => {
      return {
        selectedOption: this.state.options[randomNum],
        selectNow: true
      }
    })
  }

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }))
  }

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
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

  render () {
    return (
      <div>
        <Header />
        <div className='container'>
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <div className='widget'>
            <Options
              handleDeleteOptions={this.handleDeleteOptions}
              options={this.state.options}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          selectNow={this.state.selectNow}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: ['Devils Den', 'Backyard BBQ']
}

export default IndecisionApp

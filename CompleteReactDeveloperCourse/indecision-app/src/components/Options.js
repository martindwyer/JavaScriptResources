import React from 'react'
import Option from './Option'

const Options = props => {
  return (
    <div>
      <div className='widget-header'>
        <h3 className='widget-header-h3'>Your Options</h3>
        <button
          className='button button-link '
          onClick={props.handleDeleteOptions}
        >
          Remove All
        </button>
      </div>

      {props.options.map((option, index) => {
        return (
          <Option
            key={option}
            optionText={option}
            count={index + 1}
            handleDeleteOption={props.handleDeleteOption}
          />
        )
      })}

      {props.options.length === 0 && (
        <p className='widget-message'>Please add an option to get started</p>
      )}
    </div>
  )
}

export default Options

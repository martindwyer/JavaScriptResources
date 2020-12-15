import React from 'react'

const Option = props => {
  return (
    <div className='widget-option'>
      <p>
        {props.count}.&nbsp;&nbsp;&nbsp;{props.optionText}
      </p>
      <button
        className='button button-link'
        onClick={e => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        Remove
      </button>
    </div>
  )
}

export default Option

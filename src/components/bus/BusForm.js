import React from 'react'

export const BusForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input type='text' className='BusForm' />
  </form>
)

BusForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired
}

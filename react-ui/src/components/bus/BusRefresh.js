import React from 'react'

export const BusRefresh = (props) => {
    return(
      <span><button className='Refresh' type='button' onClick={props.handleRefresh}>Refresh</button></span>
    )
}

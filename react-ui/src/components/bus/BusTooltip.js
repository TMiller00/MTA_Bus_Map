import React from 'react'
import { Tooltip } from 'react-leaflet'
import { BusOnwardCall } from './BusOnwardCall'
import { currentTime } from '../../lib/utils'

export const BusTooltip = (props) => {
  const { time, id, line, destination, onwardCalls } = props;
  let stopList = null

  if(onwardCalls !== undefined) {
    stopList = <BusOnwardCall time={time} calls={onwardCalls} />
  } else {
    stopList = <ul><li>(No buses in route)</li></ul>
  }

  let now = currentTime(time)

  return (
      <Tooltip>
        <div>
          <h3>{line} - { destination }</h3>
          <span>Vehicle #{id} | Data updated at {now}</span>
          { stopList}
        </div>
      </Tooltip>
  )
}

BusTooltip.propTypes = {
  id: React.PropTypes.string.isRequired,
  line: React.PropTypes.string,
  destination: React.PropTypes.string,
  onwardCalls: React.PropTypes.array
}

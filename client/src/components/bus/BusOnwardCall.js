import React from 'react'
import {timeTill} from '../../lib/utils'

export const BusOnwardCall = (props) => {
  return (
      <ul>
        {props.calls.map(call =>
          <li key={call.StopPointRef + ' ' + call.ExpectedArrivalTime}>
            {call.StopPointName[0]} {timeTill(props.time, call.ExpectedArrivalTime)} minutes away {call.ArrivalProximityText}
          </li>
        )}
      </ul>
  )
}

BusOnwardCall.propTypes = {
  ArrivalProximityText: React.PropTypes.string,
  StopPointRef: React.PropTypes.string,
  ExpectedArrivalTime: React.PropTypes.string,
  StopPointName: React.PropTypes.array,
  time: React.PropTypes.string.isRequired
}

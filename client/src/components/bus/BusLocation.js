import React from 'react'
import { Circle } from 'react-leaflet'
import { BusTooltip } from './BusTooltip'

// Takes in state containing id, latitude, and longitude
// and additional information for a Tooltip
// Returns a Leaflet Circle component on the location of the bus

export const BusLocation = (props) => {
  return (
    <div>
    {props.buses.map(bus =>
      <Circle key={bus.id} center={[bus.lat, bus.lng]} radius={30}>
        <BusTooltip time={props.time} {...bus} />
      </Circle>)}
    </div>
  )
}

BusLocation.propTypes = {
  buses: React.PropTypes.array.isRequired
}

const baseURL = (process.env.PORT || 'https://localhost:5000/')

export const vehicleService = () => {
  return fetch(baseURL)
    .then(res => res.json())
    .then(json => {
      const temp = []
      const timestamp = json.Siri.ServiceDelivery.ResponseTimestamp
      const busData = json.Siri.ServiceDelivery.VehicleMonitoringDelivery[0].VehicleActivity
      busData.forEach(bus => {
        if('MonitoredCall' in bus.MonitoredVehicleJourney) {
          const base = bus.MonitoredVehicleJourney
          temp.push(
            {
              id: base.VehicleRef.split('_')[1],
              lat: base.VehicleLocation.Latitude,
              lng: base.VehicleLocation.Longitude,
              line: base.PublishedLineName[0],
              destination: base.DestinationName[0],
              onwardCalls: base.OnwardCalls.OnwardCall
            }
          )
        }
      })
      return [timestamp, temp]
    })
}

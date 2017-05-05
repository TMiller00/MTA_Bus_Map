export const timeTill = (c, t) => {
  if(t !== undefined) {
    const curTime = new Date(c)
    const newTime = new Date(t)
    return newTime.getMinutes() - curTime.getMinutes()
  }
  return 0
}

export const currentTime = (c) => {
  const curTime = new Date(c)
  return curTime.getHours() + ":" + curTime.getMinutes()
}

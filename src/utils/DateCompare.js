const secondsToMilliseconds = 1000

export const dateCompare = (firstDate, secondDate) => {
  return (
    new Date(firstDate * secondsToMilliseconds).getDate() ===
      secondDate.getDate() &&
    new Date(firstDate * secondsToMilliseconds).getMonth() ===
      secondDate.getMonth()
  )
}

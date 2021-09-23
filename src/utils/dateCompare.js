const SECONDS_TO_MILLISECONDS_COEFFICIENT = 1000

export const dateCompare = (firstDate, secondDate) => {
  return (
    new Date(firstDate * SECONDS_TO_MILLISECONDS_COEFFICIENT).getDate() ===
      secondDate.getDate() &&
    new Date(firstDate * SECONDS_TO_MILLISECONDS_COEFFICIENT).getMonth() ===
      secondDate.getMonth()
  )
}

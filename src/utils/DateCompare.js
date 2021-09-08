export const dateCompare = (firstDate, secondDate) => {
  return (
    new Date(firstDate * 1000).getDate() === secondDate.getDate() &&
    new Date(firstDate * 1000).getMonth() === secondDate.getMonth()
  )
}

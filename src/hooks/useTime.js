export default function useTime(timeString) {
  const timeArr = timeString.split(":");
  if (Number(timeArr[0]) >= 12) {
    return `${Number(timeArr[0]) - 12}:${timeArr[1]} PM`;
  } else {
    return `${timeArr[0]}:${timeArr[1]} AM`;
  }
}

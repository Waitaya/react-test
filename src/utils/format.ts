import dayjs from "dayjs";

export function formatTimestamp(timestamp: Date): string {
  const formattedDate = dayjs(timestamp)
    .locale("en")
    .format("dddd, MMMM D, YYYY, HH:mm");
  return formattedDate;
}

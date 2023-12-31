export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("da-DK", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}

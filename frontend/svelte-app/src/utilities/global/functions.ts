// utilities/global/functions.ts

export function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }
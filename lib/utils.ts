import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const timeDifference = now.valueOf() - createdAt.valueOf();
  const secondsDifference = Math.floor(timeDifference / 1000);

  if (secondsDifference < 60) {
    return `${secondsDifference} ${
      secondsDifference === 1 ? "second" : "seconds"
    } ago`;
  } else if (secondsDifference < 3600) {
    const minutesDifference = Math.floor(secondsDifference / 60);
    return `${minutesDifference} ${
      minutesDifference === 1 ? "minute" : "minutes"
    } ago`;
  } else if (secondsDifference < 86400) {
    const hoursDifference = Math.floor(secondsDifference / 3600);
    return `${hoursDifference} ${hoursDifference === 1 ? "hour" : "hours"} ago`;
  } else if (secondsDifference < 2592000) {
    const daysDifference = Math.floor(secondsDifference / 86400);
    return `${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago`;
  } else if (secondsDifference < 31536000) {
    const monthsDifference = Math.floor(secondsDifference / 2592000);
    return `${monthsDifference} ${
      monthsDifference === 1 ? "month" : "months"
    } ago`;
  } else {
    const yearsDifference = Math.floor(secondsDifference / 31536000);
    return `${yearsDifference} ${yearsDifference === 1 ? "year" : "years"} ago`;
  }
};

export const formatNumberWithExtension = (num: number): string => {
  if (num >= 1000000) {
    const millionNum = (num / 1000000).toFixed(2);
    return millionNum + "M";
  } else if (num >= 1000) {
    const thousandNum = (num / 1000).toFixed(2);
    return thousandNum + "K";
  } else {
    return num.toString();
  }
};

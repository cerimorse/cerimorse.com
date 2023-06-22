import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export { cn, fetcher };

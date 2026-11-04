import { cacheLife } from "next/cache";

export async function getSiteTimestamp(): Promise<number> {
  "use cache";
  cacheLife("days");

  return Date.now();
}

"use client";

import Image from "next/image";
import useSwr from "swr";
import { loader } from "@/lib/flickr";
import { fetcher } from "@/modules/utils";
import { Link } from "@/components/common/link";

export function FlickrRandom() {
  const { data } = useSwr("/api/flickr/random-photo", fetcher);

  if (!data) {
    return null;
  }

  return (
    <Link
      variant="unstyled"
      href={`https://www.flickr.com/photos/${data.owner}`}
      target="_blank"
      rel="noopener"
      className="relative h-full w-full overflow-hidden"
    >
      <Image
        src={`${data.server}/${data.id}_${data.secret}.jpg`}
        alt={data.title}
        fill
        sizes="(min-width: 0px) 100vw, (min-width: 768px) 20vw"
        loader={loader}
        className="object-cover"
      />
    </Link>
  );
}

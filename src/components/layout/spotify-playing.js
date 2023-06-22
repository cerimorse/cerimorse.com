"use client";

import useSwr from "swr";
import { fetcher } from "@/modules/utils";
import { Spotify as SpotifyIcon } from "@/components/common/icons";
import { Link } from "@/components/common/link";
import { Typography } from "@/components/common/typography";

export function SpotifyPlaying() {
  const { data } = useSwr("/api/spotify/now-playing", fetcher);

  return (
    <div className="flex items-center space-x-3">
      <SpotifyIcon className="h-6 w-6" />
      <Typography asChild variant="body">
        <span className="whitespace-nowrap overflow-hidden text-ellipsis">
          {data?.isPlaying ? (
            <>
              <Link href={data.songUrl} target="_blank" rel="noopener">
                {data.title}
              </Link>
              {` - ${data.artist}`}
            </>
          ) : (
            "Not Playing"
          )}
        </span>
      </Typography>
    </div>
  );
}

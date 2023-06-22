import { NextResponse } from "next/server";
import { getNowPlaying } from "@/lib/spotify";

export async function GET() {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ isPlaying: false });
  } else {
    const { is_playing, item } = await response.json();
    return NextResponse.json({
      isPlaying: is_playing,
      title: item.name,
      artist: item.artists.map((_artist) => _artist.name).join(", "),
      album: item.album_name,
      albumImageUrl: item.album.images[0].url,
      songUrl: item.external_urls.spotify,
    });
  }
}

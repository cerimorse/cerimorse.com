import { NextResponse } from "next/server";
import { getAlbumPhotos } from "@/lib/flickr";

export async function GET() {
  const response = await getAlbumPhotos();
  const data = await response.json();

  const photo =
    data.photoset.photo[Math.floor(Math.random() * data.photoset.photo.length)];

  return NextResponse.json({
    id: photo.id,
    secret: photo.secret,
    server: photo.server,
    title: photo.title,
    owner: data.photoset.owner,
  });
}

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.cerimorse.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.cerimorse.com/coding",
      lastModified: new Date(),
    },
    {
      url: "https://www.cerimorse.com/timeline",
      lastModified: new Date(),
    },
  ];
}

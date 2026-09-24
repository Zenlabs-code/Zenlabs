import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const url=process.env.SITE_URL||"https://zenlabs.me"; return [{url,lastModified:new Date(),changeFrequency:"monthly",priority:1}]; }

import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { const base=process.env.SITE_URL||"https://buildwise.ai"; return {rules:{userAgent:"*",allow:"/"},sitemap:`${base}/sitemap.xml`}; }

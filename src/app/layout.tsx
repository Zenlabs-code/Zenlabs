import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter=Inter({variable:"--font-inter",subsets:["latin"]});
const siteUrl=process.env.SITE_URL||"https://buildwise.ai";
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:"BuildWise AI | Construction Intelligence",description:"AI-powered construction intelligence for emerging economies.",alternates:{canonical:"/"},openGraph:{type:"website",title:"BuildWise AI | Construction Intelligence",description:"AI-powered construction intelligence for emerging economies."},twitter:{card:"summary_large_image",title:"BuildWise AI | Construction Intelligence",description:"AI-powered construction intelligence for emerging economies."}};
export default function RootLayout({children}:LayoutProps<"/">){return <html lang="en" className={inter.variable}><body>{children}</body></html>}

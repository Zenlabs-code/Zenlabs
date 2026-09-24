import type { Metadata } from "next";
import { Epilogue, Open_Sans } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({ variable: "--font-epilogue", subsets: ["latin"], weight: ["600", "700", "800"] });
const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"], weight: ["400", "600", "700"] });
const siteUrl = process.env.SITE_URL || "https://zenlabs.me";

export const metadata: Metadata = { metadataBase: new URL(siteUrl), title: "ZenLabs | Practical digital tools for Filipino MSMEs", description: "Practical digital tools that help Filipino businesses simplify sales, inventory, finances, reporting, and operations.", alternates:{canonical:"/"}, openGraph:{type:"website",url:"/",siteName:"ZenLabs",title:"ZenLabs | Business made easier",description:"Practical digital tools for Filipino MSMEs.",images:[{url:"/hero.jpg",width:1200,height:630,alt:"ZenLabs supports Filipino MSMEs"}]}, twitter:{card:"summary_large_image",title:"ZenLabs | Business made easier",description:"Practical digital tools for Filipino MSMEs.",images:["/hero.jpg"]} };
export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="en" className={`${epilogue.variable} ${openSans.variable}`}><body>{children}</body></html>; }

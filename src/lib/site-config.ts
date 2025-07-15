import { Metadata } from "next";
const TITLE = "Pradeep Yadav";
const DESCRIPTION =
  "I'm Pradeep Yadav , a Full stack developer";

const PREVIEW_IMAGE_URL = "/logo.png";
const ALT_TITLE = "Pradeep Yadav - Full Stack Developer";
const BASE_URL = "https://pradeepdev.vercel.app/";

export const siteConfig: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
  },
  applicationName: "Pradeep's Portfolio",
  creator: "Pradeep",
  twitter: {
    creator: "@pradeep100xdev",
    title: TITLE,
    description: DESCRIPTION,
    card: "summary_large_image",
    images: [
      {
        url: PREVIEW_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: ALT_TITLE,
      },
    ],
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Pradeep's Portfolio",
    url: BASE_URL,
    locale: "en_US",
    type: "website",
    images: [
      {
        url:PREVIEW_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Pradeep Yadav - Full Stack Developer",
      },
    ],
  },
  category: "Technology",
  alternates: {
    canonical: BASE_URL,
  },
  keywords: [
      "portfolio",
      "personal portfolio",
      "web developer",
      "software engineer",
      "front-end developer",
      "creative",
      "coder",
      "programmer",
      "developer",
      "portfolio website",
  ],
  metadataBase: new URL(BASE_URL),
};


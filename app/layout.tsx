import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "भोजपुर राज्य आंदोलन | Bhojpur Rajya Movement",
    template: "%s | Bhojpur Rajya"
  },
  description: "भोजपुर राज्य - बिहार, उत्तर प्रदेश और झारखंड के 28 जिलों को मिलाकर बनने वाला प्रस्तावित राज्य। 85,390 वर्ग किमी क्षेत्रफल और 8.5 करोड़ जनसंख्या के साथ भोजपुरी संस्कृति और आर्थिक विकास का केंद्र।",
  keywords: [
    "भोजपुर राज्य",
    "Bhojpur Rajya",
    "Bhojpur State",
    "भोजपुरी आंदोलन",
    "नया राज्य",
    "बिहार विभाजन",
    "उत्तर प्रदेश विभाजन",
    "भोजपुरी संस्कृति",
    "28 जिले",
    "आर्थिक विकास",
    "Bhojpuri movement",
    "New state formation",
    "Bihar UP Jharkhand"
  ],
  authors: [{ name: "Bhojpur Rajya Movement" }],
  creator: "Bhojpur Rajya Movement",
  publisher: "Bhojpur Rajya Movement",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bhojpurrajya.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "भोजपुर राज्य आंदोलन | Bhojpur Rajya Movement",
    description: "28 जिलों का प्रस्तावित राज्य - बिहार, उत्तर प्रदेश और झारखंड। भोजपुरी संस्कृति, आर्थिक विकास और सामाजिक न्याय का प्रतीक।",
    url: "https://bhojpurrajya.in",
    siteName: "Bhojpur Rajya",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Bhojpur Rajya Logo",
      },
      {
        url: "/map1.png",
        width: 1200,
        height: 630,
        alt: "Bhojpur Rajya Map - 28 Districts",
      },
    ],
    locale: "hi_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "भोजपुर राज्य आंदोलन | Bhojpur Rajya Movement",
    description: "28 जिलों का प्रस्तावित राज्य - भोजपुरी संस्कृति और आर्थिक विकास का केंद्र",
    images: ["/logo1.png"],
    creator: "@BhojpurRajya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Eczar:wght@400..800&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#f97316" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

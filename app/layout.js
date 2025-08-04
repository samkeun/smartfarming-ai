import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";

export const metadata = {
  title: "작물 병해충 탐지 앱",
  description: "인공지능 기반 작물 병해충 탐지 애플리케이션",
  manifest: "/manifest.json", // PWA manifest 추가
  themeColor: "#000000", // 테마 컬러 추가
  appleWebApp: {
    capable: true,
    title: "병해충탐지",
    statusBarStyle: "black-translucent",
  },
  // 추가 SEO 최적화 메타데이터
  openGraph: {
    title: "작물 병해충 탐지 앱",
    description: "인공지능 기반 작물 병해충 탐지 애플리케이션",
    url: "https://dn8wklnt2iid2.cloudfront.net/crop-selection",
    siteName: "병해충탐지",
    images: [
      {
        url: "/icons/icon-192x192.png",
        width: 192,
        height: 192,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  icons: {
    icon: "/icons/icon-192x192.png",
    shortcut: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}


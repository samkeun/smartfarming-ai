// app/head.jsx
export default function Head() {
  return (
    <>
      <title>작물 병해충 탐지 앱</title>
      <meta name="theme-color" content="#000000" />

      {/* PWA 기본 설정 */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />

      {/* iOS 지원 */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="병해충탐지" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Android 지원 */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="병해충탐지" />
    </>
  );
}

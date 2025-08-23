import createPWA from 'next-pwa';

const withPWA = createPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        output: 'standalone', // PM2로 구동하기 좋게 최소 실행 번들 생성
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `frame-src https://smartfarming.live https://dn8wklnt2iid2.cloudfront.net http://localhost:3000;`
          },    
        ]
      }
    ]
  }
}

export default withPWA(nextConfig);

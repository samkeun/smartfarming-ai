// app/not-found.jsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-8">
      <h1 className="text-4xl font-bold mb-4">404 - 페이지를 찾을 수 없습니다</h1>
      <p className="text-lg text-center max-w-md">
        요청하신 페이지가 존재하지 않거나 이동되었습니다. URL을 다시 확인해 주세요.
      </p>
      <a
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        홈으로 돌아가기
      </a>
    </div>
  );
}

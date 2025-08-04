"use client"
import { useState } from "react";

export default function Listing() {
  const [iframeError, setIframeError] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '85vh' }}>
      <iframe
        src="https://dn8wklnt2iid2.cloudfront.net/crop-selection"
        allow="camera"
        onError={() => setIframeError(true)}
        // className="w-full h-[600px] border"
        className="w-full h-[calc(100vh-75px)] border"
      />
      {iframeError && (
        <div className="mt-4 p-4 bg-yellow-50 text-yellow-800">
          This content requires camera permissions. Please enable it or <a 
            href="https://dn8wklnt2iid2.cloudfront.net/crop-selection" 
            className="text-blue-600 underline"
            target="_blank"
          >open in new tab</a>.
        </div>
      )}
    </div>
  );
}



"use client";

import { useEffect, useRef, useState } from "react";

export default function GoogleReviewsWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(400);

  useEffect(() => {
    // Listen for messages from the iframe to auto-resize
    const handleMessage = (event: MessageEvent) => {
      if (event.data && typeof event.data.skHeight === "number") {
        setIframeHeight(event.data.skHeight);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Build the iframe srcdoc with the exact SociableKIT embed code
  const iframeContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: transparent; }
  </style>
</head>
<body>
  <div class="sk-ww-google-reviews" data-embed-id="25706767"></div>
  <script src="https://widgets.sociablekit.com/google-reviews/widget.js" defer></script>
  <script>
    // Auto-resize: send height to parent
    const ro = new ResizeObserver(() => {
      window.parent.postMessage({ skHeight: document.body.scrollHeight }, '*');
    });
    ro.observe(document.body);
  </script>
</body>
</html>`.trim();

  return (
    <section className="py-10 sm:py-14 bg-gray-50" aria-label="Google Reviews">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#F59E0B]">
            Real Customer Feedback
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#01395C]">
            What Our Customers Say on Google
          </h2>
          <p className="mt-2 text-gray-500 text-sm max-w-xl mx-auto">
            Verified reviews from real customers on Google — see why thousands
            trust Medon Company for their appliance repair needs.
          </p>
        </div>

        {/* SociableKIT Google Reviews Widget via sandboxed iframe */}
        <div className="overflow-hidden rounded-xl">
          <iframe
            ref={iframeRef}
            srcDoc={iframeContent}
            title="Google Reviews - Medon Company"
            className="w-full border-0"
            style={{ height: `${iframeHeight}px`, minHeight: "300px" }}
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function GiftPage() {
  return (
    <div className="video-container">
      <video controls autoPlay loop width="100%">
        <source src="./Gift/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

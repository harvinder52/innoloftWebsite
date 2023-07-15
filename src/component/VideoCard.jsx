import React from "react";

export const VideoCard = () => {
  const videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  // Extract the video ID from the URL
  const videoId = videoUrl.split("v=")[1];

  return (
    <div className=" rounded overflow-hidden shadow-lg">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Video</h2>
        <div className="flex justify-center">
          <iframe
            title="YouTube Video"
            src={`https://www.youtube.com/embed/${videoId}`}
            className="w-full"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

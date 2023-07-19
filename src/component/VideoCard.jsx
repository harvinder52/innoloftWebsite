import React from "react";
import { useSelector } from "react-redux";

export const VideoCard = () => {
  const videoUrl = useSelector((state) => state.urlLink.url);

  // Extract the video ID from the URL
  const videoId = videoUrl.split("v=")[1];

  return (
    <div className=" rounded overflow-hidden border border-gray">
      <div className="p-4">
        <h2 className="text-base  text-gray-600 mb-2">Video</h2>
        <div className="flex justify-center">
          <iframe
            title="YouTube Video"
            src={`https://www.youtube.com/embed/${videoId}`}
            className="w-full"
            frameBorder="0"
            style={{ height: "50vh" }}
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

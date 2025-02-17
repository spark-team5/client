import React from "react";

interface FaceVideoProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

export const FaceVideo: React.FC<FaceVideoProps> = ({ videoRef }) => {
  return (
    <video
      ref={videoRef}
      autoPlay
      className="absolute fixed top-[52px] w-screen h-screen object-cover scale-x-[-1]"
    />
  );
};

export default FaceVideo;

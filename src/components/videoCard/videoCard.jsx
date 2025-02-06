'use client';

import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { Dialog } from '@headlessui/react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const getYoutubeThumbnail = (videoUrl) => {
  // Check if the videoUrl contains the embed URL format
  if (videoUrl.includes('embed/')) {
    const videoId = videoUrl.split('embed/')[1].split('?')[0];
    return `https://img.youtube.com/vi/${videoId}/0.jpg`; // Fetch the thumbnail based on the video ID
  } else {
    // If not, log an error or handle it gracefully
    console.error('Invalid YouTube embed URL');
    return 'https://via.placeholder.com/300x200.png?text=Invalid+Video'; // Return a placeholder if URL is incorrect
  }
};

const videos = [
    {
      id: 1,
      thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/Ma6II9Cw4MY?si=I9HBz2tQ05JJKwrH"),
      videoUrl: "https://www.youtube.com/embed/Ma6II9Cw4MY?si=I9HBz2tQ05JJKwrH",
      title: "Video 1",
      description: "This is the first video description."
    },
    {
      id: 2,
      thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/oMipXnLGmj4?si=sxMnz3fQjz30hWM_"),
      videoUrl: "https://www.youtube.com/embed/oMipXnLGmj4?si=sxMnz3fQjz30hWM_",
      title: "Video 2",
      description: "This is the second video description."
    },
    {
      id: 3,
      thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/h71m87dx-3E?si=9VD1XpmSMfqahpDb"),
      videoUrl: "https://www.youtube.com/embed/h71m87dx-3E?si=9VD1XpmSMfqahpDb",
      title: "Video 3",
      description: "This is the third video description."
    },
    {
      id: 4,
      thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/6jcLO3srNto?si=3X1IYpX_3dL9b2SN"),
      videoUrl: "https://www.youtube.com/embed/6jcLO3srNto?si=3X1IYpX_3dL9b2SN",
      title: "Video 4",
      description: "This is the fourth video description."
    },
    {
      id: 5,
      thumbnail:getYoutubeThumbnail("https://www.youtube.com/embed/fAoaLHKsQKk?si=hosbH1NDWMbPEWBn"),
      videoUrl: "https://www.youtube.com/embed/fAoaLHKsQKk?si=hosbH1NDWMbPEWBn",
      title: "Video 5",
      description: "This is the fifth video description."
    },
    {
      id: 6,
      thumbnail:getYoutubeThumbnail("https://www.youtube.com/embed/1XyLY1tiz48?si=il-KUAqpgYVCtFYI"),
      videoUrl: "https://www.youtube.com/embed/1XyLY1tiz48?si=il-KUAqpgYVCtFYI",
      title: "Video 5",
      description: "This is the fifth video description."
    }
  ];



  
 
  
export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videosPerPage = 3;
  const totalVideos = videos.length;
  const totalPages = Math.ceil(totalVideos / videosPerPage);
  const currentPage = Math.floor(currentIndex / videosPerPage) + 1;

  const nextSlide = () => {
    if (currentIndex + videosPerPage < totalVideos) {
      setCurrentIndex(currentIndex + videosPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex - videosPerPage >= 0) {
      setCurrentIndex(currentIndex - videosPerPage);
    }
  };


  return (
    <div className="relative w-full max-w-5xl mx-auto p-4">
      <h2 className="text-center text-2xl font-bold mb-4">Video Testimonials</h2>
      <div className="flex gap-4 overflow-hidden">
        {videos.slice(currentIndex, currentIndex + videosPerPage).map((video, index) => (
          <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden w-1/3">
            <img src={video.thumbnail} alt={video.title} className="w-full h-52 object-cover" />
            <button
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl rounded-full w-14 h-14 m-auto"
              onClick={() => {
                setSelectedVideo(video.videoUrl);
                setIsOpen(true);
              }}
            >
              <FaPlay />
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end items-center mt-4 gap-3">
      <p className="text-center text-gray-600 mt-2">{currentIndex + videosPerPage}/{totalVideos}</p>
      <div className="w-[200px] mx-4 h-1 bg-gray-300 rounded-full relative">
          <div className="absolute top-0 left-0 h-1 bg-[#173366] rounded-full" style={{ width: `${(currentIndex + videosPerPage) / totalVideos * 100}%` }}></div>
        </div>
        <button onClick={prevSlide} disabled={currentIndex === 0} className="text-xl p-2 bg-gray-200 rounded-full">
          <IoIosArrowBack />
        </button>
       
        <button onClick={nextSlide} disabled={currentIndex + videosPerPage >= totalVideos} className="text-xl p-2 bg-gray-200 rounded-full">
          <IoIosArrowForward />
        </button>
      </div>
      
      
      {/* Modal for Video */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 ">
        <div className="p-4 rounded-lg relative ">
          <button onClick={() => setIsOpen(false)} className="absolute -top-5 right-0 text-white text-lg">✕</button>
          {selectedVideo && (
         <iframe
         width="100%" // Makes the iframe width responsive, based on the container's width
         height="auto" // We'll control the height with responsive classes below
         src={selectedVideo}
         title="YouTube video"
         allow="autoplay; encrypted-media"
         className="rounded-lg w-96 xl:w-[800px] h-96  md:h-[300px] md:w-[500px] lg:h-[400px] lg:w-[700px] xl:h-[500px]" // Adjust height at different breakpoints
       ></iframe>
       
          )}
        </div>
      </Dialog>
    </div>
  );
}

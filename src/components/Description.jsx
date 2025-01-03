import React from "react";

function Description() {
  return (
    <div className="max-w-3xl mx-auto bg-violet-900 bg-opacity-25 py-6 px-8 rounded-lg">
      <p className="text-3xl font-bold text-white mb-4">Discover Cosmic Chill</p>
      <p className="text-lg text-gray-200 mb-8">
        A unique collection of digital art that takes you on a journey to
        distant and unknown worlds, offering an unforgettable relaxation
        experience to escape the stress of everyday life.
      </p>
      
      <div className="mb-8">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/2yNevx70Rb0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <p className="text-lg text-gray-200 mb-8">
        Owning a Cosmic Chill NFT means becoming a space explorer and enjoying
        exclusive ownership of a unique beach in the metaverse. Join our
        community to discover hidden wonders and interact with other NFT owners.
      </p>
      <p className="text-lg font-bold text-white mb-2">
        Get your own Cosmic Chill NFT today and enjoy:
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-gray-200">
          Access to a one-of-a-kind digital art collection
        </li>
        <li className="text-lg text-gray-200">
          Exclusive ownership of a unique beach in the metaverse
        </li>
        <li className="text-lg text-gray-200">
          A chance to join a community of like-minded space explorers
        </li>
      </ul>
    </div>
  );
}

export default Description;
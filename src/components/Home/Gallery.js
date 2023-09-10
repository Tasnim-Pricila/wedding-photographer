import React from "react";
import useServices from "../../CustomHook/useServices";
import Photos from "./Photos";

const Gallery = () => {
  const [gallery] = useServices("gallery.json");

  return (
    <div id="gallery">
      <h2 className="text-3xl text-center uppercase tracking-wider mt-4">
        Style of Wedding
      </h2>
      <p className="text-base text-center text-fuchsia-700 mt-2 mb-8 font-semibold tracking-wide">
        Professional Photographies...
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 my-8">
        {gallery.map((photos) => (
          <Photos key={photos.id} photos={photos}></Photos>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

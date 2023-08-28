import Image from "next/image";
import React from "react";
import { SectionTitle } from "../shared/Titles";

const ImageGallery = () => {
  const images = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <SectionTitle title="OUR GALLERY" subTitle="Student gallery of the year past graduated phaseouts" style="center" />
      <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-1 max-container pb-8">
        {images.map(() => (
          <Image
            key={0}
            height={300}
            width={300}
            layout="responsive"
            src="http://kodeforest.net/html/uoe/extra-images/home-gallery6.jpg"
            alt=""
            loading="lazy"
          />
        ))}
      </div>
    </>
  );
};

export default ImageGallery;

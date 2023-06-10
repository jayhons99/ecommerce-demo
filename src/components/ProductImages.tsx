import { useState } from "react";
import { ProductImage } from "../types";
interface ProductImagesProps {
  images?: ProductImage[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState<ProductImage>(images[0]);
  return (
    <>
      <img
        src={mainImage?.url}
        className="h-[600px] lg:h-[500px] w-full block rounded-md object-cover"
        alt="main-image"
      />
      <div className="mt-4 grid grid-cols-[repeat(5,1fr)] gap-4">
        {images.map((image, i) => {
          return (
            <div key={image?.id} className="group">
              <img
                src={image?.url}
                className={`${
                  image?.url === mainImage?.url
                    ? "border-2 border-solid border-neutral-950/70"
                    : null
                }
                group-hover:opacity-50 transition-opacity h-[50px] lg:h-[75px] cursor-pointer w-full block rounded-md object-cover`}
                alt={image?.filename}
                onClick={() => setMainImage(images[i])}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ProductImages;

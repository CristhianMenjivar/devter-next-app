import Image from "next/image";
import { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";

const Post = ({ title, body, thumbnail }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [imageUrl, setImageUrl] = useState(thumbnail.thumb);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
    setImageUrl(shouldZoom ? thumbnail.regular : thumbnail.thumb);
  }, []);

  return (
    <div className="w-full sm:1/2 md:w-1/2 lg:w-1/3 p-3">
      <div className="bg-white rounded shadow overflow-hidden border border-gray-300 hover:shadow-lg">
        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
          <Image
            className="w-full"
            width={700}
            height={600}
            src={imageUrl}
            alt={title}
            loading="lazy"
          />
        </ControlledZoom>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 uppercase">{title}</div>
          <p className="text-gray-700 text-base ">{body}</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;

import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
export default function MasonryGallery() {
  const [modal, setModal] = useState<string | undefined>(undefined);
  useEffect(() => {
    document.body.style.overflowY = modal ? "hidden" : "auto";
  }, [modal]);
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="2rem">
          {[...Array(42)].map((_, i) => (
            <button key={i} onClick={() => setModal((i + 1).toString())}>
              <img
                className="hover:scale-110 transition-translate duration-500 ease-in-out"
                src={`/gallery/${i + 1}.webp`}
                key={i}
              />
            </button>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {modal && (
        <div
          className="bg-black/70 fixed w-full h-full top-0 left-0 grid place-items-center"
          onClick={(e) => e.target === e.currentTarget && setModal(undefined)}
        >
          <img
            src={`/gallery/${modal}.webp`}
            className="max-h-[80vh] max-w-[80vw] object-contain"
          />
        </div>
      )}
    </>
  );
}

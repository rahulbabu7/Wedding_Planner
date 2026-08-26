import { forwardRef } from "react";
import Lotus from "../common/motifs/Lotus";
import { wedding } from "../../config/wedding";
import "./CouplePhoto.css";

/**
 * Elegant placeholder shown until a real photograph is supplied via
 * wedding.couplePhotoSrc — keeps the composition premium rather than a
 * broken-image icon while the client sources their photography.
 */
function MonogramPlaceholder() {
  return (
    <div className="couple-photo__placeholder" role="img" aria-label={wedding.couplePhotoAlt}>
      <span className="couple-photo__initial">{wedding.groom.name.charAt(0)}</span>
      <span className="couple-photo__placeholder-amp">&amp;</span>
      <span className="couple-photo__initial">{wedding.bride.name.charAt(0)}</span>
    </div>
  );
}

/**
 * Ornamental frame → couple photograph → names. Deliberately restrained —
 * a subtle border and soft shadow, not a large modern card.
 */
const CouplePhoto = forwardRef(function CouplePhoto(_, ref) {
  return (
    <div ref={ref} className="couple-photo">
      <div className="couple-photo__frame">
        {wedding.couplePhotoSrc ? (
          <img src={wedding.couplePhotoSrc} alt={wedding.couplePhotoAlt} loading="lazy" />
        ) : (
          <MonogramPlaceholder />
        )}
      </div>
      <Lotus size={40} className="couple-photo__lotus" />
    </div>
  );
});

export default CouplePhoto;

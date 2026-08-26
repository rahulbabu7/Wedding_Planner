import { forwardRef } from "react";
import { wedding } from "../../config/wedding";

/**
 * The couple's names as the invitation's strongest visual moment. Forwards
 * a ref for the whole block plus a separate `underlineRef` so the phased
 * invitation animation can draw the gold rule independently of the fade-in.
 */
const CoupleNames = forwardRef(function CoupleNames({ underlineRef }, ref) {
  return (
    <div ref={ref} className="couple-names">
      <p className="couple-names__row font-display couple-name">
        {wedding.groom.name}
        <span className="couple-names__amp">&amp;</span>
        {wedding.bride.name}
      </p>
      <span ref={underlineRef} className="couple-names__underline" aria-hidden="true" />
    </div>
  );
});

export default CoupleNames;

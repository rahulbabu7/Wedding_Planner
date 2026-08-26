import Lotus from "./motifs/Lotus";
import "./DecorativeDivider.css";

/**
 * Quiet rule-with-lotus used between blocks of invitation content instead
 * of a plain <hr>, so pauses in the copy still feel like part of the
 * illustrated card rather than a generic UI separator.
 */
function DecorativeDivider({ className = "" }) {
  return (
    <div className={`decorative-divider ${className}`} role="presentation" aria-hidden="true">
      <span className="decorative-divider__line" />
      <Lotus size={28} className="decorative-divider__lotus" />
      <span className="decorative-divider__line" />
    </div>
  );
}

export default DecorativeDivider;

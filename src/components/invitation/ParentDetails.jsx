import { wedding } from "../../config/wedding";

/**
 * Renders both families' parent (and grandparent) lines. Reads entirely
 * from config so parent names can be updated without touching markup.
 */
function ParentDetails() {
  const { groom, bride, grandparents } = wedding;

  return (
    <div className="parent-details">
      <div className="parent-details__family">
        <p className="parent-details__names">
          {groom.father} &amp; {groom.mother}
        </p>
        {grandparents?.groom && <p className="parent-details__grand small-caps">{grandparents.groom}</p>}
      </div>

      <p className="parent-details__joiner eyebrow" aria-hidden="true">&amp;</p>

      <div className="parent-details__family">
        <p className="parent-details__names">
          {bride.father} &amp; {bride.mother}
        </p>
        {grandparents?.bride && <p className="parent-details__grand small-caps">{grandparents.bride}</p>}
      </div>
    </div>
  );
}

export default ParentDetails;

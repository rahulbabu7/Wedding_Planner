import { wedding } from "../../config/wedding";

/**
 * The opening blessing + introductory line of the printed invitation.
 * Pulled entirely from config so the wording can change without touching
 * this component.
 */
function InvitationText() {
  return (
    <div className="invitation-text">
      <p className="invitation-text__blessing lede">{wedding.invitation.blessing}</p>
      <p className="invitation-text__intro">{wedding.invitation.introduction}</p>
    </div>
  );
}

export default InvitationText;

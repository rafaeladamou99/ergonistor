import "./BottomBar.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import { ContentProp } from "../../types/types";

const BottomBar = ({ content }: ContentProp) => (
  <div className="app-container bottom-bar">
    <div className="company-mark">{content?.copyrightMsg}</div>
    <div className="contact-icons">
      <Link
        to="https://www.google.com/maps/place/Ergon+Istor/@34.7755684,32.4172138,17z/data=!3m1!4b1!4m6!3m5!1s0x14e707494656ace9:0x40a5cbf0db5ccb13!8m2!3d34.7755684!4d32.4197887!16s%2Fg%2F11mdp741b_?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
        target="_blank"
      >
        <LocationOnIcon className="cursor-pointer" />
      </Link>
      <Link to={`tel:${content?.contact.telephone.value}`}>
        <CallIcon sx={{ fill: "#2FCC77" }} className="cursor-pointer" />
      </Link>
      <Link to={`mailto:${content?.contact.email.value}`}>
        <EmailIcon sx={{ fill: "#2F88FF" }} className="cursor-pointer" />
      </Link>
      <Link to={content?.contact.linkedin.value ?? ""} target="_blank">
        <LinkedInIcon sx={{ fill: "#0a66c2" }} className="cursor-pointer" />
      </Link>
    </div>
  </div>
);

export default BottomBar;

import "./BottomBar.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import { ContentProp } from "../../types/types";

const BottomBar = ({ content }: ContentProp) => {
  const latitude = "50.7926524";
  const longitude = "-1.0960133";
  return (
    <div className="app-container bottom-bar">
      <div className="company-mark">{content?.copyrightMsg}</div>
      <div className="contact-icons">
        <Link
          to={`https://www.google.com/maps?q=${latitude},${longitude}`}
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
        <Link to={`mailto:${content?.contact.linkedin.value}`}>
          <LinkedInIcon sx={{ fill: "#0a66c2" }} className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;

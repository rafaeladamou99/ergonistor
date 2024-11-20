import "./BottomBar.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const BottomBar = () => {
  const latitude = "50.7926524";
  const longitude = "-1.0960133";
  return (
    <div className="app-container bottom-bar">
      <div className="company-mark">
        Copyright © 2023 Ergonistor Limited - All Rights Reserved.
      </div>
      <div className="contact-icons">
        <Link
          to={`https://www.google.com/maps?q=${latitude},${longitude}`}
          target="_blank"
        >
          <LocationOnIcon />
        </Link>
        <Link to="tel:+35799621861">
          <CallIcon sx={{ fill: "#2FCC77" }} />
        </Link>
        <Link to="mailto:rafail-adamou@hotmail.co.uk">
          <EmailIcon sx={{ fill: "#2F88FF" }} />
        </Link>
        <LinkedInIcon sx={{ fill: "#0a66c2" }} />
      </div>
    </div>
  );
};

export default BottomBar;

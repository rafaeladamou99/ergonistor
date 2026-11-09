import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContentProp } from "../../types/types";
import {} from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = ({ content }: ContentProp) => {
  const sendEmail =
    (email: string = "") =>
    () => {
      window.location.href = `mailto:${email}`;
    };

  const callUs =
    (phone: string = "") =>
    () => {
      window.location.href = `tel:${phone}`;
    };

  const goToLinkedIn =
    (url: string = "") =>
    () => {
      window.open(url);
    };

  return (
    <div className="max-w-[1150px] w-full flex flex-col gap-16 px-4 my-5">
      <div className="w-full">
        <div className="w-full max-w-[500px] text-4xl self-baseline text-secondary">
          {content?.contact.title}
        </div>
        <p className="w-full max-w-[700px] self-baseline text-xl">
          {content?.contact.msg}
        </p>
      </div>
      <div className="flex flex-wrap gap-10 w-full justify-center">
        <div
          className="flex flex-col gap-4 border border-gray-400 w-full max-w-80 p-4 rounded-xl items-center cursor-pointer custom-hover-effect"
          onClick={sendEmail(content?.contact.email.value)}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            fontSize={40}
            className="text-[#2F88FF]"
          />
          <span className="text-lg">{content?.contact.email.msg}</span>
          <span>{content?.contact.email.value}</span>
        </div>
        <div
          className="flex flex-col gap-4 border border-gray-400 w-full max-w-80 p-4 rounded-xl items-center cursor-pointer custom-hover-effect"
          onClick={callUs(content?.contact.telephone.value)}
        >
          <FontAwesomeIcon
            icon={faPhone}
            fontSize={40}
            className="text-[#2FCC77]"
          />
          <span className="text-lg">{content?.contact.telephone.msg}</span>
          <span>{content?.contact.telephone.value}</span>
        </div>
        <div
          className="flex flex-col gap-4 border border-gray-400 w-full max-w-80 p-4 rounded-xl items-center cursor-pointer custom-hover-effect"
          onClick={goToLinkedIn(content?.contact.linkedin.value)}
        >
          <LinkedInIcon sx={{ fill: "#0a66c2", fontSize: "50px" }} />

          <span className="text-lg">{content?.contact.linkedin.msg}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;

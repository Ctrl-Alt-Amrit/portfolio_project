import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="text-center p-5">
      <h1>CONTACT ME</h1>
      <p className="p-2">Let’s connect.<br/>They say I'm a fast replier. Let's put that to the test.</p>

      <div className="text-center gap-4 fs-3 p-4">
        <a href="https://www.linkedin.com/in/amrit-s-rathore" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="ms-3 me-2"/>LinkedIn
        </a>
        <a href="https://github.com/Ctrl-Alt-Amrit" target="_blank" rel="noopener noreferrer">
          <FaGithub className="ms-3 me-2" />GitHub
        </a>
        <a href="mailto:amritsinghrathore127@gmail.com">
          <FaEnvelope className="ms-3 me-2"/>Mail
        </a>
      </div>
    </div>
  );
};
export default ContactPage;
import Link from "next/link";
import { FaHome, FaUser, FaLaptopCode, FaEnvelope, FaFileAlt, FaPen } from "react-icons/fa";

const LeftSection = () => {
  return (
    <nav className="d-flex flex-column align-items-start p-5" style={{ minHeight: '100vh' }}>
      <h2 className="mb-5 py-2">PORTFOLIO</h2>
      <ul className="list-unstyled ps-3">
        <li className="mb-4"><Link href="/"><FaHome className="me-2" />Home</Link></li>
        <li className="mb-4"><Link href="/about"><FaUser className="me-2" />About</Link></li>
        <li className="mb-4"><Link href="/projects"><FaLaptopCode className="me-2" />Projects</Link></li>
        <li className="mb-4"><Link href="/contact"><FaEnvelope className="me-2" />Contact</Link></li>
      </ul>
      <p className="mt-auto" style={{ fontSize: "0.8rem" }}>© 2025 INDIA<br />Made by AMRIT SINGH RATHORE</p>
    </nav>
  );
};

export default LeftSection;
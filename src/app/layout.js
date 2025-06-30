import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import LeftSection from "@/components/leftsection/leftsection";
import RightSection from "@/components/rightsection/rightsection";
import { Container, Row, Col } from "react-bootstrap";

export const metadata = {
  title: "Amrit's Portfolio",
  description: "Personal developer portfolio by Amrit Singh Rathore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Container fluid>
          <Row>
            <Col xs={3} className="leftSectionStyle">
              <LeftSection />
            </Col>
            <Col xs={9} className="rightSectionStyle">
              {children}
            </Col>
          </Row>
        </Container>
      </body>
    </html>
  );
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


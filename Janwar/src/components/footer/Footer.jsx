import styled from "styled-components";
import { Container } from "../../styles/styles";
import { footerData, socialLinksData } from "../../data/data";
import { Link } from "react-router-dom";
import { staticImages } from "../../utils/images";
import { breakpoints, defaultTheme } from "../../styles/themes/default";

const FooterWrapper = styled.footer`
  padding-bottom: 32px;

  @media (max-width: ${breakpoints.lg}) {
    padding-bottom: 30px;
  }

  .footer-bottom {
    padding-top: 36px;
    border-top: 1px solid rgba(190, 188, 189, 0.4);

    @media (max-width: ${breakpoints.lg}) {
      padding-top: 20px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper className="bg-outerspace">
      <Container className="container">
        <div className="footer-bottom text-center">
          <p className="text-base text-white">
            Copyright &copy; 2023 &nbsp;
            <Link to="/" className="text-white">
              Janwar.com
            </Link>
            &nbsp;. All rights reserved.
          </p>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

import React from "react";
import Container from "react-bootstrap/Container";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import Person3Icon from "@mui/icons-material/Person3";
const FoooterForMe = () => {
  return (
    <div className="w-100 footerend">
      <Container
        className=" d-flex justify-content-between w-100 "
        style={{ textAlign: "center" }}
      >
        <div className="footersizefont">
          Developed By Ahmed Younis-Mern Stack Developer{" "}
        </div>
        <div>
          <a
            href="https://portofillio-mern-stack.web.app/#"
            style={{
              textDecoration: "none",

              color: "white",
            }}
            target="_Blanck"
          >
            <Person3Icon />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/ahmed-younis-163l998/"
            style={{
              textDecoration: "none",

              color: "white",
            }}
            target="_Blanck"
          >
            <LinkedInIcon />
          </a>{" "}
          <a
            href="https://github.com/AhmedYounis668"
            style={{
              textDecoration: "none",

              color: "white",
            }}
            target="_Blanck"
          >
            <GitHubIcon />{" "}
          </a>{" "}
        </div>
      </Container>
    </div>
  );
};

export default FoooterForMe;

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-light">
      <div className="text-center p-4">
        © 2022 Copyright: FYP-22-S2-10 Team <br />
        <Link href={"mailto:dentalrecord00@gmail.com"}>
          <a className="text-reset fw-bold" style={{ textDecoration: "none" }}>
            dentalrecord00@gmail.com
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

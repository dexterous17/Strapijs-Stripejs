import { Navbar } from "@blueprintjs/core";
import React from "react";
import '../Style/Footer.css'

export default function Footer() {
  return (
    <Navbar className="footer">
      <div>
        About us
      </div>
      <div>
        Terms and conditions
      </div>
      <div>
        Privacy policy
      </div>
    </Navbar>
  );
}
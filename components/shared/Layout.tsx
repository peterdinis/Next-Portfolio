import React from "react";
import Navbar from "./Navbar";
import Seo from "./Seo";

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  return (
    <React.Fragment>
      <Seo />
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

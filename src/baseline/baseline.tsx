import { CssBaseline } from "@mui/material";
import { Loader } from "../loader";
import * as React from "react";

export const Baseline = () => {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  return (
    <>
      <CssBaseline />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@200..700&display=swap"
        as="style"
        onLoad={() => document.fonts.ready.then(() => setFontLoaded(true))}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@200..700&display=swap"
        rel="stylesheet"
      />
      <Loader open={!fontLoaded} noTransition />
    </>
  );
};

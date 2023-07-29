const VARIABLE = "--app-height";

// For mobile
export const adjustAppHeight = () => {
  const appHeight = () => {
    document.documentElement.style.setProperty(
      VARIABLE,
      `${window.innerHeight}px`
    );
  };
  window.addEventListener("resize", appHeight);
  appHeight();

  return `var(${VARIABLE})`;
};

import { adjustAppHeight } from "../helpers";

const AUTH_TOKEN_KEY = "kaluger-auth-token";

export const getAuthToken = () => localStorage.getItem(AUTH_TOKEN_KEY);

export const handleUnAuthorized = (
  authPath: string,
  onAuthorized?: () => void
) => {
  const authFrame = document.createElement("iframe");

  authFrame.src = authPath;
  authFrame.style.cssText = `position: fixed; z-index: 999; width: 100vw; height: ${adjustAppHeight()}; top: 0; border: none;`;

  document.body.append(authFrame);

  window.addEventListener("message", ({ data }) => {
    if (data.type === AUTH_TOKEN_KEY) {
      localStorage.setItem(AUTH_TOKEN_KEY, data.token);
      authFrame.remove();
      onAuthorized?.();
    }
  });
};

export const handleAuthorized = (token: string) => {
  window?.parent.postMessage({ type: AUTH_TOKEN_KEY, token }, "*");
  window?.close();
};

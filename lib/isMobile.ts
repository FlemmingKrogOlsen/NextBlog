const isMobile = (): boolean => {
  const isBrowser: boolean = typeof navigator !== `undefined`;
  if (!isBrowser) return false;
  return window.matchMedia("(max-width: 600px)").matches;
};

export default isMobile;

export const sleep = (delayMs: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, delayMs);
  });
};

export const generateId = () => {
  return Date.now() + "_" + Math.floor(Math.random() * 1e6);
};

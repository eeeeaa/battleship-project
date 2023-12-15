export const delayWrapper = (delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), delay);
  });
};

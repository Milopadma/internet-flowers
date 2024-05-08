export const addFlowerToGarden = (flowerId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`https://example.com/share/${flowerId}`);
    }, 1000);
  });
};

export const shuffleByArray = (array) => {
  const copy = [...array];
  return copy.sort(() => Math.random() - 0.5);
};

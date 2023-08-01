export const getRandomCardType = () => {
  const responses = ['black', 'green'];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
};

export const randomNumberWithMaxNumber = (maxNumber) => {
  let number = Math.ceil(Math.random() * 100);
  if (number > maxNumber) return randomNumberWithMaxNumber(maxNumber);
  return number;
}
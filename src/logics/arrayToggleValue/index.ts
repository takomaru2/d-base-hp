export const toggleArrayValue = <T>(array: T[], label: T): T[] => {
  const newArray = [...array];
  return newArray.includes(label)
    ? newArray.filter((item) => item !== label)
    : [...newArray, label];
};

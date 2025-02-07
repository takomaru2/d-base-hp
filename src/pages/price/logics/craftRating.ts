export const craftRating = (starLevel: number): string => {
  if (0 > starLevel && starLevel > 5) {
    throw new Error('starLevelが0未満か6以上になっちょる');
  }
  const maxLevel = 5;
  return '★'.repeat(starLevel) + '☆'.repeat(maxLevel - starLevel);
};

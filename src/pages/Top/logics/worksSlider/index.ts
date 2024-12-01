// import
//
//
// export const getDynamicClassName = (imageIndex: number): string => {
//   const offset = 1;
//   const isLeft = activeIndex === imageIndex;
//   const isHero =
//     (activeIndex + offset) % worksSlideList.length === imageIndex;
//
//   if (isLeft) {
//     return styles.imageLeft;
//   }
//   if (isHero) {
//     return styles.imageCenterLarge;
//   }
//
//   // activeIndexから何番目の右側なのかを返す
//   const rightIndex =
//     (imageIndex - activeIndex - offset + worksSlideList.length) %
//     worksSlideList.length;
//   return styles[`imageRight${rightIndex}`];
// };

/**
 * 渡したidを持つ要素までsmooth scrollさせる
 * @param id スクロールさせたい要素のid
 */
export const scrollToId = (id: string) => {
  const target = document.getElementById(id);
  if (target === null) return;
  target.scrollIntoView({
    behavior: 'smooth',
  });
};

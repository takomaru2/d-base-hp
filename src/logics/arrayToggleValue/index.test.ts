import { toggleArrayValue } from '.';

describe('toggleArrayValue', () => {
  it('配列に存在しない値は追加される', () => {
    expect(toggleArrayValue([1, 2], 3)).toEqual([1, 2, 3]);
  });

  it('配列に存在する値は削除される', () => {
    expect(toggleArrayValue([1, 2, 3], 2)).toEqual([1, 3]);
  });

  it('同じ値が複数ある場合は全て削除される', () => {
    expect(toggleArrayValue([1, 2, 3, 2], 2)).toEqual([1, 3]);
  });

  it('label が先頭にある場合は削除される', () => {
    expect(toggleArrayValue(['a', 'b', 'c'], 'a')).toEqual(['b', 'c']);
  });

  it('label が最後にある場合は削除される', () => {
    expect(toggleArrayValue(['a', 'b', 'c'], 'c')).toEqual(['a', 'b']);
  });

  it('空配列に追加できる', () => {
    expect(toggleArrayValue([], 'x')).toEqual(['x']);
  });
});

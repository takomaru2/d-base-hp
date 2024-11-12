import { FC } from 'react';
import Link from 'next/link';

type MenuListProps = {
  ulClassName: string;
  liClassName: string;
};

export const MenuList: FC<MenuListProps> = ({ ulClassName, liClassName }) => {
  const menuItems = [
    { id: '1', href: '/', label: 'ホーム' },
    { id: '2', href: '/', label: '施工実績' },
    { id: '3', href: '/', label: '価格表' },
    { id: '4', href: '/', label: 'アクセス' },
    { id: '5', href: '/', label: 'よくある質問' },
    { id: '6', href: '/', label: 'お問い合わせ' },
  ];

  return (
    <ul className={ulClassName}>
      {menuItems.map((item) => (
        <li key={item.id} className={liClassName}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

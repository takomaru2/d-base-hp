import { Logo } from '@/components/Logo';
import Image from 'next/image';
import priceImage from '@/../public/assets/top/price/priceSectionBackImage.jpg';

export default function Top() {
  return (
    <>
      <Logo />
      <Image src={priceImage} alt={''} width={300} height={300} />
    </>
  );
}

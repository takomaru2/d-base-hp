import styles from './index.module.scss';
import { CardButtonLink } from '@/pages/price/components/CardButtonLink';
import { ComponentProps, FC } from 'react';

type CardButtonLinkListProps = {
  cardButtonLinkListProps: CardButtonLinkProps[];
};

type CardButtonLinkProps = { id: string } & ComponentProps<
  typeof CardButtonLink
>;

export const CardButtonLinkList: FC<CardButtonLinkListProps> = ({
  cardButtonLinkListProps,
}) => {
  return (
    <div className={styles.container}>
      {cardButtonLinkListProps.map(({ id, craft, image, price, text }) => (
        <CardButtonLink
          key={id}
          craft={craft}
          image={image}
          price={price}
          text={text}
        />
      ))}
    </div>
  );
};

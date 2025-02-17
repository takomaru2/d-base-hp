import type { AppProps } from 'next/app';
import 'ress';
import '../styles/globals.scss';
import styles from './app.module.scss';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={styles.hero}>
        <Header />
      </div>
      <Component {...pageProps} />
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}

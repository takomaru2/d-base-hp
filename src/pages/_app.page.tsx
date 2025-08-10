import type { AppProps } from 'next/app';
import 'ress';
import '../styles/globals.scss';
import styles from './app.module.scss';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={styles.hero}>
        <Header />
      </div>
      <Component {...pageProps} />
      <Toaster position="top-center" />
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}

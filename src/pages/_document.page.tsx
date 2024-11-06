import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* ビューポート設定 */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* サイト情報 */}
        <meta
          name="description"
          content="D-baseは鳥取唯一の技術を扱うカーコーティング専門店です"
        />
        <meta
          name="keywords"
          content="カーコーティング, 自動車コーティング, 米子カーコーティング, 鳥取カーコーティング, 車の塗装保護, コーティング専門店, 車の艶出し, 車の傷防止, 車のメンテナンス, dbase, d-base"
        />
        <meta name="author" content="D-Base" />

        {/* Open Graph タグ */}
        <meta property="og:title" content="鳥取カーコーティング専門店" />
        <meta
          property="og:description"
          content="D-Baseは、鳥取専門のカーコーティング専門店として、他にない高品質のコーティング技術を提供します。愛車に特別な艶と耐久性をお求めの方へ"
        />
        <meta
          property="og:image"
          content="https://example.com/path/to/image.jpg"
        />
        <meta property="og:url" content="https://example.com/page-url" />
        <meta property="og:type" content="website" />

        {/* Favicon設定 */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* フォントの読み込み */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Revalia&family=Russo+One&display=swap"
          rel="stylesheet"
        />

        {/* テーマカラー */}
        <meta name="theme-color" content="#1c1c1c" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

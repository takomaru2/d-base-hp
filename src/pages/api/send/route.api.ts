import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  materialOptions,
  periodOption,
} from '@/pages/contact/const/contactOptions';
import { sanitizeAndEscape } from '@/pages/contact/logic/sanitizeAndEscape';

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { name, katakana, mail, phone, period, material, postContent, size } =
    req.body;

  const periodList = periodOption.map((option) => option.label);
  const materialList = materialOptions.map((option) => option.label);

  const periodIndex = Number(period) - 1;
  const materialIndex = Number(material) - 1;

  if (
    !name ||
    !katakana ||
    !mail ||
    !phone ||
    !period ||
    !material ||
    !postContent ||
    !Array.isArray(size) ||
    Number.isNaN(periodIndex) ||
    Number.isNaN(materialIndex)
  ) {
    return res.status(400).json({ error: 'リクエストデータが不正です' });
  }

  const safeName = sanitizeAndEscape(name);
  const safeKatakana = sanitizeAndEscape(katakana);
  const safeMail = sanitizeAndEscape(mail);
  const safePhone = sanitizeAndEscape(phone);
  const safePostContent = sanitizeAndEscape(postContent);

  const safeSelected =
    size.length === 0
      ? '未選択'
      : size.map((v: string) => sanitizeAndEscape(v)).join(', ');

  const safePeriod = sanitizeAndEscape(periodList[periodIndex]);
  const safeMaterial = sanitizeAndEscape(materialList[materialIndex]);

  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'gakki.nkk.0331@gmail.com',
      subject: `お問い合わせ`,
      html: `
<p>お名前: ${safeName}</p>
<p>フリガナ: ${safeKatakana}</p>
<p>メール: ${safeMail}</p>
<p>電話番号:${safePhone}</p>
<p>車のサイズ:${safeSelected}</p> 
<p>車の年数: ${safePeriod}</p>
<p>希望液剤: ${safeMaterial}</p>
<p>内容: ${safePostContent}</p>`,
    });

    if (result.error) {
      return res.status(500).json({ message: '送信エラー(Resend)' });
    }
    return res.status(200).json({ message: '送信完了' });
  } catch (error) {
    console.error('送信失敗:', error);
    return res.status(500).json({ error: '送信失敗' });
  }
}

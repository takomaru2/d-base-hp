import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  materialOptions,
  periodOption,
} from '@/pages/contact/const/contactOptions';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    name,
    katakana,
    mail,
    phone,
    period,
    material,
    postContent,
    selected,
  } = req.body;
  const size = selected.length === 0 ? '未選択' : selected.join(', ');

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
    !Array.isArray(selected) ||
    Number.isNaN(periodIndex) ||
    Number.isNaN(materialIndex)
  ) {
    return res.status(400).json({ error: 'リクエストデータが不正です' });
  }

  const periodItem = periodList[periodIndex];
  const materialItem = materialList[materialIndex];

  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'gakki.nkk.0331@gmail.com',
      subject: `お問い合わせ`,
      html: `
<p>お名前: ${name}</p>
<p>フリガナ: ${katakana}</p>
<p>メール: ${mail}</p>
<p>電話番号:${phone}</p>
<p>車のサイズ:${size}</p> 
<p>車の年数: ${periodItem}</p>
<p>希望液剤: ${materialItem}</p>
<p>内容: ${postContent}</p>`,
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

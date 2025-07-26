import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name, katakana, mail, phone, period, material, postContent } =
    req.body;

  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'gakki.nkk.0331@gmail.com',
      subject: `お問い合わせ ${name}`,
      html: `
<p>お名前: ${name}</p>
<p>フリガナ: ${katakana}</p>
<p>メール: ${mail}</p>
<p>電話番号:${phone}</p>
<p>車の年数: ${period}</p>
<p>希望液剤: ${material}</p>
<p>内容: ${postContent}</p>`,
    });

    console.log(result);

    return res.status(200).json({ message: '送信完了' });
  } catch {
    return res.status(500).json({ error: '送信失敗' });
  }
}

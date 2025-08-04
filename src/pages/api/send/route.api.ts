import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);

const periodMap: Record<string, string> = {
  '1': '1年未満',
  '2': '1年から3年',
  '3': '3年から5年',
  '4': '5年以上',
};

const materialMap: Record<string, string> = {
  '1': '液剤１',
  '2': '液剤２',
  '3': '液剤３',
};

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

  if (
    !name ||
    !katakana ||
    !mail ||
    !phone ||
    !period ||
    !material ||
    !postContent ||
    !Array.isArray(selected)
  ) {
    return res.status(400).json({ error: 'リクエストデータが不正です' });
  }

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
<p>車の年数: ${periodMap[period]}</p>
<p>希望液剤: ${materialMap[material]}</p>
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

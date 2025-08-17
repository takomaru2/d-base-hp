import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  materialOptions,
  periodOptions,
} from '@/pages/contact/const/contactOptions';
import { sanitizeAndEscape } from '@/pages/contact/logic/sanitizeAndEscape';
import { API_MESSAGES } from '@/pages/contact/const/message';

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

  const periodOption = periodOptions.find((option) => option.value === period);
  const materialOption = materialOptions.find(
    (option) => option.value === material,
  );

  if (
    !name ||
    !katakana ||
    !mail ||
    !phone ||
    !period ||
    !material ||
    !postContent ||
    !Array.isArray(size) ||
    !periodOption ||
    !materialOption
  ) {
    return res.status(400).json({ error: API_MESSAGES.BAD_REQUEST });
  }

  const safeName = sanitizeAndEscape(name);
  const safeKatakana = sanitizeAndEscape(katakana);
  const safeMail = sanitizeAndEscape(mail);
  const safePhone = sanitizeAndEscape(phone);
  const safePostContent = sanitizeAndEscape(postContent);

  const safeSelected =
    size.length === 0
      ? '未選択'
      : size.map((value: string) => sanitizeAndEscape(value)).join(', ');

  const safePeriod = sanitizeAndEscape(periodOption.label);
  const safeMaterial = sanitizeAndEscape(materialOption.label);

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
      return res.status(500).json({ message: API_MESSAGES.RESEND_ERROR });
    }
    return res.status(200).json({ message: API_MESSAGES.SEND_SUCCESS });
  } catch {
    return res.status(500).json({ error: API_MESSAGES.SEND_FAILURE });
  }
}

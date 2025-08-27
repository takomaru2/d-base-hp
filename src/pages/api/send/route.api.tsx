import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  materialOptions,
  periodOptions,
} from '@/pages/contact/const/contactOptions';
import { sanitizeAndEscape } from '@/pages/contact/logic/sanitizeAndEscape';
import { API_MESSAGES } from '@/pages/contact/const/message';
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
} from '@react-email/components';

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

  const emailProps: EmailProps = {
    safeName: sanitizeAndEscape(name),
    safeKatakana: sanitizeAndEscape(katakana),
    safeMail: sanitizeAndEscape(mail),
    safePhone: sanitizeAndEscape(phone),
    safeSelected:
      size.length === 0
        ? '未選択'
        : size.map((value: string) => sanitizeAndEscape(value)).join(', '),
    safePeriod: sanitizeAndEscape(periodOption.label),
    safeMaterial: sanitizeAndEscape(materialOption.label),
    safePostContent: sanitizeAndEscape(postContent),
  };

  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'gakki.nkk.0331@gmail.com',
      subject: `お問い合わせ`,
      react: <Email {...emailProps} />,
    });

    if (result.error) {
      return res.status(500).json({ message: API_MESSAGES.RESEND_ERROR });
    }
    return res.status(200).json({ message: API_MESSAGES.SEND_SUCCESS });
  } catch {
    return res.status(500).json({ error: API_MESSAGES.SEND_FAILURE });
  }
}

function Email({
  safeName,
  safeKatakana,
  safeMail,
  safePhone,
  safeSelected,
  safePeriod,
  safeMaterial,
  safePostContent,
}: EmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#fff' }}>
        <Container style={{ padding: '24px', fontFamily: 'sans-serif' }}>
          <Heading>お問い合わせ内容</Heading>
          <Text>お名前: {safeName}</Text>
          <Text>フリガナ: {safeKatakana}</Text>
          <Text>メール: {safeMail}</Text>
          <Text>電話番号: {safePhone}</Text>
          <Text>車のサイズ: {safeSelected}</Text>
          <Text>車の年数: {safePeriod}</Text>
          <Text>希望液剤: {safeMaterial}</Text>
          <Text>内容: {safePostContent}</Text>
        </Container>
      </Body>
    </Html>
  );
}

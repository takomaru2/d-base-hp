import sanitizeHtml from 'sanitize-html';
import htmlEscape from 'html-escape';

export const sanitizeAndEscape = (input: unknown): string => {
  const text = String(input ?? '');
  const sanitized = sanitizeHtml(text, {
    allowedTags: [],
    allowedAttributes: {},
  });

  return htmlEscape(sanitized);
};

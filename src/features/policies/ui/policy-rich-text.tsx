'use client';

import type { ReactNode } from 'react';

import { Link } from '@/i18n/navigation';

const LINK_PATTERN =
  /(https:\/\/hostixie\.com\/en\/contact|info@hostixie\.com|hostixie\.com|Cookie Policy[.;]?|Privacy Policy[.;]?)/g;

const BOLD_PHRASE_PATTERN = /\b(data controller|data processor)\b/gi;

const LABEL_PREFIXES = new Set([
  'Company',
  'Email',
  'Contact Page',
  'Registration Number',
  'Registered Address',
  'Website',
]);

const COOKIE_TYPE_PATTERN =
  /^(Essential|Functional|Analytics|Advertising|Social Media|Session|Persistent) Cookies$/;

const EM_DASH_BULLET_PATTERN = /^(.+?)\s+[—–-]\s+(.+)$/;

const isSubtitleParagraph = (text: string) => {
  if (COOKIE_TYPE_PATTERN.test(text)) {
    return true;
  }

  return !text.includes('.') && !text.endsWith(':');
};

const renderBoldPhrases = (text: string, keyPrefix: string): ReactNode => {
  const parts = text.split(BOLD_PHRASE_PATTERN);

  if (parts.length === 1) {
    return text;
  }

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <span key={`${keyPrefix}-phrase-${index}`} className="font-bold">
        {part}
      </span>
    ) : (
      part
    ),
  );
};

const renderLinks = (
  text: string,
  policyId?: string,
  keyPrefix = 'link',
): ReactNode[] => {
  const parts = text.split(LINK_PATTERN);

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`;

    if (part === 'info@hostixie.com') {
      return (
        <Link
          key={key}
          href="mailto:info@hostixie.com"
          className="text-primary font-bold"
        >
          info@hostixie.com
        </Link>
      );
    }

    if (part === 'hostixie.com') {
      return (
        <Link key={key} href="/" className="text-primary font-bold">
          hostixie.com
        </Link>
      );
    }

    if (part === 'https://hostixie.com/en/contact') {
      return (
        <Link key={key} href="/contact" className="text-primary font-bold">
          https://hostixie.com/en/contact
        </Link>
      );
    }

    if (part.startsWith('Cookie Policy')) {
      const suffix = part.slice('Cookie Policy'.length);

      if (policyId === 'cookie-policy') {
        return (
          <span key={key}>
            {renderBoldPhrases('Cookie Policy', key)}
            {suffix}
          </span>
        );
      }

      return (
        <span key={key}>
          <Link href="/cookie-policy" className="text-primary font-bold">
            Cookie Policy
          </Link>
          {suffix}
        </span>
      );
    }

    if (part.startsWith('Privacy Policy')) {
      const suffix = part.slice('Privacy Policy'.length);

      if (policyId === 'privacy-policy') {
        return (
          <span key={key}>
            {renderBoldPhrases('Privacy Policy', key)}
            {suffix}
          </span>
        );
      }

      return (
        <span key={key}>
          <Link href="/privacy-policy" className="text-primary font-bold">
            Privacy Policy
          </Link>
          {suffix}
        </span>
      );
    }

    return renderBoldPhrases(part, key);
  });
};

export const PolicyRichText = ({
  text,
  policyId,
}: {
  text: string;
  policyId?: string;
}) => {
  if (COOKIE_TYPE_PATTERN.test(text)) {
    return <span className="font-bold">{text}</span>;
  }

  const emDashMatch = text.match(EM_DASH_BULLET_PATTERN);

  if (emDashMatch && emDashMatch[1].length <= 60) {
    const separator = text.includes('—')
      ? '—'
      : text.includes('–')
        ? '–'
        : '-';

    return (
      <>
        <span className="font-bold">{emDashMatch[1].trim()}</span>
        {` ${separator} `}
        {renderLinks(emDashMatch[2].trim(), policyId, 'emdash')}
      </>
    );
  }

  const labelMatch = text.match(/^([^:]+):\s(.+)$/);

  if (labelMatch && LABEL_PREFIXES.has(labelMatch[1].trim())) {
    return (
      <>
        <span className="font-bold">{labelMatch[1]}:</span>{' '}
        {renderLinks(labelMatch[2], policyId, 'label')}
      </>
    );
  }

  if (text.startsWith('Operating under the brand ')) {
    return (
      <>
        <span className="font-bold">Operating under the brand</span>{' '}
        {renderLinks(text.slice('Operating under the brand '.length), policyId)}
      </>
    );
  }

  const meansIndex = text.indexOf(' means ');

  if (meansIndex > 0 && /["\u201c\u201d]/.test(text.slice(0, meansIndex))) {
    return (
      <>
        <span className="font-bold">{text.slice(0, meansIndex)}</span>
        {' means '}
        {renderLinks(text.slice(meansIndex + 7), policyId, 'means')}
      </>
    );
  }

  return <>{renderLinks(text, policyId)}</>;
};

export { isSubtitleParagraph };

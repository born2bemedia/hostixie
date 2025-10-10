import { getTranslations } from 'next-intl/server';

import { PolicyHeader } from '@/features/policies/ui/policy-header';
import { PolicyRender } from '@/features/policies/ui/policy-render';
import { PolicySection } from '@/features/policies/ui/policy-section';
import { PolicyText } from '@/features/policies/ui/policy-text';

import { List } from '@/shared/ui/kit/list';

export default async function CookiePolicy() {
  const t = await getTranslations('cookiePolicy');

  return (
    <main>
      <PolicyHeader name={t('name', { fallback: 'Cookie Policy' })} />
      <PolicyRender
        sticky
        navigation={[
          {
            label: t('navigation.0', {
              fallback: 'Welcome to Our Cookie Policy',
            }),
            href: '#welcome-to-our-cookie-policy',
          },
          {
            label: t('navigation.1', { fallback: 'What Are Cookies, Anyway?' }),
            href: '#what-are-cookies-anyway',
          },
          {
            label: t('navigation.2', {
              fallback: 'How We Respond to "Do Not Track" (DNT)',
            }),
            href: '#how-we-respond-to-do-not-track-dnt',
          },
          {
            label: t('navigation.3', { fallback: 'Why We Use Cookies' }),
            href: '#why-we-use-cookies',
          },
          {
            label: t('navigation.4', { fallback: 'Third-Party Cookies' }),
            href: '#third-party-cookies',
          },
          {
            label: t('navigation.5', {
              fallback: 'Managing Your Cookie Preferences',
            }),
            href: '#managing-your-cookie-preferences',
          },
          {
            label: t('navigation.6', { fallback: 'Policy Updates' }),
            href: '#policy-updates',
          },
          {
            label: t('navigation.7', { fallback: 'Age Restrictions' }),
            href: '#age-restrictions',
          },
          {
            label: t('navigation.8', {
              fallback: 'Got Questions? We’re Here to Help.',
            }),
            href: '#got-questions-were-here-to-help',
          },
        ]}
      >
        <PolicySection
          id="welcome-to-our-cookie-policy"
          title={t('children.0', { fallback: 'Welcome to Our Cookie Policy' })}
        >
          <PolicyText>
            {t('children.1.0', {
              fallback:
                'This document explains how [Company Name], registration number [Company Registration Number], registered at [Full Registered Address], the team behind Hostixie, uses cookies and similar tracking tools across our website, hostixie.com. These little data helpers allow us to recognize you, improve your experience, and keep the website running smoothly. By continuing to use our site, you agree to the cookie practices described here.',
            })}
            <br />
            <br />
            {t('children.1.1', {
              fallback:
                'We believe in transparency, so let’s break it down clearly.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="what-are-cookies-anyway"
          title={t('children.2', { fallback: 'What Are Cookies, Anyway?' })}
        >
          <PolicyText>
            {t('children.3', {
              fallback:
                'We use different kinds of cookies, each with its own job to do:',
            })}
          </PolicyText>
          <PolicyText>
            <span className="font-bold">
              {t('children.4.0', { fallback: 'Essential Cookies' })}{' '}
            </span>
            <br />
            {t('children.4.1', {
              fallback:
                'These are the must-haves. They power the core features of our website, such as security, form submissions, and login access. Without them, parts of the site simply wouldn’t work.',
            })}
          </PolicyText>
          <PolicyText>
            <span className="font-bold">
              {t('children.4.2', { fallback: 'Functional Cookies' })}
            </span>{' '}
            <br />
            {t('children.4.3', {
              fallback:
                'These remember your choices, like language settings or display preferences—so you don’t have to keep resetting them every time you visit.',
            })}
          </PolicyText>
          <PolicyText>
            <span className="font-bold">
              {t('children.4.4', { fallback: 'Analytics Cookies' })}
            </span>
            <br />{' '}
            {t('children.4.5', {
              fallback:
                'These help us understand how visitors use our website. We collect anonymous data like page visits and clicks, which helps us improve navigation, speed, and content relevance.',
            })}
          </PolicyText>
          <PolicyText>
            <span className="font-bold">
              {t('children.4.6', { fallback: 'Advertising Cookies' })}
            </span>{' '}
            <br />{' '}
            {t('children.4.7', {
              fallback:
                'Used to deliver ads that are more tailored to your interests. They also help control how often you see the same ad and measure the performance of our campaigns.',
            })}
          </PolicyText>
          <PolicyText>
            <span className="font-bold">
              {t('children.4.8', { fallback: 'Social Media Cookies' })}
            </span>{' '}
            <br />{' '}
            {t('children.4.9', {
              fallback:
                'Set by social networks we integrate with (like Facebook or LinkedIn), these cookies allow you to share content and engage with our brand across platforms. They may also track you elsewhere on the web, depending on your settings.',
            })}
          </PolicyText>
          <PolicyText>
            <span className="font-bold">
              {t('children.4.10', { fallback: 'Session Cookies' })}
            </span>{' '}
            <br />{' '}
            {t('children.4.11', {
              fallback:
                "Temporary cookies that last only while your browser is open. They're used for things like keeping you logged in while you navigate between pages.",
            })}
          </PolicyText>
          <PolicyText>
            <span className="font-bold">
              {t('children.4.12', { fallback: 'Persistent Cookies' })}
            </span>{' '}
            <br />{' '}
            {t('children.4.13', {
              fallback:
                'These stay on your device for a set period, helping us remember who you are between visits, like your login info or cart items.',
            })}
          </PolicyText>
          <PolicyText>
            <span className="font-bold">
              {t('children.5.0', { fallback: 'Note:' })}
            </span>{' '}
            {t('children.5.1', {
              fallback:
                'Blocking or disabling certain cookies might affect how our website works for you.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="how-we-respond-to-do-not-track-dnt"
          title={t('children.6', {
            fallback: 'How We Respond to "Do Not Track" (DNT)',
          })}
        >
          <PolicyText>
            {t('children.7', {
              fallback:
                'Some browsers let you send a “Do Not Track” request. If we detect one, we do our best to limit unnecessary data collection. That said, third-party services we use may not honor DNT signals the same way, so please check their policies too.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="why-we-use-cookies"
          title={t('children.8', { fallback: 'Why We Use Cookies' })}
        >
          <PolicyText>
            {t('children.9', {
              fallback: 'Here’s how cookies help us serve you better:',
            })}
          </PolicyText>
          <List
            values={[
              t('children.10.0', {
                fallback:
                  'To power key website features (like forms, logins, and security)',
              }),
              t('children.10.1', {
                fallback:
                  'To understand visitor behavior and improve site performance',
              }),
              t('children.10.2', {
                fallback:
                  'To customize your experience with remembered preferences',
              }),
              t('children.10.3', {
                fallback:
                  'To deliver relevant advertising based on your interests',
              }),
              t('children.10.4', {
                fallback:
                  'To support third-party tools and social integrations',
              }),
            ]}
          />
        </PolicySection>
        <PolicySection id="third-party-cookies" title="Third-Party Cookies">
          <PolicyText>
            {t('children.11', {
              fallback:
                'We partner with third-party tools that may also use cookies,',
            })}
          </PolicyText>
          <List
            values={[
              <span key="ga">
                <span className="font-bold">
                  {t('children.13.0.0', {
                    fallback: 'Google Analytics',
                  })}
                </span>{' '}
                –{' '}
                {t('children.13.0.1', {
                  fallback: 'for usage stats and performance insights',
                })}
              </span>,
              <span key="meta-pixel">
                <span className="font-bold">
                  {t('children.13.1.0', {
                    fallback: 'Meta Pixel (Facebook)',
                  })}
                </span>{' '}
                –{' '}
                {t('children.13.1.1', {
                  fallback: 'for ad personalization and measurement',
                })}
              </span>,
              <span key="youtube">
                <span className="font-bold">
                  {t('children.13.2.0', {
                    fallback: 'YouTube, Vimeo, etc.',
                  })}
                </span>{' '}
                –{' '}
                {t('children.13.2.1', {
                  fallback: 'for embedded media playback',
                })}
              </span>,
              <span key="crm">
                <span className="font-bold">
                  {t('children.13.3.0', {
                    fallback: 'CRM, chat, or marketing tools',
                  })}
                </span>{' '}
                –{' '}
                {t('children.13.3.1', {
                  fallback: 'to support communication and tracking',
                })}
              </span>,
            ]}
          />
          <PolicyText>
            {t('children.14', {
              fallback:
                'Each of these services has its own privacy and cookie practices, which you should review if you want to know how they use your data.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="managing-your-cookie-preferences"
          title={t('children.15', {
            fallback: 'Managing Your Cookie Preferences',
          })}
        >
          <PolicyText>
            {t('children.16', {
              fallback:
                "You're in control. You can manage cookies in your browser settings—delete them, block them, or receive alerts when a site tries to set one. Here’s how:",
            })}
          </PolicyText>
          <List
            values={[
              <span key="google-chrome">
                <span className="font-bold">
                  {t('children.17.0.0', {
                    fallback: 'Google Chrome:',
                  })}{' '}
                </span>
                {t('children.17.0.1', {
                  fallback:
                    'Settings > Privacy & Security > Cookies and other site data',
                })}
              </span>,
              <span key="firefox">
                <span className="font-bold">
                  {t('children.17.1.0', {
                    fallback: 'Mozilla Firefox:',
                  })}{' '}
                </span>
                {t('children.17.1.1', {
                  fallback:
                    'Preferences > Privacy > Security > Cookies and Site Data',
                })}
              </span>,
              <span key="safari">
                <span className="font-bold">
                  {t('children.17.2.0', {
                    fallback: 'Safari:',
                  })}{' '}
                </span>
                {t('children.17.2.1', {
                  fallback: 'Preferences > Privacy > Manage Website Data',
                })}
              </span>,
              <span key="edge">
                <span className="font-bold">
                  {t('children.17.3.0', {
                    fallback: 'Microsoft Edge:',
                  })}{' '}
                </span>
                {t('children.17.3.1', {
                  fallback: 'Settings > Cookies and Site Permissions',
                })}
              </span>,
            ]}
          />
          <PolicyText>
            {t('children.18', {
              fallback:
                'Keep in mind: disabling cookies might limit your experience on our site.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="policy-updates"
          title={t('children.19', {
            fallback: 'Policy Updates',
          })}
        >
          <PolicyText>
            {t('children.20', {
              fallback:
                'We may update this Cookie Policy from time to time as technology or legal standards evolve. If changes are significant, we’ll do our best to notify you. The latest version will always be available here.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="age-restrictions"
          title={t('children.21', {
            fallback: 'Age Restrictions',
          })}
        >
          <PolicyText>
            {t('children.22', {
              fallback:
                'Our website is not intended for individuals under the age of 18. We do not knowingly collect or solicit personal information from anyone under 18 years of age. If we learn that we have collected personal information from a child under 18 without verification of parental consent, we will delete that information as quickly as possible.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="got-questions-were-here-to-help"
          title={t('children.23', {
            fallback: 'Got Questions? We’re Here to Help.',
          })}
        >
          <PolicyText>
            {t('children.24', {
              fallback:
                'If you want to ask anything about this Cookie Policy — or our use of cookies in general, just reach out:',
            })}
          </PolicyText>
          <List
            values={[
              <span key="email">
                {t('children.25.0', {
                  fallback: 'Email:',
                })}{' '}
                <span className="font-bold">info@hostixie.com</span>
              </span>,
              <span key="phone">
                {t('children.25.1', {
                  fallback: 'Phone:',
                })}{' '}
                <span className="font-bold">[Insert Phone Number]</span>
              </span>,
              <span key="contact-page">
                {t('children.25.2', {
                  fallback: 'Contact Page:',
                })}{' '}
                <span className="font-bold">[Insert Contact Page URL]</span>
              </span>,
            ]}
          />
        </PolicySection>
      </PolicyRender>
    </main>
  );
}

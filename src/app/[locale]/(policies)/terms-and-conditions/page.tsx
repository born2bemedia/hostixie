import { getTranslations } from 'next-intl/server';

import { PolicyHeader } from '@/features/policies/ui/policy-header';
import { PolicyRender } from '@/features/policies/ui/policy-render';
import { PolicySection } from '@/features/policies/ui/policy-section';
import { PolicyText } from '@/features/policies/ui/policy-text';

import { List } from '@/shared/ui/kit/list';

export default async function TermsAndConditions() {
  const t = await getTranslations('termsAndConditions');

  return (
    <>
      <PolicyHeader name={t('title', { fallback: 'Terms and Conditions' })} />
      <PolicyRender
        navigation={[
          {
            label: t('navigation.0', { fallback: 'General Overview' }),
            href: '#general-overview',
          },
          {
            label: t('navigation.1', { fallback: 'Usage License' }),
            href: '#usage-license',
          },
          {
            label: t('navigation.2', { fallback: 'Minimum Age Requirement' }),
            href: '#minimum-age-requirement',
          },
          {
            label: t('navigation.3', { fallback: 'Key Definitions' }),
            href: '#key-definitions',
          },
          {
            label: t('navigation.4', { fallback: 'Prohibited Activities' }),
            href: '#prohibited-activities',
          },
          {
            label: t('navigation.5', {
              fallback: 'User Submissions and Feedback',
            }),
            href: '#user-submissions-and-feedback',
          },
          {
            label: t('navigation.6', { fallback: 'Consent to Terms' }),
            href: '#consent-to-terms',
          },
          {
            label: t('navigation.7', {
              fallback: 'Changes to Terms and Conditions',
            }),
            href: '#changes-to-terms-and-conditions',
          },
          {
            label: t('navigation.8', {
              fallback: 'Website Functionality and Updates',
            }),
            href: '#website-functionality-and-updates',
          },
          {
            label: t('navigation.9', {
              fallback: 'Third-Party Content and Services',
            }),
            href: '#third-party-content-and-services',
          },
          {
            label: t('navigation.10', { fallback: 'Agreement Termination' }),
            href: '#agreement-termination',
          },
          {
            label: t('navigation.11', {
              fallback: 'Links to External Websites',
            }),
            href: '#links-to-external-websites',
          },
          {
            label: t('navigation.12', {
              fallback: 'Cookies and Tracking Technologies',
            }),
            href: '#cookies-and-tracking-technologies',
          },
          {
            label: t('navigation.13', { fallback: 'Copyright Concerns' }),
            href: '#copyright-concerns',
          },
          {
            label: t('navigation.14', { fallback: 'No Warranties Disclaimer' }),
            href: '#no-warranties-disclaimer',
          },
          {
            label: t('navigation.15', { fallback: 'Limitation of Liability' }),
            href: '#limitation-of-liability',
          },
          {
            label: t('navigation.16', { fallback: 'Indemnification' }),
            href: '#indemnification',
          },
          {
            label: t('navigation.17', { fallback: 'Severability' }),
            href: '#severability',
          },
          {
            label: t('navigation.18', { fallback: 'Waiver of Rights' }),
            href: '#waiver-of-rights',
          },
          {
            label: t('navigation.19', { fallback: 'Entire Agreement' }),
            href: '#entire-agreement',
          },
          {
            label: t('navigation.20', { fallback: 'Modifications to Terms' }),
            href: '#modifications-to-terms',
          },
          {
            label: t('navigation.21', {
              fallback: 'Intellectual Property Rights',
            }),
            href: '#intellectual-property-rights',
          },
          {
            label: t('navigation.22', {
              fallback: 'Dispute Resolution and Arbitration',
            }),
            href: '#dispute-resolution-and-arbitration',
          },
          {
            label: t('navigation.23', { fallback: 'Governing Law' }),
            href: '#governing-law',
          },
          {
            label: t('navigation.24', {
              fallback: 'User Submissions and Public Content',
            }),
            href: '#user-submissions-and-public-content',
          },
          {
            label: t('navigation.25', { fallback: 'Promotional Campaigns' }),
            href: '#promotional-campaigns',
          },
          {
            label: t('navigation.26', { fallback: 'Errors and Omissions' }),
            href: '#errors-and-omissions',
          },
          {
            label: t('navigation.27', { fallback: 'Disclaimer' }),
            href: '#disclaimer',
          },
          {
            label: t('navigation.28', { fallback: 'Contact Information' }),
            href: '#contact-information',
          },
        ]}
      >
        <PolicySection
          id="general-overview"
          title={t('children.0', { fallback: 'General Overview' })}
        >
          <PolicyText>
            {t('children.1.0', {
              fallback:
                'By using this website or submitting a service request through Hostixie, you acknowledge that you have read, understood, and agreed to the Terms and Conditions described herein. These terms govern your use of the website and all communications between you and',
            })}
            [Company Name],{' '}
            {t('children.1.1', {
              fallback: 'the legal entity behind Hostixie, registered under',
            })}
            [Registration Number] {t('children.1.2', { fallback: 'at' })}{' '}
            [Registered Address].
            <br />
            <br />
            {t('children.2', {
              fallback:
                'Under no circumstances shall Hostixie, its owners, employees, or agents be held responsible for any direct, indirect, incidental, consequential, or special damages, including but not limited to loss of data, loss of profits, or interruption of business, arising from the use or inability to use any content or services offered via this website. Any costs related to repair, servicing, or data restoration resulting from your use of this site remain your responsibility.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="usage-license"
          title={t('children.3', { fallback: 'Usage License' })}
        >
          <PolicyText>
            {t('children.4.0', {
              fallback:
                'These Terms and Conditions constitute a legal agreement between you (whether as an individual or as a representative of an entity) and',
            })}
            [Company Name]{' '}
            {t('children.4.1', {
              fallback:
                'and provider of related digital services (referred to as "the Service").',
            })}{' '}
            <span className="text-primary font-bold">hostixie.com</span>{' '}
            {t('children.4.2', {
              fallback:
                'and provider of related digital services (referred to as "the Service").',
            })}
            <br />
            <br />
            {t('children.4.3', {
              fallback:
                'By using our website and services, you agree to comply with these Terms in full. If you do not agree with any part of these Terms, you should immediately discontinue use of the site. We reserve the right to suspend or terminate access to your account or restrict your use of the service at our sole discretion, without prior notice, if you are found to be in breach of any provision of these Terms.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="minimum-age-requirement"
          title={t('children.5', { fallback: 'Minimum Age Requirement' })}
        >
          <PolicyText>
            {t('children.6', {
              fallback:
                'To use our services, you must be at least 18 years of age, or the minimum legal age required to enter into binding agreements in your country of residence. If you do not meet this requirement, you may not access or use certain areas of the website or any services requiring contractual consent.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="key-definitions"
          title={t('children.7', { fallback: 'Key Definitions' })}
        >
          <PolicyText>
            {t('children.8', {
              fallback:
                'For clarity, the following terms used throughout this agreement are defined as follows:',
            })}
          </PolicyText>
          <List
            textClassName="opacity-80"
            values={[
              t('children.9.0', {
                fallback:
                  '“Cookies”: Small data files placed on your device by the website to enhance performance, analyze usage, and remember user preferences.',
              }),
              t('children.9.1', {
                fallback:
                  '“Company”: Refers to [Company Name], the entity legally operating under the Hostixie label, located at [Registered Address].',
              }),
              t('children.9.2', {
                fallback:
                  '“Country”: The jurisdiction under which the company is incorporated and legally operates, namely [Country Name].',
              }),
              t('children.9.3', {
                fallback:
                  '“Device”: Any internet-capable hardware (e.g., smartphone, tablet, desktop computer) used to access the website or services.',
              }),
              t('children.9.4', {
                fallback:
                  '“Service”: All digital services and solutions offered through the Hostixie platform, including but not limited to web hosting and web development.',
              }),
              t('children.9.5', {
                fallback:
                  '“Third-Party Services”: Any external parties, such as advertisers, service providers, or marketing affiliates, whose content, offers, or functionality may be featured on or linked from our website.',
              }),
              t('children.9.6', {
                fallback:
                  '“Website”: Refers to the official online presence of Hostixie, accessible via hostixie.com.',
              }),
              t('children.9.7', {
                fallback:
                  '“You” / “User”: The individual or legal entity accessing or registering to use the services offered via the Hostixie website.',
              }),
            ]}
          />
        </PolicySection>
        <PolicySection
          id="prohibited-activities"
          title={t('children.10', { fallback: 'Prohibited Activities' })}
        >
          <PolicyText>
            {t('children.11', {
              fallback:
                'By using the Hostixie website or its services, you agree not to engage in any of the following actions:',
            })}
          </PolicyText>
          <List
            values={[
              t('children.12.0', {
                fallback:
                  'Remove, alter, or conceal any intellectual property notices, including copyright, trademark, or branding displayed by Hostixie or its partners.',
              }),
              t('children.12.1', {
                fallback:
                  'Reproduce, license, sell, lease, rent, distribute, sublicense, or otherwise make any part of the website or its features available to third parties for commercial purposes.',
              }),
              t('children.12.2', {
                fallback:
                  'Alter, adapt, decompile, disassemble, reverse engineer, or create derivative works from any portion of the website or its infrastructure.',
              }),
            ]}
          />
        </PolicySection>
        <PolicySection
          id="user-submissions-and-feedback"
          title={t('children.13', {
            fallback: 'User Submissions and Feedback',
          })}
        >
          <PolicyText>
            {t('children.14', {
              fallback:
                'Any comments, suggestions, proposals, or creative input you provide in connection with our website or services (collectively, “Feedback”) will be considered non-confidential and fully owned by Hostixie. We reserve the unrestricted right to use, modify, publish, or distribute such Feedback for any purpose, commercial or otherwise, without obligation to compensate or credit you.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="consent-to-terms"
          title={t('children.15', { fallback: 'Consent to Terms' })}
        >
          <PolicyText>
            {t('children.16', {
              fallback:
                'By using our website, creating an account, submitting a request, or engaging with any of our services, you confirm that you accept and agree to these Terms and Conditions. We are committed to transparency, and we encourage all users to review this page regularly for the latest updates.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="changes-to-terms-and-conditions"
          title={t('children.17', {
            fallback: 'Changes to Terms and Conditions',
          })}
        >
          <PolicyText>
            {t('children.18.0', {
              fallback:
                "Hostixie may change or suspend parts of the service at any time, temporarily or permanently, with or without prior notice. You may cease using the service at any point, and you're not required to notify us if you do. However, if we restrict access to your account, you may no longer retrieve stored data or access related materials.",
            })}
            <br />
            <br />
            {t('children.18.1', {
              fallback:
                'We may also revise these Terms when necessary to reflect modifications to our services or changes in applicable law. Where required, we’ll provide reasonable notice of such updates (e.g., via email or on-site notification). Continued use of our platform after updates means you accept the revised Terms. If you do not accept the new version, you may discontinue use and request account deletion.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="website-functionality-and-updates"
          title={t('children.19', {
            fallback: 'Website Functionality and Updates',
          })}
        >
          <PolicyText>
            {t('children.20', {
              fallback:
                'We retain the right to alter, limit, suspend, or discontinue any aspect of the website or its features at any time, for any reason, without prior notice or liability.',
            })}
            <br />
            <br />
            {t('children.21', {
              fallback:
                'From time to time, we may roll out enhancements or technical updates to improve performance, fix bugs, or add new capabilities ("Updates"). These Updates may alter or remove existing features. You agree that:',
            })}
          </PolicyText>
          <List
            values={[
              t('children.22.0', {
                fallback:
                  'We are not obligated to provide any specific Updates;',
              }),
              t('children.22.1', {
                fallback:
                  'All Updates form part of the website and are governed by these Terms.',
              }),
            ]}
          />
        </PolicySection>
        <PolicySection
          id="third-party-content-and-services"
          title={t('children.23', {
            fallback: 'Third-Party Content and Services',
          })}
        >
          <PolicyText>
            {t('children.24', {
              fallback:
                'Our website may contain links or integrate services provided by third-party companies (such as content, apps, or tools). While we may display such content for your convenience, we do not control or guarantee the accuracy, legality, or quality of these third-party services. Your use of such services is at your own risk and subject to the terms of those third parties. We are not responsible for any loss or damage arising from your interaction with external sites or tools.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="agreement-termination"
          title={t('children.25', { fallback: 'Agreement Termination' })}
        >
          <PolicyText>
            {t('children.26', {
              fallback:
                'These Terms remain in effect until terminated by either you or Hostixie. We reserve the right to terminate or suspend your access at any time, without prior notice, for any reason, including a breach of these Terms. You may terminate this agreement by ceasing to use the website and deleting any data or copies you may have stored.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="links-to-external-websites"
          title={t('children.27', { fallback: 'Links to External Websites' })}
        >
          <PolicyText>
            {t('children.28', {
              fallback:
                'Please note that these Terms apply exclusively to services provided by Hostixie on our platform. We may include links to third-party websites that operate independently of us. We do not control, monitor, or endorse the content or practices of these external sites. Once you leave our website, any activity is subject to the linked website’s own policies, which we recommend reviewing separately.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="cookies-and-tracking-technologies"
          title={t('children.29', {
            fallback: 'Cookies and Tracking Technologies',
          })}
        >
          <PolicyText>
            {t('children.30', {
              fallback:
                'Our website uses cookies to remember user preferences, analyze site usage, and improve performance. Cookies are small data files stored in your browser. While they are not strictly necessary to navigate the site, disabling cookies may affect functionality (e.g., login sessions or video playback).',
            })}
          </PolicyText>
          <PolicyText>
            {t('children.31', {
              fallback:
                'We do not use cookies to collect personally identifiable information. For full details, please consult our Cookie Policy.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="copyright-concerns"
          title={t('children.32', { fallback: 'Copyright Concerns' })}
        >
          <PolicyText>
            {t('children.33', {
              fallback:
                'If you believe that any material on our website infringes your copyright, please contact us with the following information:',
            })}
          </PolicyText>
          <List
            values={[
              t('children.34.0', {
                fallback: 'Your full name and authorized signature;',
              }),
              t('children.34.1', {
                fallback: 'A description or link to the content in question;',
              }),
              t('children.34.2', {
                fallback:
                  'Proof of ownership or legal authority to act on behalf of the rights holder;',
              }),
              t('children.34.3', {
                fallback: 'Your contact details (email, phone, address);',
              }),
              t('children.34.4', {
                fallback:
                  'A good-faith statement asserting that the use of the material is unauthorized;',
              }),
              t('children.34.5', {
                fallback:
                  'A declaration that the information provided is accurate, made under penalty of perjury.',
              }),
            ]}
          />
          <PolicyText>
            {t('children.35', {
              fallback:
                'We will respond to copyright concerns in accordance with applicable intellectual property laws.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="no-warranties-disclaimer"
          title={t('children.36', { fallback: 'No Warranties Disclaimer' })}
        >
          <PolicyText>
            {t('children.37', {
              fallback:
                'The website and services offered through Hostixie are provided “as is” and “as available,” without guarantees of any kind. To the fullest extent allowed by law, Hostixie, its partners, affiliates, service providers, and licensors expressly disclaim all warranties, express, implied, statutory, or otherwise. This includes, but is not limited to, warranties of merchantability, suitability for a specific purpose, ownership rights, and non-infringement.',
            })}
          </PolicyText>
          <PolicyText>
            {t('children.38', {
              fallback: 'We do not guarantee that:',
            })}
          </PolicyText>
          <List
            values={[
              t('children.39.0', {
                fallback:
                  'The website will function without errors or interruptions;',
              }),
              t('children.39.1', {
                fallback:
                  'The services will meet your expectations or achieve desired outcomes;',
              }),
              t('children.39.2', {
                fallback:
                  'The site will be compatible with your systems or software;',
              }),
              t('children.39.4', {
                fallback:
                  'Any errors will be fixed, or that content is accurate, up-to-date, or complete;',
              }),
              t('children.39.4', {
                fallback:
                  'The website, its servers, or communications sent from us are free from malware, viruses, or harmful code.',
              }),
            ]}
          />
          <PolicyText>
            {t('children.40', {
              fallback:
                'Some jurisdictions do not permit certain exclusions or limitations, so specific sections of this disclaimer may not apply to you.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="limitation-of-liability"
          title={t('children.41', { fallback: 'Limitation of Liability' })}
        >
          <PolicyText>
            {t('children.42.0', {
              fallback:
                'Regardless of any potential losses incurred, the total liability of Hostixie or its suppliers, for any claims related to your use of the website or services, will be limited to the total amount you paid for those services.',
            })}
            <br />
            <br />
            {t('children.42.1', {
              fallback:
                'To t he maximum extent permitted by law, Hostixie shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:',
            })}
            <br />
          </PolicyText>
          <List
            values={[
              t('children.43.0', {
                fallback: 'Loss of profits or data,',
              }),
              t('children.43.1', {
                fallback: 'Downtime or service interruption,',
              }),
              t('children.43.2', {
                fallback: 'Personal injury,',
              }),
              t('children.43.3', {
                fallback: 'Breach of privacy,',
              }),
              t('children.43.4', {
                fallback:
                  'Or damages resulting from use or inability to use the service, third-party integrations, or associated hardware/software, even if we were previously advised of such risks.',
              }),
            ]}
          />
        </PolicySection>
        <PolicySection
          id="indemnification"
          title={t('children.44', { fallback: 'Indemnification' })}
        >
          <PolicyText>
            {t('children.45', {
              fallback:
                'You agree to defend, indemnify, and hold harmless Hostixie, its directors, affiliates, employees, contractors, licensors, and partners from any claims, losses, liabilities, damages, or expenses (including legal fees) arising out of or related to:',
            })}
          </PolicyText>
          <List
            values={[
              t('children.46.0', {
                fallback: 'Your use of the website or services;',
              }),
              t('children.46.1', {
                fallback: 'Any violation of these Terms or applicable laws;',
              }),
              t('children.46.2', {
                fallback: 'Infringement of third-party rights.',
              }),
            ]}
          />
        </PolicySection>
        <PolicySection
          id="severability"
          title={t('children.47', { fallback: 'Severability' })}
        >
          <PolicyText>
            {t('children.48', {
              fallback:
                'If any part of these Terms is found to be unenforceable or invalid by a competent court, the remaining provisions will remain fully effective and enforceable. This agreement, along with our Privacy Policy and other posted legal notices, constitutes the entire understanding between you and Hostixie regarding use of the website.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="waiver-of-rights"
          title={t('children.49', { fallback: 'Waiver of Rights' })}
        >
          <PolicyText>
            {t('children.50', {
              fallback:
                'Any failure by Hostixie to enforce a particular provision does not waive our right to do so in the future. No waiver shall be deemed a continuing waiver of any other term or condition.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="entire-agreement"
          title={t('children.51', { fallback: 'Entire Agreement' })}
        >
          <PolicyText>
            {t('children.52', {
              fallback:
                'These Terms constitute the full agreement between you and Hostixie regarding the use of our website and services. Any additional terms for specific services or promotions will be provided at the time of engagement and are considered part of this Agreement upon acceptance.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="modifications-to-terms"
          title={t('children.53', { fallback: 'Modifications to Terms' })}
        >
          <PolicyText>
            {t('children.54', {
              fallback:
                'Hostixie reserves the right to revise these Terms at any time. If changes are substantial, we will provide notice (e.g., via email or on the website) at least 30 days before new terms take effect. Your continued use of the website or services after changes go live constitutes your agreement to be bound by the updated terms.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="intellectual-property-rights"
          title={t('children.55', { fallback: 'Intellectual Property Rights' })}
        >
          <PolicyText>
            {t('children.56.0', {
              fallback:
                'All content, branding, design elements, graphics, software, and data on this website are the property of Hostixie or its content providers and are protected by international copyright and trademark laws.',
            })}
            <br />
            <br />
            {t('children.56.1', {
              fallback:
                'You may not copy, reproduce, alter, transmit, or use any content without express written permission unless otherwise explicitly stated in these Terms.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="dispute-resolution-and-arbitration"
          title={t('children.57', {
            fallback: 'Dispute Resolution and Arbitration',
          })}
        >
          <PolicyText>
            {t('children.58', {
              fallback:
                'Any disputes between you and Hostixie related to the website or services will first be attempted to be resolved informally. If no resolution is reached within 60 days, the matter shall be referred to binding arbitration in accordance with the rules of the [Arbitration Body, e.g., ICC or local authority], unless the claim involves the enforcement of intellectual property rights or injunctive relief.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="user-submissions-and-public-content"
          title={t('children.59', {
            fallback: 'User Submissions and Public Content',
          })}
        >
          <PolicyText>
            {t('children.60', {
              fallback:
                'Any content you submit to us, including ideas, proposals, artwork, or feedback, will be treated as non-confidential and may be used by Hostixie for any purpose, without compensation or credit. You grant us full rights to use and commercialize such content perpetually.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="promotional-campaigns"
          title={t('children.61', { fallback: 'Promotional Campaigns' })}
        >
          <PolicyText>
            {t('children.62', {
              fallback:
                'From time to time, we may offer contests, giveaways, or promotions. These may be subject to additional rules and eligibility requirements (such as age or location). By participating, you agree to all applicable promotion-specific terms.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="errors-and-omissions"
          title={t('children.63', { fallback: 'Errors and Omissions' })}
        >
          <PolicyText>
            {t('children.64', {
              fallback:
                'While we strive for accuracy, there may be typographical errors or incorrect pricing/information on our site. We reserve the right to cancel any order or correct such information, even after a transaction is completed. If a payment has been processed, we will issue a refund for any incorrect charges.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="errors-and-omissions"
          title={t('children.63', { fallback: 'Errors and Omissions' })}
        >
          <PolicyText>
            {t('children.64', {
              fallback:
                'While we strive for accuracy, there may be typographical errors or incorrect pricing/information on our site. We reserve the right to cancel any order or correct such information, even after a transaction is completed. If a payment has been processed, we will issue a refund for any incorrect charges.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="disclaimer"
          title={t('children.65', { fallback: 'Disclaimer' })}
        >
          <PolicyText>
            {t('children.66', {
              fallback:
                'The content and services provided by Hostixie are intended for general information and are not guaranteed to be free from inaccuracies or disruptions. We are not liable for content submitted by users or third parties, and we do not guarantee the completeness or reliability of any materials accessed via our platform.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="contact-information"
          title={t('children.67', { fallback: 'Contact Information' })}
        >
          <PolicyText>
            {t('children.68', {
              fallback:
                'If you have any questions or concerns about these Terms and Conditions, please feel free to contact us:',
            })}
          </PolicyText>
          <List
            values={[
              <span key="email">
                {t('children.69', { fallback: 'Email' })}:{' '}
                <span className="font-bold">[Insert Email]</span>
              </span>,
              <span key="phone">
                {t('children.70', { fallback: 'Phone' })}:{' '}
                <span className="font-bold">[Insert Phone Number]</span>
              </span>,
              <span key="contact-page">
                {t('children.71', { fallback: 'Contact Page' })}:{' '}
                <span className="font-bold">[Insert URL]</span>
              </span>,
            ]}
          />
        </PolicySection>
      </PolicyRender>
    </>
  );
}

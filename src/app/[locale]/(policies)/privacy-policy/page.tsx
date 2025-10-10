import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PolicyHeader } from '@/features/policies/ui/policy-header';
import { PolicyRender } from '@/features/policies/ui/policy-render';
import { PolicySection } from '@/features/policies/ui/policy-section';
import { PolicyText } from '@/features/policies/ui/policy-text';

import { Link } from '@/i18n/navigation';

import { List } from '@/shared/ui/kit/list';

export const metadata: Metadata = {
  title: 'Privacy Policy | Hostixie',
  description:
    'Learn how Hostixie collects, uses, and protects your personal information.',
  openGraph: {
    title: 'Privacy Policy | Hostixie',
    description:
      'Learn how Hostixie collects, uses, and protects your personal information.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Hostixie',
    description:
      'Learn how Hostixie collects, uses, and protects your personal information.',
  },
  robots: {
    index: false,
  },
};

export default async function PrivacyPolicy() {
  const t = await getTranslations('privacyPolicy');

  return (
    <main>
      <PolicyHeader name={t('title', { fallback: 'Privacy Policy' })} />
      <PolicyRender
        navigation={[
          {
            label: t('navigation.0', {
              fallback: 'Overview of Our Privacy Commitment',
            }),
            href: '#overview-of-our-privacy-commitment',
          },
          {
            label: t('navigation.1', { fallback: 'Age Restrictions' }),
            href: '#age-restrictions',
          },
          {
            label: t('navigation.2', { fallback: 'Key Terms and Definitions' }),
            href: '#key-terms-and-definitions',
          },
          {
            label: t('navigation.3', { fallback: 'Information We Collect' }),
            href: '#information-we-collect',
          },
          {
            label: t('navigation.4', {
              fallback: 'How We Use the Information',
            }),
            href: '#how-we-use-the-information',
          },
          {
            label: t('navigation.5', {
              fallback: 'Sharing Information with Third Parties',
            }),
            href: '#sharing-information-with-third-parties',
          },
          {
            label: t('navigation.6', {
              fallback: 'Third-Party Data Collection',
            }),
            href: '#third-party-data-collection',
          },
          {
            label: t('navigation.7', {
              fallback: 'How and When We Share Information',
            }),
            href: '#how-and-when-we-share-information',
          },
          {
            label: t('navigation.8', {
              fallback: 'Email Communication and Advertising',
            }),
            href: '#email-communication-and-advertising',
          },
          {
            label: t('navigation.9', {
              fallback: 'Data Protection and Security',
            }),
            href: '#data-protection-and-security',
          },
          {
            label: t('navigation.10', {
              fallback: 'Safeguards and Limitations',
            }),
            href: '#safeguards-and-limitations',
          },
          {
            label: t('navigation.11', {
              fallback: 'Your Rights to Review and Update Your Information',
            }),
            href: '#your-rights-to-review-and-update-your-information',
          },
          {
            label: t('navigation.12', {
              fallback: 'Disclosure to Corporate Affiliates',
            }),
            href: '#disclosure-to-corporate-affiliates',
          },
          {
            label: t('navigation.13', {
              fallback: 'Legal Compliance and Jurisdiction',
            }),
            href: '#legal-compliance-and-jurisdiction',
          },
          {
            label: t('navigation.14', {
              fallback: 'Consent to Data Practices',
            }),
            href: '#consent-to-data-practices',
          },
          {
            label: t('navigation.15', {
              fallback: 'Children’s Privacy',
            }),
            href: '#childrens-privacy',
          },
          {
            label: t('navigation.16', {
              fallback: 'Policy Changes',
            }),
            href: '#policy-changes',
          },
          {
            label: t('navigation.17', {
              fallback: 'Cookies and Tracking Technologies',
            }),
            href: '#cookies-and-tracking-technologies',
          },
          {
            label: t('navigation.18', {
              fallback: 'GDPR and International Data Protection Standards',
            }),
            href: '#gdpr-and-international-data-protection-standards',
          },
          {
            label: t('navigation.19', {
              fallback: 'Your Data Rights: Access, Portability, and Removal',
            }),
            href: '#your-data-rights-access-portability-and-removal',
          },
          {
            label: t('navigation.20', { fallback: 'Contact Us' }),
            href: '#contact-us',
          },
        ]}
      >
        <PolicySection
          id="overview-of-our-privacy-commitment"
          title={t('children.0', {
            fallback: 'Overview of Our Privacy Commitment',
          })}
        >
          <PolicyText>
            {t('children.1', {
              fallback:
                'At Hostixie ("we", "us", or "our"), we deeply respect your right to privacy and take your data protection seriously. This Privacy Policy outlines how Hostixie, the operator of this website and service platform, collects, uses, stores, and shares personal information obtained through your interaction with our website and services.',
            })}
            <br />
            <br />
            {t('children.2', {
              fallback:
                'By accessing our site or using any of our services, you confirm that you have read and agreed to the practices described in this Privacy Policy.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="age-restrictions"
          title={t('children.3', {
            fallback: 'Age Restrictions',
          })}
        >
          <PolicyText>
            {t('children.4', {
              fallback:
                'Our website and services are intended for individuals who are at least 18 years old. We do not knowingly collect or solicit personal information from anyone under the age of 18. If you are a parent or guardian and believe your child has provided personal information to us, please contact us immediately.',
            })}
            <br />
            <br />
            {t('children.5', {
              fallback:
                'If we discover that we have inadvertently collected personal information from a child under the age of 18, we will take steps to delete such information as soon as possible. By using our website, you confirm that you are at least 18 years of age or the minimum legal age required to enter into binding agreements in your country of residence. If you do not meet this requirement, you may not access or use the services provided by this website.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="key-terms-and-definitions"
          title={t('children.6', {
            fallback: 'Key Terms and Definitions',
          })}
        >
          <PolicyText>
            {t('children.7', {
              fallback:
                'To clarify the language used in this Policy, the following definitions apply:',
            })}
          </PolicyText>
          <List
            values={[
              <span key="cookie">
                {t('children.8.0', {
                  fallback: 'Cookie:',
                })}
                {t('children.8.1', {
                  fallback:
                    'A small file stored on your browser or device, used to enhance functionality, remember preferences, or collect analytics about user behavior on our site.',
                })}
              </span>,
              <span key="company">
                {t('children.8.2', {
                  fallback: 'Company:',
                })}{' '}
                {t('children.8.3', { fallback: 'Refers to' })}{' '}
                <span className="text-primary">[Company Name]</span>,{' '}
                {t('children.8.4', {
                  fallback: 'a registered legal entity located at',
                })}{' '}
                <span className="text-primary">[Registered Address]</span>,
                {t('children.8.5', {
                  fallback:
                    'which is responsible for managing and processing your data under this policy.',
                })}
              </span>,
              <span key="country">
                <span className="font-bold">
                  {t('children.8.6', {
                    fallback: 'Country:',
                  })}
                </span>{' '}
                {t('children.8.7', {
                  fallback:
                    'The jurisdiction where Hostixie is registered and legally operates, i.e.,',
                })}
                <span className="text-primary">[Country Name]</span>.
              </span>,
              <span key="customer">
                <span className="font-bold">
                  {t('children.8.8', {
                    fallback: 'Customer:',
                  })}
                </span>{' '}
                {t('children.8.9', {
                  fallback:
                    'A user, organization, or business entity that signs up for or uses our services for hosting, development, or related digital support.',
                })}
              </span>,
              <span key="device">
                <span className="font-bold">
                  {t('children.8.10', {
                    fallback: 'Device:',
                  })}
                </span>{' '}
                {t('children.8.11', {
                  fallback:
                    'Any internet-capable equipment, including computers, smartphones, and tablets, that is used to access our website and services.',
                })}
              </span>,
              <span key="ip">
                <span className="font-bold">
                  {t('children.8.12', {
                    fallback: 'IP Address:',
                  })}
                </span>{' '}
                {t('children.8.13', {
                  fallback:
                    'A numerical identifier assigned to your device when you connect to the internet, often used to determine approximate geographic location and detect fraudulent behavior.',
                })}
              </span>,
              <span key="personnel">
                <span className="font-bold">
                  {t('children.8.14', {
                    fallback: 'Personnel:',
                  })}
                </span>{' '}
                {t('children.8.15', {
                  fallback:
                    'Individuals employed by or working under contract with',
                })}{' '}
                <span className="text-primary">[Company Name]</span>,{' '}
                {t('children.8.16', {
                  fallback:
                    'who may handle or have access to your personal information in the course of delivering our services.',
                })}
              </span>,
              <span key="personal-data">
                <span className="font-bold">
                  {t('children.8.17', {
                    fallback: 'Personal Data:',
                  })}
                </span>{' '}
                {t('children.8.18', {
                  fallback:
                    'Any data that relates to an identified or identifiable individual, either directly (e.g., your name) or indirectly (e.g., through an ID number or IP address).',
                })}
              </span>,
              <span key="service">
                <span className="font-bold">
                  {t('children.8.19', {
                    fallback: 'Service:',
                  })}
                </span>{' '}
                {t('children.8.20', {
                  fallback:
                    'Refers to all services offered by Hostixie, including web hosting, custom development, support, and related digital offerings.',
                })}
              </span>,
              <span key="third-party-services">
                <span className="font-bold">
                  {t('children.8.21', {
                    fallback: 'Third-Party Service:',
                  })}
                </span>{' '}
                {t('children.8.22', {
                  fallback:
                    'External services or companies that are integrated with our platform or whose offerings may be accessible through our site (e.g., marketing platforms, analytics tools, payment processors).',
                })}
              </span>,
              <span key="website">
                <span className="font-bold">
                  {t('children.8.23', {
                    fallback: 'Website:',
                  })}
                </span>{' '}
                {t('children.8.24', {
                  fallback: 'The official site owned and operated by',
                })}{' '}
                <span className="text-primary">[Company Name]</span>,{' '}
                {t('children.8.25', {
                  fallback: 'accessible via',
                })}{' '}
                <Link href="/" className="text-primary underline">
                  hostixie.com
                </Link>
                .
              </span>,
              <span key="you-user">
                <span className="font-bold">
                  {t('children.8.26', {
                    fallback: 'You / User:',
                  })}
                </span>{' '}
                {t('children.8.27', {
                  fallback:
                    'Any individual or entity who browses, registers, communicates with, or utilizes services provided by Hostixie.',
                })}
              </span>,
            ]}
          />
        </PolicySection>
        <PolicySection
          id="information-we-collect"
          title={t('children.9', {
            fallback: 'Information We Collect',
          })}
        >
          <PolicyText>
            {t('children.10', {
              fallback:
                'We collect personal and non-personal information in various ways, including when you:',
            })}
          </PolicyText>
          <List
            values={[
              t('children.11.0', {
                fallback: 'Browse our website',
              }),
              t('children.11.1', {
                fallback: 'Create an account',
              }),
              t('children.11.2', {
                fallback: 'Submit a service request or place an order',
              }),
              t('children.11.3', {
                fallback: 'Subscribe to a newsletter',
              }),
              t('children.11.4', {
                fallback: 'Participate in a survey, contest, or promotion',
              }),
              t('children.11.5', {
                fallback: 'Contact us via forms or direct communication',
              }),
            ]}
          />
          <PolicyText>
            {t('children.12', {
              fallback: 'Collected data may include:',
            })}
          </PolicyText>
          <List
            values={[
              t('children.13.0', {
                fallback: 'Full Name or Username',
              }),
              t('children.13.1', {
                fallback: 'Email Address',
              }),
              t('children.13.2', {
                fallback: 'Phone Number',
              }),
              t('children.13.3', {
                fallback: 'Billing and Shipping Address',
              }),
              t('children.13.4', {
                fallback: 'Age or Date of Birth',
              }),
              t('children.13.5', {
                fallback: 'Account Credentials (e.g., password)',
              }),
              t('children.13.6', {
                fallback:
                  'Project-related information (e.g., budget, timeline, preferences)',
              }),
              t('children.13.7', {
                fallback:
                  'IP address, browser type, and device data (collected automatically)',
              }),
            ]}
          />
        </PolicySection>
        <PolicySection
          id="how-we-use-the-information"
          title={t('children.14', {
            fallback: 'How We Use the Information',
          })}
        >
          <PolicyText>
            {t('children.15', {
              fallback:
                'The information you provide helps us deliver better service, improve your experience, and ensure secure and efficient operations. We may use your data for the following purposes:',
            })}
          </PolicyText>
          <List
            values={[
              t('children.16.0', {
                fallback: 'To tailor your user experience based on preferences',
              }),
              t('children.16.1', {
                fallback:
                  'To enhance and optimize the functionality of our website',
              }),
              t('children.16.2', {
                fallback:
                  'To respond to your customer service inquiries or support requests',
              }),
              t('children.16.3', {
                fallback:
                  'To manage and process payments, invoices, and service delivery',
              }),
              t('children.16.4', {
                fallback:
                  'To conduct surveys, promotions, or service improvement campaigns',
              }),
              t('children.16.5', {
                fallback:
                  'To send updates, special offers, newsletters, and transactional communications',
              }),
            ]}
          />
        </PolicySection>
        <PolicySection
          id="sharing-information-with-third-parties"
          title={t('children.17', {
            fallback: 'Sharing Information with Third Parties',
          })}
        >
          <PolicyText>
            {t('children.18', {
              fallback:
                'To deliver our services efficiently, Hostixie may collect and process end-user data as needed to fulfill our service commitments. In some cases, you may provide us with access to information you’ve made publicly available on platforms like social media. If you do, we may access and store data from those sources based on your settings. You have full control over what you share by adjusting your privacy preferences on those platforms.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="third-party-data-collection"
          title={t('children.19', {
            fallback: 'Third-Party Data Collection',
          })}
        >
          <PolicyText>
            {t('children.20', {
              fallback:
                'When you contact us or show interest in our services (e.g., by submitting your email address), we may receive supplemental data from external sources. For example, we might use fraud detection providers or data enrichment tools to validate identity or risk level. We also occasionally collect publicly available social media data to better understand engagement or audience demographics, always respecting your privacy settings on those platforms.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="how-and-when-we-share-information"
          title={t('children.21', {
            fallback: 'How and When We Share Information',
          })}
        >
          <PolicyText>
            {t('children.22', {
              fallback:
                'We may share personal and non-personal information with trusted third parties, including but not limited to:',
            })}
          </PolicyText>
          <List
            values={[
              t('children.23.0', {
                fallback:
                  'Marketing agencies, affiliate partners, and advertising platforms',
              }),
              t('children.23.1', {
                fallback:
                  'Service providers assisting with hosting, database management, customer service, or payment processing',
              }),
              t('children.23.2', {
                fallback:
                  'Technology vendors offering infrastructure, analytics, or email campaign tools',
              }),
              t('children.23.3', {
                fallback:
                  'Partners involved in promotions or sponsored campaigns',
              }),
            ]}
          />
          <PolicyText>
            {t('children.24', {
              fallback:
                'In the event of a merger, acquisition, sale of assets, or corporate restructuring, your information may be transferred to the acquiring or successor entity as part of the transition.',
            })}
            <br />
            <br />
            {t('children.25', {
              fallback:
                'Additionally, we may share anonymized or aggregated log data (including IP addresses) with analytics platforms or advertising networks. This may help us and our partners better understand visitor behaviors, device types, connection speeds, or geographic trends.',
            })}
            <br />
            <br />
            {t('children.26', {
              fallback:
                'We also reserve the right to disclose personal data when legally required, such as to respond to subpoenas, comply with court orders or legal obligations, enforce our Terms, or protect our users, services, or the public from potential harm or unlawful actions.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="email-communication-and-advertising"
          title={t('children.27', {
            fallback: 'Email Communication and Advertising',
          })}
        >
          <PolicyText>
            {t('children.28', {
              fallback:
                'By submitting your email via any form on our website, you agree to receive communications from us. These may include promotional emails, service updates, or newsletters. You can opt out at any time using the unsubscribe link included in every email.',
            })}
            <br />
            <br />
            {t('children.29', {
              fallback:
                'We also may use your email address for custom audience targeting on platforms like Facebook or Google, allowing us to display tailored advertisements to users who’ve interacted with us. Email addresses submitted through order forms will only be used to fulfill your specific transaction unless you’ve opted in to additional communications elsewhere.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="data-protection-and-security"
          title={t('children.30', {
            fallback: 'Data Protection and Security',
          })}
        >
          <PolicyText>
            {t('children.31', {
              fallback:
                'We apply multiple layers of security to safeguard your personal information. When you place an order or provide sensitive details, your data is encrypted using SSL (Secure Socket Layer) technology and securely transmitted to our payment processors. Access to this data is limited to authorized personnel only.',
            })}
            <br />
            <br />
            {t('children.32', {
              fallback:
                'We do not store credit card information or sensitive identifiers after a transaction is complete. While we implement rigorous security practices, no system can guarantee 100% protection. In the unlikely event of a data breach, we will take all reasonable steps to minimize risk and notify you as required by law.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="safeguards-and-limitations"
          title={t('children.33', {
            fallback: 'Safeguards and Limitations',
          })}
        >
          <PolicyText>
            {t('children.34', {
              fallback:
                'We use physical, electronic, and organizational safeguards to protect your data from unauthorized access or misuse. These measures include restricted access controls, encrypted communication channels, and system logging.',
            })}
            <br />
            <br />
            {t('children.35', {
              fallback:
                'Despite our efforts, no method of transmission over the internet or data storage system is entirely secure. If local laws impose stricter standards, our compliance will be measured against the benchmark of “intentional misconduct.”',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="your-rights-to-review-and-update-your-information"
          title={t('children.36', {
            fallback: 'Your Rights to Review and Update Your Information',
          })}
        >
          <PolicyText>
            {t('children.37', {
              fallback:
                'Depending on your relationship with us, you may have the right to access, correct, or request deletion of your personal information. For example:',
            })}
          </PolicyText>
          <List
            values={[
              <span key="employees">
                <span className="font-bold">
                  {t('children.38.0', {
                    fallback: 'Employees',
                  })}
                </span>{' '}
                {t('children.38.1', {
                  fallback:
                    'may request updates through internal HR procedures',
                })}
              </span>,
              <span key="clients-or-customers">
                <span className="font-bold">
                  {t('children.38.2', {
                    fallback: 'Clients or Customers',
                  })}
                </span>{' '}
                {t('children.38.3', {
                  fallback: 'can email us to:',
                })}
              </span>,
            ]}
          />
          <div className="pl-5">
            <List
              values={[
                t('children.39.0', {
                  fallback: 'Review or correct their personal information',
                }),
                t('children.39.1', {
                  fallback: 'Change their communication preferences',
                }),
                t('children.39.2', {
                  fallback:
                    'Request account closure and deletion of stored data (as permitted by law)',
                }),
              ]}
            />
          </div>
          <PolicyText>
            <span className="font-bold">
              {t('children.40.0', {
                fallback: 'Note:',
              })}
            </span>{' '}
            {t('children.40.1', {
              fallback:
                'We may verify your identity before processing any changes to protect your account security. Deleted information may remain in our offline backups for disaster recovery and compliance purposes, but will no longer be actively used.',
            })}
            <br />
            {t('children.40.2', {
              fallback:
                'While we will promptly honor data modification or removal requests where practical, please be aware that some residual data may persist in our systems due to technical constraints (e.g., backup logs).',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="disclosure-to-corporate-affiliates"
          title={t('children.41', {
            fallback: 'Disclosure to Corporate Affiliates',
          })}
        >
          <PolicyText>
            {t('children.42', {
              fallback:
                'We may share your personal information with our affiliated companies. For the purposes of this Privacy Policy, "affiliates" refers to any entity that is owned by, owns, or is under shared ownership or control with Hostixie, whether directly or indirectly. All affiliated entities will handle your information in accordance with the standards set out in this Privacy Policy.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="legal-compliance-and-jurisdiction"
          title={t('children.43', {
            fallback: 'Legal Compliance and Jurisdiction',
          })}
        >
          <PolicyText>
            {t('children.44', {
              fallback:
                'This Privacy Policy is governed by the laws of [Country], without reference to conflict-of-law principles. By using our website or services, you agree that any dispute related to data protection or privacy shall fall under the exclusive jurisdiction of the courts in',
            })}
            <span className="text-primary">[City, Country]</span>.
            <br />
            <br />
            {t('children.45', {
              fallback:
                'Your continued use of our services signifies your acceptance of this Privacy Policy. If you disagree with our terms, you should not engage with our services or access the website. We may make updates that reflect operational, legal, or regulatory changes; by remaining on the site after changes are published, you confirm your acceptance of the revised policy.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="consent-to-data-practices"
          title={t('children.46', {
            fallback: 'Consent to Data Practices',
          })}
        >
          <PolicyText>
            {t('children.47', {
              fallback:
                'This Privacy Policy has been updated to offer full transparency regarding how we collect and process your personal data. By using our website, submitting information, or interacting with our services, you consent to our data practices and accept the terms outlined in this document.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="childrens-privacy"
          title={t('children.48', {
            fallback: 'Children’s Privacy',
          })}
        >
          <PolicyText>
            {t('children.49', {
              fallback:
                'Our services are not directed at or intended for individuals under the age of 18. We do not knowingly collect personal data from minors. If you&apos;re a parent or legal guardian and believe your child has provided personal information, please contact us immediately. If we learn that a child under 18 has submitted data without verified parental consent, we will delete such information as quickly as possible.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="policy-changes"
          title={t('children.50', {
            fallback: 'Policy Changes',
          })}
        >
          <PolicyText>
            {t('children.51', {
              fallback:
                'We may periodically update this Privacy Policy to reflect changes to our operations, services, or legal requirements. If any material changes occur, we will notify you in advance (e.g., via email or platform notice). You will have the opportunity to review the changes before they take effect. Continuing to use our services after the revised policy is live indicates your acceptance. If you do not agree, you may close your account or discontinue use of the site.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="cookies-and-tracking-technologies"
          title={t('children.52', {
            fallback: 'Cookies and Tracking Technologies',
          })}
        >
          <PolicyText>
            {t('children.53', {
              fallback:
                'We use cookies and similar technologies to improve functionality, personalize content, and analyze usage. Cookies may track session activity, remember preferences, or support features like login and chat support. You can adjust your browser settings to control or disable cookies, though doing so may impact some aspects of your experience.',
            })}
            <br />
            <br />
            <span className="font-bold">
              {t('children.54', {
                fallback: 'Use of Google Maps API',
              })}
            </span>
            <br />
            {t('children.55', {
              fallback:
                'If our site integrates Google Maps for features like location display or routing, Google may collect information from you and your device in accordance with its own Privacy Policy. We recommend reviewing Google’s policies for more details.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="gdpr-and-international-data-protection-standards"
          title={t('children.56', {
            fallback: 'GDPR and International Data Protection Standards',
          })}
        >
          <PolicyText>
            {t('children.57', {
              fallback:
                'Although our business may operate globally, we strive to maintain data protection practices consistent with the',
            })}{' '}
            <span className="font-bold">
              {t('children.58', {
                fallback: 'General Data Protection Regulation (GDPR)',
              })}
            </span>{' '}
            {t('children.59', {
              fallback: 'as a global standard.',
            })}
          </PolicyText>
          <PolicyText>
            {t('children.60', {
              fallback: 'Our commitment includes:',
            })}
          </PolicyText>
          <List
            values={[
              t('children.61.0', {
                fallback:
                  'Processing your personal data lawfully, transparently, and for specific, defined purposes',
              }),
              t('children.61.1', {
                fallback:
                  'Retaining data only as long as necessary for its intended purpose',
              }),
              t('children.61.2', {
                fallback:
                  'Allowing individuals to access, modify, or delete their data upon request',
              }),
            ]}
          />
          <PolicyText>
            {t('children.62', {
              fallback:
                'You may request access to your data, request corrections, or ask for erasure by contacting us. We may verify your identity before processing such requests.',
            })}
            <br />
            <br />
            {t('children.63', {
              fallback:
                'If you are a data subject protected by GDPR or similar regulations, we will handle your requests in accordance with those legal frameworks.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="your-data-rights-access-portability-and-removal"
          title={t('children.64', {
            fallback: 'Your Data Rights: Access, Portability, and Removal',
          })}
        >
          <PolicyText>
            {t('children.65', {
              fallback: 'You have the right to:',
            })}
          </PolicyText>
          <List
            values={[
              t('children.66.0', {
                fallback: 'Access your personal information',
              }),
              t('children.66.1', {
                fallback: 'Request a copy of the data we hold about you',
              }),
              t('children.66.2', {
                fallback: 'Correct or update inaccurate information',
              }),
              t('children.66.3', {
                fallback: 'Request deletion of your data',
              }),
              t('children.66.4', {
                fallback: 'Object to or restrict how we process your data',
              }),
            ]}
          />
          <PolicyText>
            {t('children.67', {
              fallback:
                'We retain data only for as long as necessary to fulfill business or legal obligations, and no longer than 6 years, unless your account is removed sooner. After termination, we will remove personal information from our systems within a 60-day grace period, in accordance with our Terms and Privacy Policy.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="contact-us"
          title={t('children.68', {
            fallback: 'Contact Us',
          })}
        >
          <PolicyText>
            {t('children.69', {
              fallback:
                'If you have any questions, requests, or concerns regarding this Privacy Policy or your personal data, please reach out using the contact information below:',
            })}
          </PolicyText>
          <List
            values={[
              <span key="email">
                {t('children.70', {
                  fallback: 'Email:',
                })}{' '}
                <span className="font-bold">info@hostixie.com</span>
              </span>,
              <span key="phone">
                {t('children.71', {
                  fallback: 'Phone:',
                })}{' '}
                <span className="font-bold">[Insert Phone Number]</span>
              </span>,
              <span key="contact-page">
                {t('children.72', {
                  fallback: 'Contact Page:',
                })}{' '}
                <Link href="/contact" className="font-bold">
                  https://hostixie.com/contact
                </Link>
              </span>,
            ]}
          />
        </PolicySection>
      </PolicyRender>
    </main>
  );
}

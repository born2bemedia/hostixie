import { getTranslations } from 'next-intl/server';

import { PolicyHeader } from '@/features/policies/ui/policy-header';
import { PolicyRender } from '@/features/policies/ui/policy-render';
import { PolicySection } from '@/features/policies/ui/policy-section';
import { PolicyText } from '@/features/policies/ui/policy-text';

import { Link } from '@/i18n/navigation';

import { List } from '@/shared/ui/kit/list';

export default async function RefundPolicy() {
  const t = await getTranslations('refundPolicy');

  return (
    <main>
      <PolicyHeader name={t('title', { fallback: 'Refund Policy' })} />
      <PolicyRender
        sticky
        navigation={[
          {
            label: t('navigation.0', { fallback: 'Overview' }),
            href: '#overview',
          },
          {
            label: t('navigation.1', { fallback: 'Customer Responsibility' }),
            href: '#customer-responsibility',
          },
          {
            label: t('navigation.2', {
              fallback: 'When a Refund May Be Considered',
            }),
            href: '#when-a-refund-may-be-considered',
          },
          {
            label: t('navigation.3', {
              fallback: 'How to Submit a Refund Request',
            }),
            href: '#how-to-submit-a-refund-request',
          },
          {
            label: t('navigation.4', { fallback: 'Review Process' }),
            href: '#review-process',
          },
          {
            label: t('navigation.5', { fallback: 'Age Restrictions' }),
            href: '#age-restrictions',
          },
          {
            label: t('navigation.6', { fallback: 'Need Help?' }),
            href: '#need-help',
          },
        ]}
      >
        <PolicySection
          id="overview"
          title={t('children.0', { fallback: 'Overview' })}
        >
          <PolicyText>
            {t('children.1', {
              fallback:
                'Thank you for choosing Hostixie, a service provided by [Company Name], legally registered at [Registered Address] under company number [Registration Number]. Our team is dedicated to delivering reliable, high-quality digital services, including web development, hosting, and related solutions.',
            })}
          </PolicyText>
          <PolicyText>
            {t('children.2', {
              fallback: 'Please note that',
            })}{' '}
            <span className="font-bold">
              {t('children.3', {
                fallback:
                  'all transactions completed via our website are considered final and non-refundable',
              })}
            </span>
            .{' '}
            {t('children.4', {
              fallback:
                'This policy applies to all services and digital products, regardless of whether they have been used, activated, accessed, or delivered. Once payment has been successfully processed and confirmed, the amount paid becomes non-reversible.',
            })}
          </PolicyText>
          <PolicyText>
            {t('children.5', {
              fallback:
                'This refund policy reflects the nature of our work: services are often custom-built, resource-dependent, or begin immediately upon order confirmation. As such, even partial refunds are not issued under standard conditions. By purchasing through our platform, you acknowledge and accept that you are not entitled to a refund once the transaction is complete.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="customer-responsibility"
          title={t('children.6', { fallback: 'Customer Responsibility' })}
        >
          <PolicyText>
            {t('children.7', {
              fallback:
                'Before initiating any payment or placing an order on our platform,',
            })}{' '}
            {''}
            <span className="font-bold">
              {t('children.8', {
                fallback:
                  'you are solely responsible for evaluating all relevant information',
              })}
            </span>{' '}
            {t('children.10', {
              fallback:
                'about the service or product you intend to purchase. This includes, but is not limited to, reading service descriptions, checking feature lists, reviewing pricing tiers, assessing deliverables, and ensuring that the selected solution aligns with your business or personal needs.',
            })}
            <br />
            <br />
            {t('children.11', {
              fallback:
                'We do not take responsibility for dissatisfaction caused by:',
            })}
          </PolicyText>
          <List
            values={[
              t('children.12.0', {
                fallback:
                  'Misunderstanding or misinterpreting publicly available service details',
              }),
              t('children.12.1', {
                fallback:
                  'Oversights in verifying project requirements or specifications',
              }),
              t('children.12.2', {
                fallback:
                  'Assumptions about included features that were not explicitly listed',
              }),
            ]}
          />
          <PolicyText>
            {t('children.13', {
              fallback:
                'It is also your responsibility to ensure that any technical requirements (such as hosting compatibility or CMS preference) are understood prior to purchasing. If in doubt, you are encouraged to contact our support team before placing an order. Once payment is made, it is assumed that you have made an informed and intentional purchasing decision.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="when-a-refund-may-be-considered"
          title={t('children.14', {
            fallback: 'When a Refund May Be Considered',
          })}
        >
          <PolicyText>
            {t('children.15.0', {
              fallback:
                'While our standard policy does not allow refunds, there are limited scenarios where a request',
            })}{' '}
            <span className="font-bold">
              {t('children.15.1', {
                fallback: 'may be reviewed:',
              })}
            </span>
          </PolicyText>
          <List
            values={[
              <span key="payments">
                <span className="font-bold">
                  {t('children.16.0', {
                    fallback: 'Accidental or Duplicate Payments',
                  })}
                </span>{' '}
                <br />
                {t('children.16.1', {
                  fallback:
                    'If you were charged more than once for the same order, you may be eligible for a refund of the excess amount.',
                })}
              </span>,
              <span key="billing">
                <span className="font-bold">
                  {t('children.16.2', {
                    fallback: 'Incorrect Billing',
                  })}
                </span>{' '}
                <br />
                {t('children.16.3', {
                  fallback:
                    'If a technical error or miscalculation on our part resulted in an overcharge, a refund may be processed for the difference.',
                })}
              </span>,
              <span key="wrong-payment">
                <span className="font-bold">
                  {t('children.16.4', {
                    fallback: 'Wrong Payment Details',
                  })}
                </span>{' '}
                <br />
                {t('children.16.5', {
                  fallback:
                    'If you can provide evidence that a payment was made using incorrect information (e.g., wrong reference number), and the funds did not reach us, we may assist in resolving the issue.',
                })}
              </span>,
              <span key="not-delivered">
                <span className="font-bold">
                  {t('children.16.6', {
                    fallback: 'Service Not Delivered',
                  })}
                </span>{' '}
                <br />
                {t('children.16.7', {
                  fallback:
                    'If a product or service you paid for was not delivered as outlined—due to a fault on our side—we may offer a refund or partial compensation depending on the circumstances.',
                })}
              </span>,
            ]}
          />
        </PolicySection>
        <PolicySection
          id="how-to-submit-a-refund-request"
          title={t('children.17', {
            fallback: 'How to Submit a Refund Request',
          })}
        >
          <PolicyText>
            {t('children.18.0', {
              fallback:
                'If you believe your case qualifies under the above conditions, please send a written refund request to our support team via email at',
            })}{' '}
            <span className="font-bold">[Insert Email Address]</span>.{' '}
            {t('children.18.1', {
              fallback: 'Include the following details:',
            })}
          </PolicyText>
          <List
            values={[
              t('children.19.0', {
                fallback: 'Full name',
              }),
              t('children.19.1', {
                fallback: 'Email address used for the order',
              }),
              t('children.19.2', {
                fallback: 'Transaction date',
              }),
              t('children.19.3', {
                fallback: 'Order number or payment reference',
              }),
              t('children.19.4', {
                fallback: 'A detailed description of the issue',
              }),
            ]}
          />
        </PolicySection>
        <PolicySection
          id="review-process"
          title={t('children.20', {
            fallback: 'Review Process',
          })}
        >
          <PolicyText>
            {t('children.21.0', {
              fallback:
                'Once we receive your request, our team will carefully review the details and validate them against our records. We aim to respond within',
            })}{' '}
            <span className="font-bold">
              {t('children.21.1', {
                fallback: '7 business days',
              })}
            </span>
            .{' '}
            {t('children.21.2', {
              fallback:
                'Each case is evaluated individually, and approval is at the sole discretion of',
            })}{' '}
            <span className="font-bold">Hostixie</span>,{' '}
            {t('children.21.3', {
              fallback: 'in line with this Refund Policy.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="age-restrictions"
          title={t('children.23', {
            fallback: 'Age Restrictions',
          })}
        >
          <PolicyText>
            {t('children.24', {
              fallback:
                'Our website and services are intended for individuals who are at least 18 years old. We do not knowingly collect or solicit personal information from anyone under the age of 18. If we discover that we have inadvertently collected personal information from a child under 18, we will take steps to delete such information as soon as possible.',
            })}
            <br />
            <br />
            {t('children.25', {
              fallback:
                'By using our services, you confirm that you are at least 18 years of age. If you are under 18, you are prohibited from accessing or using our services.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          id="need-help"
          title={t('children.26', {
            fallback: 'Need Help?',
          })}
        >
          <PolicyText>
            {t('children.27', {
              fallback:
                'If you need clarification about this policy or have any questions before submitting a request, feel free to contact our team:',
            })}
          </PolicyText>
          <List
            values={[
              <span key="email">
                {t('children.28.0', {
                  fallback: 'Email:',
                })}{' '}
                <span className="font-bold">info@hostixie.com</span>
              </span>,
              <span key="phone">
                {t('children.28.1', {
                  fallback: 'Phone:',
                })}{' '}
                <span className="font-bold">[Insert Phone Number]</span>
              </span>,
              <span key="contact-page">
                {t('children.28.2', {
                  fallback: 'Contact Page:',
                })}{' '}
                <Link href="/contact" className="font-bold">
                  https://hostixie.com/contact
                </Link>
              </span>,
            ]}
          />
          <PolicyText>
            {t('children.29', {
              fallback:
                'Please note that we reserve the right to update this Refund Policy at any time, without prior notice. We encourage you to review this page periodically.',
            })}
          </PolicyText>
        </PolicySection>
      </PolicyRender>
    </main>
  );
}

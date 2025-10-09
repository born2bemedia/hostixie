import type { getTranslations } from 'next-intl/server';

import { List } from '@/shared/ui/kit/list';

import { ArticleSection } from '../ui/article-section';
import { ArticleText } from '../ui/article-text';
import type { Article } from './types';

export const getArticle = (
  id: string,
  t: Awaited<ReturnType<typeof getTranslations>>,
) => getArticles(t)[id] ?? undefined;

const getArticles = (
  t: Awaited<ReturnType<typeof getTranslations>>,
): Record<string, Article> => ({
  'clean-portfolio-site-for-a-visual-artist': {
    title: t('cleanPortfolio.title', {
      fallback: 'Just Launched: Clean Portfolio Site for a Visual Artist',
    }),
    imgUrl: '/images/news/latest-1.jpg',
    date: t('cleanPortfolio.date', {
      fallback: 'Launched: June 20, 2025',
    }),
    description: t('cleanPortfolio.description', {
      fallback:
        'A contemporary visual artist approached us to build a dedicated online portfolio that would serve as her primary client-facing platform. The key requirement was a minimal, image-first website that performs well across all devices and communicates professionalism without unnecessary complexity.',
    }),
    children: (
      <>
        <ArticleSection
          title={t('cleanPortfolio.children.0', {
            fallback: 'Objective',
          })}
        >
          <ArticleText>
            {t('cleanPortfolio.children.1', {
              fallback:
                'The artist needed a fast, elegant way to present her work, reduce reliance on third-party platforms, and convert site visitors into direct inquiries. Performance, responsiveness, and visual clarity were the top priorities. No CMS was required; she wanted a static, low-maintenance solution with the highest speed and reliability.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('cleanPortfolio.children.2', {
            fallback: 'Design Strategy',
          })}
        >
          <ArticleText>
            {t('cleanPortfolio.children.3', {
              fallback:
                'We designed a custom front-end layout tailored specifically for artwork presentation. The homepage opens with a full-width image grid that adapts to screen size and orientation. On project pages, images are presented with generous whitespace, smooth scroll transitions, and optional captions. Typography was kept subtle to avoid visual noise.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('cleanPortfolio.children.4', {
            fallback: 'Technical Implementation',
          })}
        >
          <ArticleText>
            {t('cleanPortfolio.children.5', {
              fallback:
                'The site was built as a fully static deployment using modern frontend tools. Images were converted to WebP, lazy-loaded, and delivered via CDN. We used a lightweight CSS framework and custom JavaScript for transitions. Google PageSpeed scores reached 97 on mobile and 100 on desktop. The final build was deployed to a CDN-based global hosting environment for instant load times.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('cleanPortfolio.children.6', {
            fallback: 'Mobile Optimization',
          })}
        >
          <ArticleText>
            {t('cleanPortfolio.children.7', {
              fallback:
                'From the outset, we prioritized mobile performance. All layout components were built mobile-first, including the gallery grid, navigation, and contact form. Tap targets, image scaling, and font sizes were tested across devices to ensure consistent behavior and zero layout shifts.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('cleanPortfolio.children.8', {
            fallback: 'User Interaction Flow',
          })}
        >
          <ArticleText>
            {t('cleanPortfolio.children.9', {
              fallback:
                'The site includes a simplified contact form placed at key attention points. It features instant validation, category tagging for inquiries, and is routed to the artist’s preferred email system. No signup or complex UI layers — just a direct way to request work, commissions, or collaborations.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('cleanPortfolio.children.10', {
            fallback: 'Measurable Results',
          })}
        >
          <ArticleText>
            {t('cleanPortfolio.children.11', {
              fallback:
                'Within the first seven days after launch, the artist received three new client inquiries that converted into paid bookings. Average session duration more than doubled. Bounce rate dropped from 64% (old site) to 36%. Image engagement (measured via scroll depth and interaction logs) showed strong user retention.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('cleanPortfolio.children.12', {
            fallback: 'Wrapping up',
          })}
        >
          <ArticleText>
            {t('cleanPortfolio.children.13', {
              fallback:
                'The final product is a lightweight, fast, visually focused portfolio that now serves as the artist’s primary business touchpoint. With no backend overhead and optimized loading across all regions, it combines strong design with performance and reliability.',
            })}
          </ArticleText>
        </ArticleSection>
      </>
    ),
  },
  'hosting-just-got-faster-again': {
    title: t('hostingJustGot.title', {
      fallback: 'Hosting Just Got Faster (Again)',
    }),
    imgUrl: '/images/news/latest-2.jpg',
    date: t('hostingJustGot.date', {
      fallback: 'May 10, 2025',
    }),
    description: t('hostingJustGot.description', {
      fallback:
        'We’ve completed a major upgrade to our hosting infrastructure focused on speed, scalability, and long-term reliability. All clients have already been migrated automatically — no action required.',
    }),
    children: (
      <>
        <ArticleSection
          title={t('hostingJustGot.children.0', {
            fallback: 'Upgrade Objective',
          })}
        >
          <ArticleText>
            {t('hostingJustGot.children.1', {
              fallback:
                'The goal was to reduce latency, improve global performance, and prepare our platform for continued growth. The upgrade targeted both hardware and software layers, with measurable improvements across all hosting tiers.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('hostingJustGot.children.2', {
            fallback: 'Hardware Improvements',
          })}
        >
          <ArticleText>
            {t('hostingJustGot.children.3', {
              fallback:
                'We replaced all previous-generation SSDs with NVMe drives across our shared, VPS, and dedicated hosting environments. This alone resulted in significant gains in disk read/write performance, particularly under high-load scenarios such as CMS-based sites and database-driven applications.',
            })}
          </ArticleText>
          <List
            values={[
              t('hostingJustGot.children.4.0', {
                fallback:
                  'Object caching (Memcached/Redis) for dynamic applications',
              }),
              t('hostingJustGot.children.4.1', {
                fallback: 'Full-page caching for static assets',
              }),
              t('hostingJustGot.children.4.2', {
                fallback: 'Smarter cache invalidation rules for CMS platforms',
              }),
            ]}
          />
          <ArticleText>
            {t('hostingJustGot.children.5', {
              fallback:
                'All plans now come with pre-configured caching by default, requiring no manual setup from users.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('hostingJustGot.children.6', {
            fallback: 'Network & Delivery Enhancements',
          })}
        >
          <ArticleText>
            {t('hostingJustGot.children.7', {
              fallback:
                'HTTP/3 is now enabled across our entire CDN edge layer, along with Brotli compression for smaller payloads. Internal routing was optimized to reduce latency between availability zones. DNS resolution times improved due to smarter resolver distribution.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('hostingJustGot.children.8', {
            fallback: 'Benchmark Results',
          })}
        >
          <ArticleText>
            {t('hostingJustGot.children.9', {
              fallback:
                'Post-deployment tests across 50+ client sites showed the following:',
            })}
          </ArticleText>
          <List
            values={[
              <span key={0} className="font-bold">
                {t('hostingJustGot.children.10.0', {
                  fallback: 'Average page load time improved by 36%',
                })}
              </span>,
              <span key={1}>
                <span className="font-bold">
                  {t('hostingJustGot.children.10.1.0', {
                    fallback: 'Time to First Byte (TTFB)',
                  })}
                </span>{' '}
                {t('hostingJustGot.children.10.1.1', {
                  fallback: 'reduced by an average of 210 ms',
                })}
              </span>,
              <span key={2}>
                <span className="font-bold">
                  {t('hostingJustGot.children.10.2.0', { fallback: 'Uptime' })}
                </span>{' '}
                {t('hostingJustGot.children.10.2.1', {
                  fallback: 'remains at 99.99% SLA level',
                })}
              </span>,
              t('hostingJustGot.children.10.3', {
                fallback:
                  'Dynamic CMS sites (WordPress, Joomla) showed the highest relative gains',
              }),
            ]}
          />
        </ArticleSection>
        <ArticleSection
          title={t('hostingJustGot.children.11', {
            fallback: 'Developer & API Impact',
          })}
        >
          <ArticleText>
            {t('hostingJustGot.children.12', {
              fallback:
                'Our staging environments, deployment CLI, and control panel API also benefit from the new architecture. Script execution time is faster, and environment spins occur in under 10 seconds on average.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('hostingJustGot.children.13', {
            fallback: 'Wrapping up',
          })}
        >
          <ArticleText>
            {t('hostingJustGot.children.14', {
              fallback:
                'This upgrade is part of our ongoing commitment to hosting speed and reliability. No price increases, no disruption — just better performance across the board. All new clients benefit immediately, and current clients already live on the enhanced stack.',
            })}
          </ArticleText>
        </ArticleSection>
      </>
    ),
  },
  'e-commerce-makeover-2x-sales-in-90-days': {
    title: t('eCommerceMakeover.title', {
      fallback: 'E-commerce Makeover = 2× Sales in 90 Days',
    }),
    imgUrl: '/images/news/latest-3.jpg',
    date: t('eCommerceMakeover.date', {
      fallback: 'May 30, 2025',
    }),
    description: t('eCommerceMakeover.description', {
      fallback:
        'We completed a full redesign of an e-commerce platform for a handmade goods retailer that had struggled with declining sales, slow mobile performance, and high checkout abandonment. Within three months of relaunch, the store saw a 45% increase in conversion rate and doubled its total revenue — without increasing ad spend.',
    }),
    children: (
      <>
        <ArticleSection
          title={t('eCommerceMakeover.children.0', {
            fallback: 'Redesign Goals and Initial Challenges',
          })}
        >
          <ArticleText>
            {t('eCommerceMakeover.children.1', {
              fallback:
                'The goal was to reduce latency, improve global performance, and prepare our platform for continued growth. The upgrade targeted both hardware and software layers, with measurable improvements across all hosting tiers.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('eCommerceMakeover.children.2', {
            fallback: 'Design and Experience Overhaul',
          })}
        >
          <ArticleText>
            {t('eCommerceMakeover.children.3', {
              fallback:
                'We approached the redesign with a mobile-first strategy, beginning with the layout structure. Every section of the site was rebuilt with a focus on clarity and speed. Product pages were redesigned to emphasize high-resolution visuals, pricing clarity, and simplified options for variants and quantities. The product catalog was restructured to allow for faster filtering and clearer browsing paths.',
            })}
          </ArticleText>
          <ArticleText>
            {t('eCommerceMakeover.children.4', {
              fallback:
                'The checkout process was reduced from five screens to three, eliminating redundant form fields and enabling autofill support for returning customers. Error handling was improved with inline messages that required no page reloads. Overall, the user experience was restructured to minimize friction from landing to purchase.',
            })}
          </ArticleText>
          <ArticleText>
            {t('eCommerceMakeover.children.5', {
              fallback:
                'Visual identity was also addressed — a neutral, handcrafted aesthetic was applied across the interface to align with the brand’s tone and product style. Subtle animations and transitions improved perceived performance without slowing down page load.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('eCommerceMakeover.children.6', {
            fallback: 'Performance Optimization and Technical Execution',
          })}
        >
          <ArticleText>
            {t('eCommerceMakeover.children.7', {
              fallback:
                'Beyond layout and interface, performance was a core focus. The codebase was cleaned of unused libraries, and all assets were restructured for faster delivery. Product images were converted into multiple responsive WebP variants, served conditionally based on device resolution.',
            })}
          </ArticleText>
          <ArticleText>
            {t('eCommerceMakeover.children.8', {
              fallback:
                'JavaScript was minimized and deferred where possible to prioritize core interaction. All static assets were moved behind a CDN to reduce first-byte latency globally. The site’s infrastructure remained on the client’s existing platform, but deployment pipelines were updated for clean asset versioning and automatic compression.',
            })}
          </ArticleText>
          <ArticleText>
            {t('eCommerceMakeover.children.9', {
              fallback:
                'These changes led to a nearly 50 percent reduction in average load time, measured across both desktop and mobile sessions. PageSpeed scores rose from mid-60s to high 90s on both mobile and desktop metrics.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('eCommerceMakeover.children.10', {
            fallback: 'Measurable Business Impact',
          })}
        >
          <ArticleText>
            {t('eCommerceMakeover.children.11', {
              fallback:
                'The effect on sales performance was immediate and sustained. Within the first 30 days, the store’s checkout completion rate began rising steadily, particularly among mobile users. By the end of the third month, overall conversion rate had increased by 45 percent. Mobile conversion alone grew by more than 30 percent, which brought it nearly in line with desktop performance — a major shift from previous behavior.',
            })}
          </ArticleText>
          <ArticleText>
            {t('eCommerceMakeover.children.12', {
              fallback:
                'Revenue over the 90-day period more than doubled compared to the prior quarter, despite the fact that advertising strategy and traffic sources remained unchanged. The improved user journey and faster page experience translated directly into more completed transactions and higher average order values. Users spent more time on product pages and returned more frequently within short intervals, indicating both increased interest and improved retention.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('eCommerceMakeover.children.13', {
            fallback: 'Conclusion',
          })}
        >
          <ArticleText>
            {t('eCommerceMakeover.children.14', {
              fallback:
                'This project demonstrates the immediate business impact of focused UX design and technical performance tuning in e-commerce. Without changing the product inventory or investing in new traffic acquisition, the client achieved substantial revenue growth simply by removing friction and optimizing every step of the shopping experience. The updated platform is now not only more visually aligned with the brand, but far more efficient at turning visitors into paying customers.',
            })}
          </ArticleText>
        </ArticleSection>
      </>
    ),
  },
  'we-launched-managed-wordpress-hosting': {
    title: t('weLaunchedManaged.title', {
      fallback: 'We Launched Managed WordPress Hosting',
    }),
    imgUrl: '/images/news/tech-1.jpg',
    date: t('weLaunchedManaged.date', {
      fallback: 'April 5, 2025',
    }),
    description: t('weLaunchedManaged.description', {
      fallback:
        'We’ve officially launched our fully managed WordPress hosting platform, tailored for small businesses, solo creators, and agencies that need speed, security, and simplicity — without the overhead of server management or plugin conflicts. Built from the ground up on our optimized infrastructure, this new service package is designed to eliminate routine technical headaches while delivering enterprise-grade performance.',
    }),
    children: (
      <>
        <ArticleSection
          title={t('weLaunchedManaged.children.0', {
            fallback: 'Background and Purpose',
          })}
        >
          <ArticleText>
            {t('weLaunchedManaged.children.1', {
              fallback:
                'Many of our clients use WordPress as their primary platform for business websites, portfolios, blogs, or e-commerce. While WordPress remains one of the most flexible and widely adopted CMSs in the world, it also presents common pain points when self-managed — from plugin conflicts and performance drops to vulnerability exposure and broken updates.',
            })}
          </ArticleText>
          <ArticleText>
            {t('weLaunchedManaged.children.2', {
              fallback:
                'Our goal was to offer a fully managed environment that preserves WordPress’s flexibility while removing its complexity. This meant combining infrastructure tuning, security automation, and support workflows into a streamlined product that could support both beginner users and advanced creators alike.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('weLaunchedManaged.children.3', {
            fallback: 'Platform Architecture and Setup',
          })}
        >
          <ArticleText>
            {t('weLaunchedManaged.children.4', {
              fallback:
                'The managed environment is deployed on isolated cloud containers with dedicated resources, offering consistent performance regardless of load spikes. Each instance runs on a custom-tuned NGINX + PHP-FPM stack with object caching pre-configured for WordPress. The storage layer is built on NVMe SSDs for rapid read/write performance, which directly benefits database-heavy WP installations.',
            })}
          </ArticleText>
          <ArticleText>
            {t('weLaunchedManaged.children.5', {
              fallback:
                'Every account includes pre-integrated CDN routing, image compression, and server-level caching — fully maintained by our team. Core updates, plugin patching, and theme versioning are handled in scheduled stages to avoid site disruptions. Error recovery mechanisms and fallback snapshots allow us to reverse any failed updates instantly, minimizing downtime risk.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('weLaunchedManaged.children.6', {
            fallback: 'Automation and Security Layer',
          })}
        >
          <ArticleText>
            {t('weLaunchedManaged.children.7', {
              fallback:
                'Security is fully automated at the server level and reinforced through regular file integrity scans and real-time threat detection. Malware scanning and automatic quarantine routines are run daily. SSL certificates are issued and renewed automatically. Firewall rules are customized per install, depending on the plugins and features each site uses, avoiding overblocking and false positives.',
            })}
          </ArticleText>
          <ArticleText>
            {t('weLaunchedManaged.children.8', {
              fallback:
                'Backups are performed every 24 hours and stored in encrypted off-site storage for a rolling 30-day window. Full site restores can be triggered through the control panel with one click and no need for manual file management.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('weLaunchedManaged.children.9', {
            fallback: 'Performance Outcomes and Early Adoption',
          })}
        >
          <ArticleText>
            {t('weLaunchedManaged.children.10', {
              fallback:
                'During internal testing and limited client rollout, sites on the new platform loaded 41 percent faster on average compared to our traditional shared hosting with the same WordPress builds. TTFB was reduced by over 200 milliseconds, and backend performance remained stable even under multi-user traffic.',
            })}
          </ArticleText>
          <ArticleText>
            {t('weLaunchedManaged.children.11', {
              fallback:
                'Clients who migrated to managed WordPress reported improved reliability and fewer support tickets related to speed, updates, and broken plugins. Early adopters included design studios, consultants, and e-commerce vendors, all of whom now operate on infrastructure tuned specifically for the behavior of WordPress.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('weLaunchedManaged.children.12', {
            fallback: 'Conclusion',
          })}
        >
          <ArticleText>
            {t('weLaunchedManaged.children.13', {
              fallback:
                'This product launch fills a long-standing gap between unmanaged WordPress hosting and expensive enterprise setups. With automation, optimization, and security built in from the start, our managed WordPress platform offers a simple, powerful solution for anyone who wants to focus on their content and business — not on server errors or plugin conflicts. The service is live and available to all new and existing clients starting April 2025.',
            })}
          </ArticleText>
        </ArticleSection>
      </>
    ),
  },
  'invoices-upgraded': {
    title: t('invoicesUpgraded.title', {
      fallback: 'Invoices, Upgraded',
    }),
    imgUrl: '/images/news/tech-2.jpg',
    date: t('invoicesUpgraded.date', {
      fallback: 'March 12, 2025',
    }),
    description: t('invoicesUpgraded.description', {
      fallback:
        'We’ve launched a major update to our billing system, introducing a unified dashboard where clients can manage all their invoices, subscription details, and renewals — without needing to contact support. This update is now live for all active users and applies across hosting, development, and maintenance services.',
    }),
    children: (
      <>
        <ArticleSection
          title={t('invoicesUpgraded.children.0', {
            fallback: 'Rationale Behind the Upgrade',
          })}
        >
          <ArticleText>
            {t('invoicesUpgraded.children.1', {
              fallback:
                'Previously, invoice access was handled manually via email or file-based delivery after project milestones or recurring billing cycles. While functional, the process created delays, increased dependency on support staff, and introduced avoidable friction for clients trying to track payments, receipts, and renewal dates.',
            })}
          </ArticleText>
          <ArticleText>
            {t('invoicesUpgraded.children.2', {
              fallback:
                'The new system removes that dependency entirely by offering self-service access to all billing-related operations in real time. It’s designed for transparency, speed, and accuracy, especially for clients managing multiple services under one account.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('invoicesUpgraded.children.3', {
            fallback: 'System Architecture and Implementation',
          })}
        >
          <ArticleText>
            {t('invoicesUpgraded.children.4', {
              fallback:
                'The new billing interface was built directly into our client dashboard using secure API integration with our invoicing engine. Each client now has a centralized view of their service history, current subscriptions, and billing documents. Invoices are generated automatically, attached to the correct project or service, and made downloadable in PDF format with full tax and service breakdowns.',
            })}
          </ArticleText>
          <ArticleText>
            {t('invoicesUpgraded.children.5', {
              fallback:
                'Renewals are now visible weeks in advance, with options to renew, cancel, or modify service plans directly from the same interface. Payment confirmations, retry logic for failed charges, and automated receipts are all part of the improved workflow. All data is encrypted and stored in compliance with current financial data handling regulations.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('invoicesUpgraded.children.6', {
            fallback: 'Benefits for Clients',
          })}
        >
          <ArticleText>
            {t('invoicesUpgraded.children.7', {
              fallback:
                'Clients no longer need to email us for copies of invoices or to confirm billing terms. All invoices are timestamped, stored in one place, and always accessible. This is especially valuable for businesses that require invoices for accounting and tax purposes across multiple departments.',
            })}
          </ArticleText>
          <ArticleText>
            {t('invoicesUpgraded.children.8', {
              fallback:
                'For recurring plans, the new system makes it possible to monitor billing cycles in real time, adjust plan tiers as needed, and manage payment methods — all without any delay or administrative overhead. The system also significantly reduces the risk of missed renewals or untracked service changes.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('invoicesUpgraded.children.9', {
            fallback: 'Conclusion',
          })}
        >
          <ArticleText>
            {t('invoicesUpgraded.children.10', {
              fallback:
                'This upgrade turns billing into a self-managed, secure, and transparent process for every client. By eliminating email threads and manual document requests, we’ve saved time for both sides and brought clarity to a critical part of the service experience. The update is already active and available to all users as of March 12, 2025.',
            })}
          </ArticleText>
        </ArticleSection>
      </>
    ),
  },
  'partnerships-people': {
    title: t('partnershipsPeople.title', {
      fallback: 'Partnerships & People',
    }),
    imgUrl: '/images/news/tech-3.jpg',
    date: t('partnershipsPeople.date', {
      fallback: 'May 30, 2025',
    }),
    description: t('partnershipsPeople.description', {
      fallback:
        'We’ve launched a new partnership with a local web development bootcamp, creating a collaborative program that gives junior developers hands-on experience by contributing to real client projects under the guidance of our senior team. The initiative is now fully active and integrated into our production workflow.',
    }),
    children: (
      <>
        <ArticleSection
          title={t('partnershipsPeople.children.0', {
            fallback: 'Purpose and Motivation',
          })}
        >
          <ArticleText>
            {t('partnershipsPeople.children.1', {
              fallback:
                'The tech industry often demands “job-ready” talent while offering limited access to real-world training. Most junior developers leave bootcamps with strong theoretical knowledge but lack applied experience on active, client-facing work. Our goal with this partnership is to close that gap by embedding selected trainees directly into our project pipeline in a structured, mentored environment.',
            })}
          </ArticleText>
          <ArticleText>
            {t('partnershipsPeople.children.2', {
              fallback:
                'This benefits both sides. Junior developers receive practical exposure in real tools, timelines, and team dynamics, while we scale faster by identifying capable, motivated contributors early. Clients benefit too, gaining access to expanded production capacity without compromise on quality, as all trainee work passes through review and supervision.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('partnershipsPeople.children.3', {
            fallback: 'Program Structure and Integration',
          })}
        >
          <ArticleText>
            {t('partnershipsPeople.children.4', {
              fallback:
                'Developers from the bootcamp are onboarded in cycles and assigned to specific phases of live client work, including front-end implementation, CMS configuration, QA testing, and documentation. Each trainee works alongside one of our senior developers who provides direct code review, technical feedback, and workflow coaching.',
            })}
          </ArticleText>
          <ArticleText>
            {t('partnershipsPeople.children.5', {
              fallback:
                'All contributions are sandboxed within staging environments and managed through Git-based version control. Only approved code passes into final production environments. This ensures both high standards and a true learning process, while maintaining the delivery pace our clients expect.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('partnershipsPeople.children.6', {
            fallback: 'Outcomes and Internal Impact',
          })}
        >
          <ArticleText>
            {t('partnershipsPeople.children.7', {
              fallback:
                'The first round of integration has already shown strong results. Internal velocity improved on multi-phase builds, and mentorship activities created new leadership pathways for mid-level team members. Trainees provided usable output within two weeks of onboarding and adapted quickly to agency-style workflows. Some are already being considered for full-time roles after program completion.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('partnershipsPeople.children.8', {
            fallback: 'Conclusion',
          })}
        >
          <ArticleText>
            {t('partnershipsPeople.children.9', {
              fallback:
                'This partnership reflects our belief that talent grows fastest when it’s trusted with responsibility — not hypothetical projects, but real ones. It also proves that mentorship and production can coexist when properly structured. We’ll continue refining the program and expanding it with new education partners in the coming months.',
            })}
          </ArticleText>
        </ArticleSection>
      </>
    ),
  },
  'regional-dev-workshop-hosted': {
    title: t('regionalDev.title', {
      fallback: 'Regional Dev Workshop Hosted',
    }),
    imgUrl: '/images/news/partner-1.jpg',
    date: t('regionalDev.date', {
      fallback: 'April 5, 2025',
    }),
    description: t('regionalDev.description', {
      fallback:
        'We hosted a full-day, hands-on web development workshop for early-stage developers, focused on bridging the gap between classroom knowledge and real-world application. The event brought together new talent, experienced engineers, and live project scenarios to provide a high-impact learning experience.',
    }),
    children: (
      <>
        <ArticleSection
          title={t('regionalDev.children.0', {
            fallback: 'Workshop Goals and Structure',
          })}
        >
          <ArticleText>
            {t('regionalDev.children.1', {
              fallback:
                'The workshop was designed to give participants direct exposure to how real client projects are planned, built, and deployed. Unlike traditional coding bootcamps or lectures, this event emphasized real constraints — deadlines, feedback loops, and multi-role collaboration. Attendees worked on stripped-down versions of actual project briefs from our internal archives, adjusted for scope and confidentiality.',
            })}
          </ArticleText>
          <ArticleText>
            {t('regionalDev.children.2', {
              fallback:
                'The format combined guided sessions with open problem-solving, allowing developers to build layouts, integrate APIs, manage Git workflows, and optimize performance in a simulated production environment. Each participant rotated between front-end, CMS setup, and QA roles, gaining a broader perspective of how professional teams operate.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('regionalDev.children.3', {
            fallback: 'Mentorship and Technical Focus',
          })}
        >
          <ArticleText>
            {t('regionalDev.children.4', {
              fallback:
                'Our core team members acted as technical leads and mentors throughout the event, offering code reviews, real-time debugging assistance, and deployment walkthroughs. Topics covered included semantic HTML structuring, performance budgeting, RESTful API integration, and responsive design under time constraints.',
            })}
          </ArticleText>
          <ArticleText>
            {t('regionalDev.children.5', {
              fallback:
                'Participants were encouraged to ask questions at every step and received actionable feedback on code quality, communication, and problem-solving approaches. We also included a session on client communication and project estimation — skills often overlooked in technical training.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('regionalDev.children.6', {
            fallback: 'Outcomes and Future Plans',
          })}
        >
          <ArticleText>
            {t('regionalDev.children.7', {
              fallback:
                'The workshop was attended by over 30 developers from across the region, many of whom had never worked in a structured team environment before. Feedback was overwhelmingly positive, with participants citing improved confidence, stronger technical understanding, and clearer expectations of what agency work entails.',
            })}
          </ArticleText>
          <ArticleText>
            {t('regionalDev.children.8', {
              fallback:
                'Based on the success of this event, we plan to make it recurring — scaling both the content and participant pool, and potentially opening it to design and product management tracks as well.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('regionalDev.children.9', {
            fallback: 'Conclusion',
          })}
        >
          <ArticleText>
            {t('regionalDev.children.10', {
              fallback:
                'This workshop reinforced our belief that real-world practice accelerates developer growth far beyond theory alone. By investing in talent early and providing transparent, production-oriented experiences, we’re helping shape the next generation of industry-ready professionals — and building stronger local tech culture in the process.',
            })}
          </ArticleText>
        </ArticleSection>
      </>
    ),
  },
  'open-source-sprint-participation': {
    title: t('openSource.title', {
      fallback: 'Open-Source Sprint Participation',
    }),
    imgUrl: '/images/news/partner-2.jpg',
    date: t('openSource.date', {
      fallback: 'March 12, 2025',
    }),
    description: t('openSource.description', {
      fallback:
        'Our team actively contributed to a multi-week open-source sprint focused on performance and reliability improvements for a widely-used content management system. The sprint brought together contributors from various regions, with the shared goal of strengthening a core tool used by thousands of developers and site owners worldwide.',
    }),
    children: (
      <>
        <ArticleSection
          title={t('openSource.children.0', {
            fallback: 'Sprint Context and Focus',
          })}
        >
          <ArticleText>
            {t('openSource.children.1', {
              fallback:
                'The sprint was organized around improving load performance, stability under scale, and maintainability of core modules in the CMS’s back-end architecture. Our contribution centered on addressing known issues in asset handling, template rendering efficiency, and caching behavior — all of which directly impact runtime speed and developer experience.',
            })}
          </ArticleText>
          <ArticleText>
            {t('openSource.children.2', {
              fallback:
                'We selected issues based on long-standing community tickets and pain points encountered by our own team during previous client projects using the platform. The work included analyzing slow-path rendering functions, isolating blocking operations during cold cache loads, and proposing code refactors for more predictable behavior under concurrent access.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('openSource.children.3', {
            fallback: 'Contributions and Implementation',
          })}
        >
          <ArticleText>
            {t('openSource.children.4', {
              fallback:
                'Our engineers submitted multiple pull requests that addressed critical performance bottlenecks in the CMS’s theme rendering pipeline. Improvements were made to how scripts and styles were registered and served, reducing total execution time on dynamic page builds. We also restructured part of the internal asset dependency loader to minimize redundant calls and streamline the build process.',
            })}
          </ArticleText>
          <ArticleText>
            {t('openSource.children.5', {
              fallback:
                'In addition to performance, we contributed to reliability by patching a rare but impactful issue related to session management in multi-language deployments. The fix improved session consistency during high-frequency content switching and multilingual routing.',
            })}
          </ArticleText>
          <ArticleText>
            {t('openSource.children.6', {
              fallback:
                'All contributions were reviewed and merged by project maintainers, and included full documentation, tests, and performance benchmarks to support long-term stability.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('openSource.children.7', {
            fallback: 'Community Impact',
          })}
        >
          <ArticleText>
            {t('openSource.children.8', {
              fallback:
                'The updates we submitted are now available in the next stable release, directly benefiting thousands of websites powered by the CMS. Developers will see better cold-start response times, fewer conflicts with custom themes, and more predictable cache behavior across deployments.',
            })}
          </ArticleText>
          <ArticleText>
            {t('openSource.children.9', {
              fallback:
                'Beyond code, our participation helped validate the value of cross-agency collaboration in open-source ecosystems. We also received valuable feedback from fellow contributors and maintainers that will inform how we architect future client solutions based on this CMS.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('openSource.children.10', {
            fallback: 'Conclusion',
          })}
        >
          <ArticleText>
            {t('openSource.children.11', {
              fallback:
                'Open-source work is not just contribution — it’s alignment with the tools we depend on and a commitment to making them better for everyone. This sprint reinforced the impact of small, focused changes on large-scale performance, and we remain committed to future collaboration with the developer community.',
            })}
          </ArticleText>
        </ArticleSection>
      </>
    ),
  },
  'senior-ux-expertise-added': {
    title: t('seniorUxExpertise.title', {
      fallback: 'Senior UX Expertise Added',
    }),
    imgUrl: '/images/news/partner-3.jpg',
    date: t('seniorUxExpertise.date', {
      fallback: 'July 1, 2025',
    }),
    description: t('seniorUxExpertise.description', {
      fallback:
        'We’ve expanded our core team with the addition of a senior UX specialist, bringing over a decade of product design experience to our agency. This strategic hire strengthens our ability to deliver high-impact, user-centered design across all client projects, from marketing sites to complex web applications.',
    }),
    children: (
      <>
        <ArticleSection
          title={t('seniorUxExpertise.children.0', {
            fallback: 'Why UX Leadership Matters',
          })}
        >
          <ArticleText>
            {t('seniorUxExpertise.children.1', {
              fallback:
                'As the complexity of digital products grows, so does the need for intentional, research-backed user experience design. Many of our recent projects involve intricate interfaces, layered user journeys, and multi-device interactions — all of which demand a higher level of UX precision.',
            })}
          </ArticleText>
          <ArticleText>
            {t('seniorUxExpertise.children.2', {
              fallback:
                'Our goal was not to simply improve visual design, but to make usability a central pillar of our development process. This meant bringing in someone who could lead cross-functional collaboration, guide research, and shape interfaces that are both beautiful and functional.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('seniorUxExpertise.children.3', {
            fallback: 'Role and Integration',
          })}
        >
          <ArticleText>
            {t('seniorUxExpertise.children.4', {
              fallback:
                'Our new UX lead is now responsible for driving design strategy across all projects, working alongside developers, project managers, and clients. Their role begins early in the discovery phase — conducting UX audits, mapping user flows, and setting standards for accessibility, interaction patterns, and responsive behavior.',
            })}
          </ArticleText>
          <ArticleText>
            {t('seniorUxExpertise.children.5', {
              fallback:
                'They also introduced new tools and processes into our workflow, including wireframe validation, rapid prototyping, and user testing cycles. These additions allow us to test hypotheses earlier, validate design decisions faster, and reduce iteration time during development.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('seniorUxExpertise.children.6', {
            fallback: 'Impact on Client Work',
          })}
        >
          <ArticleText>
            {t('seniorUxExpertise.children.7', {
              fallback:
                'Since onboarding, the quality and consistency of design execution across projects has already improved. Navigation structures have become more intuitive, form completion rates have increased, and visual hierarchy is more aligned with user priorities. Even in smaller projects, design thinking is now embedded from the start — not treated as a final polish step.',
            })}
          </ArticleText>
          <ArticleText>
            {t('seniorUxExpertise.children.8', {
              fallback:
                'Clients have responded positively, noting clearer layouts, smoother interactions, and more confidence in how users experience their platforms. Internally, our teams now work more efficiently with shared design systems and defined UX checkpoints throughout the build process.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('seniorUxExpertise.children.9', {
            fallback: 'Conclusion',
          })}
        >
          <ArticleText>
            {t('seniorUxExpertise.children.10', {
              fallback:
                'Bringing in senior UX leadership has raised the standard for every project we touch. It ensures that the interfaces we build are not just attractive, but truly effective — rooted in user needs, tested in context, and scalable over time. It’s a long-term investment in quality, clarity, and digital usability.',
            })}
          </ArticleText>
        </ArticleSection>
      </>
    ),
  },
});

import { htmlTemplate } from './html-template';

export const contactFormBody = ({ firstName }: { firstName: string }) => {
  return htmlTemplate({
    body: `
      <div class="wrapper">
        <header>
          <img style="width: 696px; height: 150px" src="https://hostixie.com/images/email/header.jpg" alt="full-logo" class="logo" />
        </header>
        <div class="main">
          <p style="font-size: 32px; color: #000; margin-bottom: 32px;">Thank you for reaching out to Hostixie!</p>
          <p class="text" style="padding-bottom: 16px; color: #222;">Hello ${firstName},</p>
          <p class="text" style="padding-bottom: 16px;">Thank you for contacting Hostixie. We have received your request and our team will review it shortly. One of our specialists will get in touch with you to discuss the next steps.</p>
          <p class="text" style="padding-bottom: 16px;">If you have any urgent questions, feel free to reply to this email.</p>
          <p style="font-size: 20px; color: #222;">Best regards, <br/> <span style="font-weight: 600;">The Hostixie Team</span></p>
        </div>
        <footer>
          <img style="width: 696px; height: 150px" src="https://hostixie.com/images/email/footer.jpg" alt="full-logo" class="logoSm" />
        </footer>
      </div>
    `,
    style: `
      .wrapper {
        width: 696px;
        margin: 0 auto;
        background: #FFF4E1;
      }
      
      .main {
        padding: 20px;
        background: #FFF4E1;
      }
      
      .text {
        color: #A4A189;
        font-size: 20px;
      }
    `,
  });
};

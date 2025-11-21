import { htmlTemplate } from './html-template';

export const requestFormBody = ({
  firstName,
  price,
  serviceName,
  orderNumber,
}: {
  firstName: string;
  serviceName: string;
  price: string;
  orderNumber: string;
}) => {
  return htmlTemplate({
    body: `
      <div class="wrapper">
        <header>
          <img style="width: 696px; height: 150px" src="https://hostixie.com/images/email/header.jpg" alt="full-logo" class="logo" />
        </header>
        <div class="main">
          <p style="font-size: 32px; color: #000; margin-bottom: 32px;">Your order has been received – Hostixie</p>
          <p class="text" style="padding-bottom: 16px; color: #222;">Hello ${firstName},</p>
          <p class="text" style="padding-bottom: 16px;">Thank you for choosing Hostixie. Your order #${orderNumber} has been successfully received.</p>
          <p class="text" style="margin: 0;">Order details:</p>
          <ul style="padding-left: 20px; list-style-type: disc; padding-bottom: 16px; margin: 0;">
            <li class="text">Service: <span style="color: #FE5F05;">${serviceName}</span></li>
            <li class="text">Price: <span style="color: #FE5F05;">${price}</span></li>
          </ul>
          <p class="text" style="padding-bottom: 32px;">Our team will now prepare everything for you and reach out with the next steps.</p>
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

'use client';

import { GetInTouch } from '@/shared/ui/components/get-in-touch';

export const NeedHelp = () => {
  return (
    <section className="bg-[#FFF4E1] py-20">
      <div className="container">
        <GetInTouch
          title="Need Help Choosing a Service or Package?"
          subtitle="Not sure which service or package is right for your business? No problem!"
          text="Our team is here to guide you through every step of the process. Whether you need advice on a custom website, e-commerce platform, or anything in between, we’re happy to provide personalized recommendations based on your brand ambitions. Reach out today and let’s explore how we can bring your vision to life with the ideal solution for your business needs."
          button="Get in Touch"
          titleClassName="text-[80px] max-md:text-[40px] font-normal leading-[120%] tracking-[1.12px] md:leading-[120%]"
        />
      </div>
    </section>
  );
};

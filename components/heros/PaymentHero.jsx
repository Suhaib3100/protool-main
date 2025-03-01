'use client';
import React from 'react';
import PaymentImage from '../../public/images/payment/payment-hero.png';
import PaymentImageDark from '../../public/images/payment/payment-hero-dark.png';
import PaymentImageDevice from '../../public/images/payment/payment-hero-device.png';
import PaymentImageDeviceDark from '../../public/images/payment/payment-hero-device-dark.png';
import Image from 'next/image';
import Link from 'next/link';
import { fadeUpAnimation } from '@/data/animation';
import { motion } from 'framer-motion';

const ProtoolHero = () => {
  return (
    <section className="hero relative overflow-hidden pb-[140px] max-lg:pt-[160px] lg:pt-[260px]">
      <div className="container">
        <div className="relative z-10 grid grid-cols-12 items-end gap-5">
          <motion.div
            className="max-md:col-span-full max-md:mb-[350px] md:col-span-7"
            initial="initial"
            animate="animate"
            variants={fadeUpAnimation}
          >
            <p className=" mb-4 font-medium uppercase">
              Website & App Development
            </p>
            <h1 className="mb-10">
              Empowering Your Business with
              <span className="inline-block px-5 pb-2.5 pt-0.5 font-playfair italic leading-none">
                {' '}
                Digital{' '}
              </span>
              Solutions
            </h1>
            <p className="mb-12 max-w-[590px]">
              Protool is a leading agency offering innovative website and app
              development services combined with powerful digital marketing
              strategies. Let’s take your business to the next level.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/contact" className="btn">
                Get Started
              </Link>
              <Link href="/request-demo" className="btn-outline">
                Request a Demo
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="relative max-md:col-span-full md:z-10 md:col-span-5"
            initial="initial"
            animate="animate"
            variants={fadeUpAnimation}
          >
            <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden">
              <div className="rounded-full bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-lg:hidden 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] -mt-150 rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:blur-[80px] max-lg:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-lg:hidden 1xl:h-[442px] 1xl:w-[442px]"></div>
            </div>
            <div className="absolute -bottom-150 left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')]  bg-contain bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
            <div className="h-full w-full">
              <div className="relative">
                <Image
                  src={PaymentImage}
                  alt="hero Image"
                  className="inline-block w-full rounded-medium shadow-nav dark:hidden"
                />
                <Image
                  src={PaymentImageDark}
                  alt="hero Image"
                  className="hidden w-full rounded-medium shadow-nav dark:inline-block"
                />
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 max-lg:w-4/5 max-md:w-[285px] lg:aspect-video lg:w-[285px]">
                  <Image
                    src={PaymentImageDevice}
                    alt="hero Image"
                    className="inline-block w-full rounded-t-medium  dark:hidden"
                  />
                  <Image
                    src={PaymentImageDeviceDark}
                    alt="hero Image"
                    className="hidden w-full rounded-t-medium dark:inline-block "
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProtoolHero;

'use client';
import Footer from 'src/components/Footer';
import SwapComponent from 'src/components/SwapComponent';
import WalletWrapper from 'src/components/WalletWrapper';
import { useAccount } from 'wagmi';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import Image from 'next/image';

export default function Page() {
  const { address } = useAccount();

  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
      <section className="mt-6 mb-6 flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-0">
          <Image
            src="/miggles-logo.png"
            alt="Miggles Logo"
            width={40}
            height={40}
          />
          <div className="flex items-center gap-3">
            <SignupButton />
            {!address && <LoginButton />}
          </div>
        </div>
      </section>
      <section className="templateSection flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-blue-100 px-2 py-4 md:grow">
        {address ? (
          <SwapComponent />
        ) : (
          <WalletWrapper
            className="w-[450px] max-w-full bg-[#0052FF] text-white hover:bg-[#0039B3]"
            text="Sign in to swap"
          />
        )}
      </section>
      <Footer />
    </div>
  );
}

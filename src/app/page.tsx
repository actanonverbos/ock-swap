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
    <div className="flex min-h-screen w-96 max-w-full flex-col px-1 md:w-[1008px]">
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
      <section className="templateSection flex flex-grow w-full flex-col items-center justify-center gap-4 rounded-xl bg-blue-100 px-2 py-4">
        {!address && (
          <>
            <video width="80" height="80" autoPlay loop muted playsInline className="mb-4">
              <source src="/miggles-animation.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <h1 className="text-5xl font-bold text-center mb-2">
              $MIGGLES SWAP
            </h1>
            <p className="text-xl text-center mb-6 text-gray-600">
              Connect your wallet or sign up to get started
            </p>
            <WalletWrapper
              className="w-[450px] max-w-full bg-[#0052FF] text-white hover:bg-[#0039B3]"
              text="Connect Wallet"
            />
          </>
        )}
        {address && <SwapComponent />}
      </section>
      <Footer />
    </div>
  );
}

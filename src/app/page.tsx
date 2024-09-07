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
    <div className="min-h-screen w-full flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <Image
          src="/miggles-logo.png"
          alt="Miggles Logo"
          width={40}
          height={40}
          className="rounded-full float-animation"
        />
        <div className="flex items-center gap-3">
          <SignupButton />
          {!address && <LoginButton />}
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md mx-auto">
          {!address ? (
            <div className="text-center">
              <video width="80" height="80" autoPlay loop muted playsInline className="mx-auto mb-6">
                <source src="/miggles-animation.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              <h1 className="text-4xl font-bold text-white mb-4">$MIGGLES SWAP</h1>
              <p className="text-xl mb-8 text-blue-200">
                Connect your wallet or sign up to get started
              </p>
              <div className="flex justify-center">
                <WalletWrapper
                  className="w-full max-w-xs py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300 subtle-pulse-animation"
                  text="Connect Wallet"
                />
              </div>
            </div>
          ) : (
              <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl shimmer relative">
                <SwapComponent />
              </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

'use client';
import Footer from 'src/components/Footer';
import SwapComponent from 'src/components/SwapComponent';
import WalletWrapper from 'src/components/WalletWrapper';
import { useAccount } from 'wagmi';
import SignupButton from '../components/SignupButton';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Avatar, Name } from '@coinbase/onchainkit/identity';

export default function Page() {
  const { address } = useAccount();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
      {address && (
        <header className="w-full flex justify-between items-center mb-8">
          <video width="40" height="40" autoPlay loop muted playsInline>
            <source src="/miggles-animation.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <WalletWrapper
            className="py-2 px-4 rounded-lg bg-blue-500 text-white text-base font-semibold hover:bg-blue-600 transition-colors"
          />
        </header>
      )}
      <main className="w-full max-w-md flex-grow flex flex-col items-center justify-center">
        {!address ? (
          <div className="flex flex-col items-center justify-center w-full">
            <video width="80" height="80" autoPlay loop muted playsInline className="mb-8">
              <source src="/miggles-animation.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
              $MIGGLES Swap
            </h1>
            <p className="text-xl text-center mb-8 text-gray-600">
              Connect your wallet to get started. Or create a new Smart Wallet.
            </p>
            <div className="flex flex-row gap-4 w-full justify-center">
              <Wallet>
                <ConnectWallet className="py-4 px-6 rounded-lg bg-blue-500 text-white text-xl font-semibold hover:bg-blue-600 transition-colors">
                  <Avatar className="h-6 w-6 mr-2" />
                  <Name />
                </ConnectWallet>
              </Wallet>
              <SignupButton />
            </div>
          </div>
        ) : (
          <SwapComponent />
        )}
      </main>
    </div>
  );
}

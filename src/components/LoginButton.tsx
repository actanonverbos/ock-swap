'use client';
import WalletWrapper from './WalletWrapper';

export default function LoginButton() {
  return (
    <WalletWrapper
      className="min-w-[90px] bg-[#0052FF] text-white hover:bg-[#0039B3]"
      text="Log in"
      withWalletAggregator={true}
    />
  );
}

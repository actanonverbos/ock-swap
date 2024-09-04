'use client';
import WalletWrapper from './WalletWrapper';

export default function SignupButton() {
  return (
    <WalletWrapper
      className="py-4 px-6 rounded-lg bg-gray-400 text-gray-800 text-xl font-semibold hover:bg-gray-300 transition-colors"
      text="Sign up"
    />
  );
}

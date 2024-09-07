import { Avatar, Name } from '@coinbase/onchainkit/identity';
import { 
  Swap, 
  SwapAmountInput, 
  SwapToggleButton, 
  SwapButton, 
  SwapMessage, 
} from '@coinbase/onchainkit/swap'; 
import { Wallet, ConnectWallet } from '@coinbase/onchainkit/wallet';
import { useAccount } from 'wagmi';
import type { Token } from '@coinbase/onchainkit/token';

export default function SwapComponent() {
  const { address } = useAccount();

  const ETHToken: Token = {
    address: "",
    chainId: 8453,
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
    image: "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png",
  };

  const MIGGLESToken: Token = {
    address: "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
    chainId: 8453,
    decimals: 18,
    name: "Mister Miggles",
    symbol: "MIGGLES",
    image: "/miggles-logo.png",
  };

  const swappableTokens: Token[] = [ETHToken];
  return address ? (
    <Swap address={address} className="w-full">
      <SwapAmountInput
        label="Sell"
        swappableTokens={swappableTokens}
        token={ETHToken}
        type="from"
      />
      <SwapToggleButton />
      <SwapAmountInput
        label="Buy"
        swappableTokens={[MIGGLESToken]}
        token={MIGGLESToken}
        type="to"
      />
      <SwapButton className="w-full" />
      <SwapMessage />
    </Swap> 
  ) : (
    <Wallet>
      <ConnectWallet>
        <Avatar className="h-6 w-6" />
        <Name />
      </ConnectWallet>
    </Wallet>
  );
}

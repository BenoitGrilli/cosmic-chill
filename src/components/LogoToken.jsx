import { ConnectWallet, ThirdwebProvider } from "@thirdweb-dev/react";
import Logo from "../images/logo-token.png";

const LogoToken = () => {
    const backgroundStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
    };


export default function LogoToken() {
   
   
    return (
      <ThirdwebProvider>
        <ConnectWallet></ConnectWallet>
      </ThirdwebProvider>
        
    )
};
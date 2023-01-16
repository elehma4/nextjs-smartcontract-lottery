import { useMoralis } from "react-moralis"
import { MoralisProvider } from "react-moralis"

export default function ManualHeader(){
    // hook:
    const {enableWeb3} = useMoralis()



    return(<div>
        <button onClick={async () => {await enableWeb3()}}>Connect Wallet</button>
        </div>)
}


import { useMoralis } from "react-moralis"
import { useEffect } from "react"

export default function ManualHeader() {
    // hook:
    const { enableWeb3, account, isWeb3Enabled } = useMoralis()

    useEffect(() => {
        console.log("Hi!")
        console.log(isWeb3Enabled)
    }, [isWeb3Enabled])

    return (
        <div>
            {account ? (
                <div>
                    Connected to {account.slice(0, 6)}...{account.slice(account.length - 4)}
                </div>
            ) : (
                <button
                    onClick={async () => {
                        await enableWeb3()
                    }}
                >
                    Connect Wallet
                </button>
            )}
        </div>
    )
}

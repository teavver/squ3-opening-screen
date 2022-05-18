// @ts-ignore
import Web3 from 'web3/dist/web3.min.js'
import Web3Instance from "./connectWallet"

const web3instance:Web3Instance = new Web3Instance()
// const web3:Web3 = web3instance.get()


const connectButton: HTMLElement | null = document.querySelector("#connect")

connectButton?.addEventListener("click", async(e) => {
    web3instance.connectWallet()
})


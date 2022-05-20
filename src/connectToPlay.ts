// @ts-ignore
import Web3 from 'web3/dist/web3.min.js'
import Web3Instance from "./connectWallet"

const web3instance:Web3Instance = new Web3Instance()
let web3:Web3;
// const web3:Web3 = web3instance.get()

// window.onload = function() {
//     isWalletConnected = false
// }

let isWalletConnected: boolean = false

const connectButton: HTMLElement | null = document.querySelector("#connect")

const playButton: HTMLElement | null = document.querySelector("#playbutton")


playButton?.addEventListener("click", async(e) => {
        window.location.href = 'http://127.0.0.1:3000/dist/index.html'
})

connectButton?.addEventListener("click", async(e) => {
    await web3instance.connectWallet()
    web3 = web3instance.get()
    web3instance.createContractInterface()
    // isWalletConnected = true
    // console.log(isWalletConnected)

    

    

    // web3instance.retrieveTokenURI()

    // web3instance.receiveFromTestContract()

    // const balance = await web3.eth.getBalance('0x1Fb0d6ecb9709b539013C05B6C96201501eE68df')
    // console.log(balance)

})
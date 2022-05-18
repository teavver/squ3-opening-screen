// @ts-ignore
import Web3 from 'web3/dist/web3.min.js'
import Web3Instance from "./connectWallet"

const web3instance:Web3Instance = new Web3Instance()
let web3:Web3;




const connectButton: HTMLElement | null = document.querySelector("#connect")

const submit: HTMLElement | null = document.querySelector("#submit")

const input: HTMLInputElement | null = document.querySelector("#input")

const disconnectButton: HTMLElement | null = document.querySelector("#disconnect")

disconnectButton?.addEventListener("click", async(e) => {
    window.location.reload();
})


submit?.addEventListener("click", async(e) => {
    const inputData = Number(input?.value)

    // const inputNumber = input as number
    
    // web3instance.sendToTestContract(inputData)
})


connectButton?.addEventListener("click", async(e) => {
    web3instance.connectWallet()
    web3 = web3instance.get()

    web3instance.createContractInterface()

    // web3instance.receiveFromTestContract()

    // const balance = await web3.eth.getBalance('0x1Fb0d6ecb9709b539013C05B6C96201501eE68df')
    // console.log(balance)

})



// https://imgur.com/a/9l77EcM

// test url for 32x32
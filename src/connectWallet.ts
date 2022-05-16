// @ts-ignore
import Web3 from 'web3/dist/web3.min.js'

declare global {
  interface Window {
      ethereum:any,
      web3:any
  }
}

const {ethereum} = window
let {web3} = window

async function connectWallet(){
  if(ethereum){
    web3 = new Web3(ethereum)
    try{
      await ethereum.enable()
      const accounts = await web3.eth.getAccounts()
      console.log(accounts)
    }catch(error){
      console.error(error)
    }
  }
}

const bsctestnetUrl:string = "https://data-seed-prebsc-1-s1.binance.org:8545"
const connectButton: HTMLElement | null = document.querySelector("#connect")

connectButton?.addEventListener("click", async(e) => {
  connectWallet()
})



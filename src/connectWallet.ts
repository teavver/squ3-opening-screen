// @ts-ignore
import Web3 from 'web3/dist/web3.min.js'
import Contract from '../contract_data/ABI_NFT.json'

declare global {
  interface Window {
      ethereum:any,
  }
}

const {ethereum} = window

export default class Web3Instance{

  web3:Web3
  networkId:number = 0
  testcontract:any
  myAddress:string = ''

  public get(){
    return this.web3
  }
  

  public async connectWallet(){
    if(ethereum){
      this.web3 = new Web3(ethereum)
      try{
        await ethereum.enable()
        const accounts = await this.web3.eth.getAccounts()
        this.myAddress = accounts[0]
        this.networkId = await this.web3.eth.net.getId()
        console.log(accounts)
      }catch(error){
        console.error(error)
      }
    }
  }

  public async createContractInterface(){
    const abi = Contract.output.abi
    const contact_address = "0xba07224265144109Cb7fbFC4d90f6A8Ce600F76B"
    this.testcontract = new this.web3.eth.Contract(abi, contact_address)
    
  }

  public async sendToTestContract(_input:number){
    this.testcontract.methods.store(_input).send({from: this.myAddress})
    // .on('receipt', function(){
    //   window.location.reload();
    // })
  }

  public async receiveFromTestContract(){
    const response = await this.testcontract.methods.retrieve().call() 
    console.log(response)
  }


}





//const bsctestnetUrl:string = "https://data-seed-prebsc-1-s1.binance.org:8545"




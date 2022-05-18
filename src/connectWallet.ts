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
  myAddress:string | null = ''

  public get(){
    return this.web3
  }
  

  public async connectWallet(){
    if(ethereum){
      this.web3 = new Web3(ethereum)
      try{
        // await ethereum.enable()
        // const accounts = await this.web3.eth.getAccounts()
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        this.myAddress = accounts[0]
        this.networkId = await this.web3.eth.net.getId()
        document.getElementById('disconnect')?.classList.remove('hidden');
        this.showAddress(this.myAddress)
        console.log(accounts)
      }catch(error){
        console.error(error)
      }
    }
  }

  public async disconnectWallet(){
    if(ethereum){
      try{
        console.log("disconnected!")
        this.myAddress = null
        // await this.web3.window.reload()
        document.getElementById('disconnect')?.classList.add('hidden');
      } catch (error){
        console.log(error)
      }
    }
  }

  public async showAddress(myAddress:string | null){
    const Address_textfield:  HTMLElement | null = document.querySelector("#connected_address");
    if (Address_textfield != null){
      Address_textfield.innerText = `Connected as: ${myAddress}`;
    }
  }

  public async createContractInterface(){
    const abi = Contract.output.abi
    const contact_address = "0xba07224265144109Cb7fbFC4d90f6A8Ce600F76B"
    let test_value:String = ''
    this.testcontract = new this.web3.eth.Contract(abi, contact_address, test_value)
    
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




// @ts-ignore
import Web3 from 'web3/dist/web3.min.js'
import Web3Instance from "./connectWallet"

const web3instance:Web3Instance = new Web3Instance()
let web3:Web3;




const connectButton: HTMLElement | null = document.querySelector("#connect")

const submit: HTMLElement | null = document.querySelector("#submit")

const input: HTMLInputElement | null = document.querySelector("#input")

const disconnectButton: HTMLElement | null = document.querySelector("#disconnect")

const upload_preview: HTMLImageElement | null = document.querySelector("#img_preview")

let uploaded_file:HTMLElement | null = document.querySelector("#file")



disconnectButton?.addEventListener("click", async(e) => {
    window.location.reload();
})


submit?.addEventListener("click", async(e) => {
    const inputData:string = input?.value as string

    web3instance.mint(inputData)
    // const inputNumber = input as number
    
    // web3instance.sendToTestContract(inputData)
})


connectButton?.addEventListener("click", async(e) => {
    await web3instance.connectWallet()
    web3 = web3instance.get()
    web3instance.createContractInterface()

    

    // web3instance.retrieveTokenURI()

    // web3instance.receiveFromTestContract()

    // const balance = await web3.eth.getBalance('0x1Fb0d6ecb9709b539013C05B6C96201501eE68df')
    // console.log(balance)

})




// function showPreview(event: Event & { target: HTMLInputElement }) {
//     console.log("trying to preview")
//     if (event.target.files.length > 0) {
//       let src:any = URL.createObjectURL(event.target.files[0]);
//       let preview:any  = document.getElementById("preview");
//       preview.src = src;
//       preview.style.display = "block";
//     }
//   }



// https://imgur.com/a/9l77EcM
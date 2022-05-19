// @ts-ignore
import Web3 from 'web3/dist/web3.min.js'
import Web3Instance from "./connectWallet"

declare global{
    interface EventTarget {
        files:Array<File>
    }
}


const web3instance:Web3Instance = new Web3Instance()
let web3:Web3;


const connectButton: HTMLElement | null = document.querySelector("#connect")

const submit: HTMLElement | null = document.querySelector("#submit")

// const input: HTMLInputElement | null = document.querySelector("#input")

const disconnectButton: HTMLElement | null = document.querySelector("#disconnect")





disconnectButton?.addEventListener("click", async(e) => {
    window.location.reload();
})


// submit?.addEventListener("click", async(e) => {
//     const inputData:string = input?.value as string

//     web3instance.mint(inputData)

// })


connectButton?.addEventListener("click", async(e) => {
    await web3instance.connectWallet()
    web3 = web3instance.get()
    web3instance.createContractInterface()

    

    // web3instance.retrieveTokenURI()

    // web3instance.receiveFromTestContract()

    // const balance = await web3.eth.getBalance('0x1Fb0d6ecb9709b539013C05B6C96201501eE68df')
    // console.log(balance)

})
// const target = event?.target as HTMLInputElement;
// const files = target.files;

// to na gorze to napewno nie moze tutaj byc

document.getElementById("photo")!.onchange= function(e: Event) {
    const file:File = event?.target?.files[0] as File

    const previewImg:HTMLImageElement = document.getElementById('output') as HTMLImageElement 

    previewImg.src = window.URL.createObjectURL(file)
    
    const reader = new FileReader();
    reader.readAsDataURL(file)

    reader.onload = function(evt){
        console.log(evt.target?.result)
    }
   
}

// document.getElementById("photo")?.addEventListener("change", evt => getBase64(e: Event))

// let inputPhoto = (<HTMLInputElement>e.target).files[0];


 

//  getBase64(file); // prints the base64 string


// https://imgur.com/a/9l77EcM
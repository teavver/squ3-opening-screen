const { default: Web3 } = require("web3");

// function input() {
//     let inputInt = document.getElementById("input").value;
//     inputInt = inputInt*2
//     console.log(inputInt)
// }
const getWeb3 = async () => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3(window.ethereum)

        try {
            await window.ethereum.request({ method: "eth_requestAccounts" })
            resolve(web3)
        } catch (error) {
            reject(error)
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit").addEventListener("click"), async () => {
        const web3 = await getWeb3()
    }
})
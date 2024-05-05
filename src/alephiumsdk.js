const { NodeProvider } = require("@alephium/web3");

const nodeProvider = new NodeProvider('https://node-v20.mainnet.alephium.org') // rate-limited use as testing needs

async function getResults() {
    let result = await nodeProvider.blockflow.getBlockflowChainInfo({
        fromGroup: 0,
        toGroup: 1
    })

    console.log(result)
}

async function getResultsAddy() {
    let result = await nodeProvider.addresses.getAddressesAddressBalance('3faXfooE6LrtzU15Xdd9Bo84Uwi9GdYYwdKJTpBA89b8vHf7ssaVrLxnr7fjAwDz4YKZAbtgKP3Ry44KTqQfAtP6iVtmD9xyxdVKYsiqUjoTiTxrpvtXu2gb9Mrtn2XCu6rEsput1czjzvfKyNGr7PEYaopWdXNiDK76BK9WqjRj5pdCfghWy5UsUi9BuG6GAN1HoUH4PY21idQyvoa8dDDzVtU4ie')
    console.log(result)
}

async function getResultsAddyTx() {
    let result = await nodeProvider.transactions.getTransactionsStatus({
        txId: '0a3c0cfeb7db6e56c0163c441bd6c0f3f676ace95f95ede2e3097cfb99b3a1d8'
    })
    console.log(result)
}

getResults()
getResultsAddy()
getResultsAddyTx()


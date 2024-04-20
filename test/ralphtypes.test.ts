import { web3, Project, TestContractParams, addressFromContractId, AssetOutput, DUST_AMOUNT, groupOfAddress, stringToHex } from '@alephium/web3'
import { expectAssertionError, randomContractId, testAddress, testNodeWallet } from '@alephium/web3-test'
import { deployToDevnet } from '@alephium/cli'
//import { TokenFaucet, TokenFaucetTypes, Withdraw } from '../artifacts/ts' // Base Contracts
import { RalphTypes, RalphTypesTypes } from '../artifacts/ts'               // Our New Imports

describe('unit tests', () => {
  let testContractId: string
  let testTokenId: string
  let testContractAddress: string
  let testParamsFixture: TestContractParams<RalphTypesTypes.Fields, { x: bigint }>

  // We initialize the fixture variables before all tests
  beforeAll(async () => {
    web3.setCurrentNodeProvider('http://127.0.0.1:22973', undefined, fetch)
    await Project.build()
    testContractId = randomContractId()
    testTokenId = testContractId
    testContractAddress = addressFromContractId(testContractId)
    testParamsFixture = {
      // a random address that the test contract resides in the tests
      address: testContractAddress,
      // assets owned by the test contract before a test
      initialAsset: { alphAmount: 10n ** 18n, tokens: [{ id: testTokenId, amount: 10n }] },
      // initial state of the test contract
      initialFields: { // we will now add our contract variables
        time: 20n,
        condition: true,
        text: stringToHex("Hello World"),
        owner: testAddress,
        array: [1n,2n,3n,4n],
        result: 0n
      },
      // arguments to test the target function of the test contract
      testArgs: { x: 1n },
      // assets owned by the caller of the function
      inputAssets: [{ address: testAddress, asset: { alphAmount: 10n ** 18n } }]
    }
  })

  it('test math', async () => {
    const testParams = testParamsFixture
    const testResult = await RalphTypes.tests.getTime(testParams)

    // only one contract involved in the test
    const contractState = testResult.contracts[0] as RalphTypesTypes.State // get contract state
    expect(contractState.address).toEqual(testContractAddress)
    expect(contractState.fields.time).toEqual(20n)
    // time * tempfoo 
    expect(contractState.fields.result).toEqual(40n) // if result is not equal to zero the test fails

    // the test framework support debug messages too
    // debug will be disabled automatically at the deployment to real networks
    expect(testResult.debugMessages).toEqual([
      { contractAddress: testContractAddress, message: 'The current result is 40' } // evaluate to true
    ])
  })

  it('youtube example', async () => {
    const testParams = testParamsFixture
    const testResult = await RalphTypes.tests.getIndex(testParams)

    // only one contract involved in the test
    const contractState = testResult.contracts[0] as RalphTypesTypes.State // get contract state
    expect(contractState.address).toEqual(testContractAddress)
    expect(contractState.fields.array[0]).toEqual(1n)
    // index(x)
    expect(contractState.fields.result).toEqual(2n) // if result is not equal to zero the test fails
  })
})

/*
describe('integration tests', () => {
  beforeAll(async () => {
    web3.setCurrentNodeProvider('http://127.0.0.1:22973', undefined, fetch)
    await Project.build()
  })

  it('should withdraw on devnet', async () => {
    const signer = await testNodeWallet()
    const deployments = await deployToDevnet()

    // Test with all of the addresses of the wallet
    for (const account of await signer.getAccounts()) {
      const testAddress = account.address
      await signer.setSelectedAccount(testAddress)
      const testGroup = account.group

      const faucet = deployments.getInstance(TokenFaucet, testGroup)
      if (faucet === undefined) {
        console.log(`The contract is not deployed on group ${account.group}`)
        continue
      }

      expect(faucet.groupIndex).toEqual(testGroup)
      const initialState = await faucet.fetchState()
      const initialBalance = initialState.fields.balance

      // Call `withdraw` function 10 times
      for (let i = 0; i < 10; i++) {
        await Withdraw.execute(signer, {
          initialFields: { token: faucet.contractId, amount: 1n },
          attoAlphAmount: DUST_AMOUNT * 2n
        })

        const newState = await faucet.fetchState()
        const newBalance = newState.fields.balance
        expect(newBalance).toEqual(initialBalance - BigInt(i) - 1n)
      }
    }
  }, 20000)
})
*/

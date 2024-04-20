/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
} from "@alephium/web3";
import { default as RalphTypesContractJson } from "../datatypes/RalphTypes.ral.json";
import { getContractByCodeHash } from "./contracts";
import { Foo, AllStructs } from "./types";

// Custom types for the contract
export namespace RalphTypesTypes {
  export type Fields = {
    time: bigint;
    condition: boolean;
    text: HexString;
    owner: Address;
    array: [bigint, bigint, bigint, bigint];
    result: bigint;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getCondition: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<boolean>;
    };
    getText: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getOwner: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<Address>;
    };
    getArray: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<[bigint, bigint, bigint, bigint]>;
    };
    getIndex: {
      params: CallContractParams<{ x: bigint }>;
      result: CallContractResult<bigint>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<
  RalphTypesInstance,
  RalphTypesTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as RalphTypesTypes.Fields;
  }

  at(address: string): RalphTypesInstance {
    return new RalphTypesInstance(address);
  }

  tests = {
    getTime: async (
      params: TestContractParamsWithoutMaps<
        RalphTypesTypes.Fields,
        { x: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "getTime", params);
    },
    getCondition: async (
      params: Omit<
        TestContractParamsWithoutMaps<RalphTypesTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<boolean>> => {
      return testMethod(this, "getCondition", params);
    },
    getText: async (
      params: Omit<
        TestContractParamsWithoutMaps<RalphTypesTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getText", params);
    },
    getOwner: async (
      params: Omit<
        TestContractParamsWithoutMaps<RalphTypesTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<Address>> => {
      return testMethod(this, "getOwner", params);
    },
    getArray: async (
      params: Omit<
        TestContractParamsWithoutMaps<RalphTypesTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<
      TestContractResultWithoutMaps<[bigint, bigint, bigint, bigint]>
    > => {
      return testMethod(this, "getArray", params);
    },
    getIndex: async (
      params: TestContractParamsWithoutMaps<
        RalphTypesTypes.Fields,
        { x: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getIndex", params);
    },
  };
}

// Use this object to test and deploy the contract
export const RalphTypes = new Factory(
  Contract.fromJson(
    RalphTypesContractJson,
    "=4-2=2-2+38=2-2+41=2-2+4a=2+53=1+0=1+2=2-2+7d=11-1+f=42+00a0007e02165468652063757272656e7420726573756c7420697320=140",
    "3b5613fa056fb4d4b6f20315fd1bb294cb3d47dbe129e1083e392ec0d6dae3dd",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class RalphTypesInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<RalphTypesTypes.State> {
    return fetchContractState(RalphTypes, this);
  }

  methods = {
    getCondition: async (
      params?: RalphTypesTypes.CallMethodParams<"getCondition">
    ): Promise<RalphTypesTypes.CallMethodResult<"getCondition">> => {
      return callMethod(
        RalphTypes,
        this,
        "getCondition",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getText: async (
      params?: RalphTypesTypes.CallMethodParams<"getText">
    ): Promise<RalphTypesTypes.CallMethodResult<"getText">> => {
      return callMethod(
        RalphTypes,
        this,
        "getText",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getOwner: async (
      params?: RalphTypesTypes.CallMethodParams<"getOwner">
    ): Promise<RalphTypesTypes.CallMethodResult<"getOwner">> => {
      return callMethod(
        RalphTypes,
        this,
        "getOwner",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getArray: async (
      params?: RalphTypesTypes.CallMethodParams<"getArray">
    ): Promise<RalphTypesTypes.CallMethodResult<"getArray">> => {
      return callMethod(
        RalphTypes,
        this,
        "getArray",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getIndex: async (
      params: RalphTypesTypes.CallMethodParams<"getIndex">
    ): Promise<RalphTypesTypes.CallMethodResult<"getIndex">> => {
      return callMethod(
        RalphTypes,
        this,
        "getIndex",
        params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends RalphTypesTypes.MultiCallParams>(
    calls: Calls
  ): Promise<RalphTypesTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      RalphTypes,
      this,
      calls,
      getContractByCodeHash
    )) as RalphTypesTypes.MultiCallResults<Calls>;
  }
}

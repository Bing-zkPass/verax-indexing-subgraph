import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  Initialized,
  OwnershipTransferred,
  SchemaCreated
} from "../generated/Schema/Schema"

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSchemaCreatedEvent(
  id: Bytes,
  name: string,
  description: string,
  context: string,
  schemaString: string
): SchemaCreated {
  let schemaCreatedEvent = changetype<SchemaCreated>(newMockEvent())

  schemaCreatedEvent.parameters = new Array()

  schemaCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  schemaCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  schemaCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  schemaCreatedEvent.parameters.push(
    new ethereum.EventParam("context", ethereum.Value.fromString(context))
  )
  schemaCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "schemaString",
      ethereum.Value.fromString(schemaString)
    )
  )

  return schemaCreatedEvent
}

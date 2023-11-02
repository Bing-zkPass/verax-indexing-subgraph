import {
  SchemaCreated as SchemaCreatedEvent
} from "../generated/Schema/Schema"
import {
  SchemaCreated
} from "../generated/schema"

import { log } from '@graphprotocol/graph-ts'


export function handleSchemaCreated(event: SchemaCreatedEvent): void {
  let entity = new SchemaCreated(event.params.id.toHexString())

  log.info(`handleSchemaRegistered ${event.params.id.toHexString()}, ${event.params.description}, ${event.params.context}, ${event.params.schemaString}`, [])

  entity.name = event.params.name
  entity.description = event.params.description
  entity.context = event.params.context
  entity.schemaString = event.params.schemaString
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

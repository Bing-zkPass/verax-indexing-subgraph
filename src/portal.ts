import {
  Attested as AttestedEvent
} from "../generated/Portal/Portal"
import {
  Attested
} from "../generated/schema"

import { log } from '@graphprotocol/graph-ts'

export function handleAttested(event: AttestedEvent): void {
  let entity = new Attested(event.params.uid.toHexString())

  log.info(`handleAttested ${event.params.uid.toHexString()}, ${event.params.schema}, ${event.params.recipient}, ${event.params.allocator}, ${event.params.notary}`, [])

  entity.schema = event.params.schema
  entity.recipient = event.params.recipient
  entity.allocator = event.params.allocator
  entity.notary = event.params.notary
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
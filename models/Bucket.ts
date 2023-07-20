import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

export const BucketModel = types
  .model("Bucket")
  .props({
    name: types.string,
  })
  .actions(withSetPropAction)

export interface Bucket extends Instance<typeof BucketModel> {}
export interface BucketSnapshotOut extends SnapshotOut<typeof BucketModel> {}
export interface BucketSnapshotIn extends SnapshotIn<typeof BucketModel> {}
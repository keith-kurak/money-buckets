import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { BucketModel } from "./Bucket"

export const BudgetModel = types
  .model("Budget")
  .props({
    name: types.string,
    buckets: types.array(BucketModel),
  })
  .actions(withSetPropAction)

export interface Budget extends Instance<typeof BudgetModel> {}
export interface BudgetSnapshotOut extends SnapshotOut<typeof BudgetModel> {}
export interface BudgetSnapshotIn extends SnapshotIn<typeof BudgetModel> {}
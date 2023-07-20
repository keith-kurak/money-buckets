import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

export const LineItemModel = types
  .model("LineItem")
  .props({
    description: types.string,
    amount: types.number,
  })
  .actions(withSetPropAction)

export interface LineItem extends Instance<typeof LineItemModel> {}
export interface LineItemSnapshotOut extends SnapshotOut<typeof LineItemModel> {}
export interface LineItemSnapshotIn extends SnapshotIn<typeof LineItemModel> {}
import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { BudgetModel } from "./Budget"

export const BudgetsStoreModel = types
  .model("BudgetsStore")
  .props({
    budgets: types.array(BudgetModel),
  })
  .views((store) => ({
  }))
  .actions((store) => ({
    initWithDemoData: function() {
      store.budgets.push({
        name: 'main',
        buckets: [
          {
            name: 'Ben'
          },
          {
            name: 'Ephraim'
          },
          {
            name: 'Helena'
          },
          {
            name: 'Stella'
          },
          {
            name: 'Oscar'
          }
        ]
      })
    }
  }))

export interface BudgetsStore extends Instance<typeof BudgetsStoreModel> {}
export interface BudgetsStoreSnapshot extends SnapshotOut<typeof BudgetsStoreModel> {}


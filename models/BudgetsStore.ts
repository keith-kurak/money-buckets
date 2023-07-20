import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { BudgetModel } from "./Budget";

export const BudgetsStoreModel = types
  .model("BudgetsStore")
  .props({
    budgets: types.array(BudgetModel),
  })
  .views((store) => ({}))
  .actions((self) => ({
    addLineItem: function ({
      budgetName,
      bucketName,
      description,
      amount,
    }: {
      budgetName: string;
      bucketName: string;
      description: string;
      amount: number;
    }) {
      const bucket = self.budgets
        .find((budget) => budget.name === budgetName)
        ?.buckets.find((bucket) => bucket.name === bucketName);

      if (bucket) {
        bucket.lineItems.push({ amount, description });
      }
    },
    initWithDemoData: function () {
      self.budgets.push({
        name: "main",
        buckets: [
          {
            name: "Ben",
          },
          {
            name: "Ephraim",
          },
          {
            name: "Helena",
          },
          {
            name: "Stella",
          },
          {
            name: "Oscar",
          },
        ],
      });
    },
  }));

export interface BudgetsStore extends Instance<typeof BudgetsStoreModel> {}
export interface BudgetsStoreSnapshot
  extends SnapshotOut<typeof BudgetsStoreModel> {}

import { Instance, SnapshotOut, types } from "mobx-state-tree";
import uuid from 'react-native-uuid';
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
        bucket.lineItems.push({ id: uuid.v4().toString(), amount, description });
      }
    },
    initWithDemoData: function () {
      self.budgets.push({
        name: "main",
        buckets: [
          {
            id: '1',
            name: "Ben",
          },
          {
            id: '2',
            name: "Ephraim",
          },
          {
            id: '3',
            name: "Helena",
          },
          {
            id: '4',
            name: "Stella",
          },
          {
            id: '5',
            name: "Oscar",
          },
        ],
      });
    },
  }));

export interface BudgetsStore extends Instance<typeof BudgetsStoreModel> {}
export interface BudgetsStoreSnapshot
  extends SnapshotOut<typeof BudgetsStoreModel> {}

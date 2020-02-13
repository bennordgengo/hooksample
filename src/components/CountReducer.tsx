export type CountReducerAction = {
  type: "reset" | "set" | "add" | "increment";
  operand?: number;
};

export function countReducer(count: number, action: CountReducerAction): number {
  if (action.type === "reset") {
    return 0;
  }
  if (action.type === "set" && action.operand) {
    return action.operand;
  }
  if (action.type === "add" && action.operand) {
    return count + action.operand;
  }
  if (action.type === "increment") {
    return count + 1;
  }
  return count;
}

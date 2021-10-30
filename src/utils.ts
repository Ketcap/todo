import { TodoInterface } from "./data";

export const isGroupDone =(options:TodoInterface[])=>{
  return options.findIndex(option=> option.isDone === false) < 0;
}
import { TodoGroupInterface, TodoInterface } from "../data";

interface ToggleIsCheckedArgs {
  isDone: boolean
  id: TodoInterface['id']
  groupId: TodoGroupInterface['id']
}

export interface Props extends TodoInterface {
  toggleIsChecked: ({ isDone, id, groupId }: ToggleIsCheckedArgs) => void;
  isDisabled: boolean;
  groupId: TodoGroupInterface['id'];
}

const Todo = ({
  id,
  value,
  groupId,
  isDisabled,
  toggleIsChecked,
  isDone = false
}: Props) => {

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { checked: isDone } = event.currentTarget;
    toggleIsChecked({isDone, id,groupId});
  }

  return (
    <div>
      <input id={`${id}`} type='checkbox' checked={isDone} onChange={onChange} disabled={isDisabled} />
      <label htmlFor={`${id}`}>{value}</label>
    </div>
  )
}

export default Todo
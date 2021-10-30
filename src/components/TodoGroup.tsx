import { TodoGroupInterface, TodoInterface } from "../data"
import Todo, { Props as TodoProps } from "./Todo"

export interface Props {
  title: string;
  groupId: TodoGroupInterface['id'];
  todoList: TodoInterface[];
  isFinished:boolean;
  isPrevieousDone:boolean;

  onChange: TodoProps['toggleIsChecked'];
}

const TodoGroup = ({
  title,
  todoList,
  groupId,
  isFinished,
  isPrevieousDone,
  onChange
}: Props) => (
  <div>
    <h2>{title} {isFinished && '✅'}</h2>
    {todoList.map((todo) =>
      <Todo {...todo} groupId={groupId} toggleIsChecked={onChange} isDisabled={!isPrevieousDone} />
    )}
  </div>
)

export default TodoGroup
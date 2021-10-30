import React, { useEffect, useState } from 'react';

import TodoGroup , { Props as TodoGroupProps } from './components/TodoGroup';
import { result } from './data';

import * as S from './App.styled';
import { isGroupDone } from './utils';

function App() {
  const [text,setText] = useState();
  const [data,setData] = useState(result);

  const onChange:TodoGroupProps['onChange'] = ({isDone,id,groupId}) => {
    const groupIndex = data.findIndex(group=>group.id === groupId);

    const updatedOptions = data[groupIndex].options.map((todo)=>{
      if(todo.id === id){
        return {
          ...todo,
          isDone
        }
      }
      return todo;
    });

    const updatedState = data.map((group)=>{
      if(groupId === group.id){
        return {
          ...group,
          isFinished: isGroupDone(updatedOptions),
          options:updatedOptions
        }
      }
      return group;
    });

    setData(updatedState);
  } 

  useEffect(()=>{
    const isAllDone = data.every((group)=>group.isFinished === true);
    if(isAllDone){
      fetch('https://uselessfacts.jsph.pl/random.json?language=en')
      .then(data=>data.json())
      .then(response=>{
        setText(response.text);
      })
    }
  },[data]);


  return (
    <S.Container>
      <div>
        <h2>Title</h2>
        {
          data.map((todoGroup,index) => (
            <TodoGroup 
              onChange={onChange} 
              groupId={todoGroup.id} 
              title={todoGroup.title} 
              todoList={todoGroup.options}
              isFinished={todoGroup.isFinished}
              isPrevieousDone={index === 0 ? true : data[index -1].isFinished}
            />
          ))
        }
      </div>
      {text}

    </S.Container>
  );
}

export default App;

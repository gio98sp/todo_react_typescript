import { useState } from 'react';

import { Item } from './types/Item';

import { ListItem } from './Components/ListItem';

import * as C from './App.styles';
import { AddArea } from './Components/AddArea';

export const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo na padaria', done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    setList((prev) => {
      return [
        ...prev,
        {
          id: prev.length + 1,
          name: taskName,
          done: false,
        },
      ];
    });
  };

  const handleTaskChange = (id: number, done: boolean) => {
    setList((prev) => {
        prev.map(item => {
          if(item.id === id) {
            item.done = done
          }
        })
        return [...prev]
    });
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleTaskChange} />
        ))}
      </C.Area>
    </C.Container>
  );
};

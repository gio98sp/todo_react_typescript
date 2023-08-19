import { useState } from 'react';
import * as C from './styles';

type AddAreaProps = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: AddAreaProps) => {
  const [inputText, setInputText] = useState('');

  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter' && inputText !== '') {
      onEnter(inputText)
      setInputText('')
    }
  }

  return (
    <C.Container>
      <div className="image">➕</div>

      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleOnKeyDown}
      />
    </C.Container>
  );
};

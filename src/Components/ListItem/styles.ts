import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div<ContainerProps>(({ done } )=> `
  display: flex;
  background-color: #20212c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;

  input {
    height: 25px;
    width: 25px;
    margin-right: 5px;
  }

  label {
    color: #ccc;
    text-decoration: ${done ? 'line-through' : 'initial'};
  }
`
);

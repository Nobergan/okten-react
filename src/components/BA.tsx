import { useContext } from 'react';
import { MyContext } from '../context/MyContextProvider.tsx';

export const BA = () => {
  const { changeTheme } = useContext(MyContext);

  const handlerDark = () => {
    changeTheme('dark');
  };

  const handlerLight = () => {
    changeTheme('light');
  };

  return (
    <div>
      <button onClick={handlerDark}>change theme to dark</button>
      <button onClick={handlerLight}>change theme to light</button>
    </div>
  );
};

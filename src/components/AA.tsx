import { MyContext } from '../context/MyContextProvider.tsx';
import { useContext } from 'react';
import './AA.css';

export const AA = () => {
  const { theme } = useContext(MyContext);

  return (
    <div className={theme}>
      this is component AA, and theme value is - {theme}
    </div>
  );
};

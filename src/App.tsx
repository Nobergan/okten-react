import './App.css';
import { MyContext } from './context/MyContextProvider';
import { useState } from 'react';
import { A } from './components/A.tsx';
import { B } from './components/B.tsx';
// import { useFetch } from './hooks/UseFetch.tsx';

function App() {
  // Homework 7/1
  // const users = useFetch<{ id: number; name: string }[]>(
  //   'https://jsonplaceholder.typicode.com/users',
  //   []
  // );
  //
  // return (
  //   <>
  //     {users &&
  //       users.map((user) => (
  //         <div key={user.id}>
  //           {user.id}: {user.name}
  //         </div>
  //       ))}
  //   </>
  // );
  // Homework 7/2
  const [themeColor, setThemeColor] = useState<string>('light');

  return (
    <div>
      <MyContext.Provider
        value={{
          theme: themeColor,
          changeTheme: (themeValue: string) => {
            setThemeColor(themeValue);
          }
        }}
      >
        <A />
        <B />
      </MyContext.Provider>
    </div>
  );
}

export default App;

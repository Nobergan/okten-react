import { useMemo } from 'react';
import { LeftBranchA } from './LeftBranchA.tsx';

export const LeftBranch = () => {
  useMemo(() => {
    for (let i = 0; i < 1000; i++) {
      console.log(i);
    }
    return null;
  }, []);

  return (
    <div>
      LeftBranch
      <LeftBranchA />
    </div>
  );
};

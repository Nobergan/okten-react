import { NavLink } from 'react-router';

export const Menu = () => {
  const baseClasses =
    'rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 transition';
  const activeClasses =
    'border-indigo-500 bg-indigo-100 text-indigo-700 font-semibold';
  const hoverClasses = 'hover:border-indigo-400 hover:bg-indigo-100';

  return (
    <nav className='rounded-xl bg-gray-100 p-4 shadow-sm'>
      <ul className='flex flex-wrap justify-center gap-4'>
        <li>
          <NavLink
            to='/cars'
            end
            className={({ isActive }) =>
              `${baseClasses} ${hoverClasses} ${isActive ? activeClasses : ''}`
            }
          >
            All Cars
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/cars/create'
            end
            className={({ isActive }) =>
              `${baseClasses} ${hoverClasses} ${isActive ? activeClasses : ''}`
            }
          >
            Create Car
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

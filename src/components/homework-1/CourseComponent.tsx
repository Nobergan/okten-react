import type { FC } from 'react';
import type { ICourse } from './models/ICourse.ts';

type CourseComponentPropType = {
  course: ICourse;
};

const CourseComponent: FC<CourseComponentPropType> = ({ course }) => {
  return (
    <div className='rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl'>
      <div className='mb-4'>
        <h2 className='mb-2 text-2xl font-bold text-gray-800'>
          {course.title}
        </h2>
        <div className='mb-4 flex items-center gap-4 text-sm text-gray-600'>
          <div className='flex items-center gap-1'>
            <span className='h-2 w-2 rounded-full bg-blue-500'></span>
            <span>{course.monthDuration} months</span>
          </div>
          <div className='flex items-center gap-1'>
            <span className='h-2 w-2 rounded-full bg-green-500'></span>
            <span>{course.hourDuration} hours</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className='mb-3 text-lg font-semibold text-gray-700'>
          Course modules:
        </h3>
        <div className='flex flex-wrap gap-2'>
          {course.modules.map((module, index) => (
            <span
              key={index}
              className='inline-block cursor-pointer rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-1 text-xs font-medium text-blue-700 transition-colors duration-200 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100'
            >
              {module}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseComponent;

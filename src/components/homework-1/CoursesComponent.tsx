import { coursesArray } from '../../../arrays.ts';
import CourseComponent from './CourseComponent.tsx';

const CoursesComponent = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='mb-8 text-center text-4xl font-bold text-white'>
        Courses
      </h1>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {coursesArray.map((course, index) => (
          <CourseComponent course={course} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CoursesComponent;

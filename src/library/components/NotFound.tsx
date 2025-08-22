import Link from 'next/link';

function NotFound() {
  return (
    <div className='text-center'>
      <h1 className='text-9xl font-extrabold text-primary-dark dark:text-soft-white'>
        404
      </h1>
      <p className='text-2xl text-gray-700 mt-4'>Page Not Found</p>
      <p className='text-gray-500 mt-2'>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href='/'
        className='mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-primary-dark dark:bg-primary dark:text-black rounded-lg hover:bg-primary-dark-hover'
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;

import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-bold text-9xl text-gray-800 mb-4">404</h1>
        <h2 className="text-xl text-gray-700 mb-6">Page not found</h2>
        <p className="text-gray-500 mb-8">
          Sorry, the page you were looking for could not be found.
        </p>
        <Link
          className="px-6 py-3 font-semibold bg-gray-400 rounded-lg text-gray-800 hover:bg-gray-500"
          to="/">
          Go back to the homepage
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;

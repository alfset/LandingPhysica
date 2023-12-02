import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen bg-base-100">
      <h1 className="font-extrabold tracking-widest text-white text-9xl">
        404
      </h1>
      <div className="absolute px-2 text-sm text-white rounded bg-error rotate-12">
        Page Not Found
      </div>
      <Link to="/">
        <button className="mt-5">
          <a className="relative inline-block text-sm font-medium text-error group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-error group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 border border-current bg-base-100">
              Go Home
            </span>
          </a>
        </button>
      </Link>
    </main>
  );
}

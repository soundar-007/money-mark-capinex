import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you're looking for was not found.
      </p>
      <Link
        href="/"
        className="bg-black text-white px-6 py-3 rounded-md shadow hover:bg-black-150 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

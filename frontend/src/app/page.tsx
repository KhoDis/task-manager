import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container mx-auto p-4 text-center space-y-4 mt-8 bg-white rounded shadow border border-gray-200 border-solid">
      <h1 className="text-4xl font-bold">Welcome to Task Manager</h1>
      <p className="text-lg">Please sign up or log in to continue.</p>
      <div className="flex justify-center mt-4">
        <Link
          href="/signup"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Log In
        </Link>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Task Manager</h1>
      <Link href="/signup">Sign Up</Link>
      <Link href="/login">Log In</Link>
    </div>
  );
}

import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <Link href="/account">
        <button>user account</button>
      </Link>
      <Link href="/post">
        <button>post</button>
      </Link>
      <Link href="/admin">
        <button>admin</button>
      </Link>
    </div>
  );
}

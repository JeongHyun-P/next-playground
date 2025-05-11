import Link from 'next/link';
import InternalImage from '@/components/InternalImage';
import ExternalImage from '@/components/ExternalImage';

export default function Page() {
  return (
    <div>
      <div>
        <Link href='/account'>
          <button>user account</button>
        </Link>
        <Link href='/post'>
          <button>post</button>
        </Link>
        <Link href='/admin'>
          <button>admin</button>
        </Link>
      </div>

      <div>
        <InternalImage />
        <ExternalImage />
      </div>
    </div>
  );
}

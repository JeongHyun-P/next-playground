'use client'
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const onClickDetail = () => {
    const id = 1;
    router.push(`/post/${id}`);
  };

  return (
    <div>
      <h3>post</h3>
      <button onClick={onClickDetail}>post detail</button>
    </div>
  );
}

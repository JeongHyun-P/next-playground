'use client'
import { useRouter } from 'next/navigation';
import styles from './styles.module.css'

export default function Page() {
  const router = useRouter();
  const onClickDetail = () => {
    const id = 1;
    router.push(`/post/${id}`);
  };

  return (
    <div>
      <h3 className={styles.postTitle}>post</h3>
      <button onClick={onClickDetail}>post detail</button>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>관리자 헤더</header>
      <main>{children}</main>
      <footer>관리자 푸터</footer>
    </div>
  );
}

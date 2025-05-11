export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <header>유저 헤더</header>
        <main>{children}</main>
        <footer>유저 푸터</footer>
      </div>
    );
  }
  
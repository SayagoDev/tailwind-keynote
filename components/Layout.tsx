import { Footer } from "./Footer";
import Header from "./Header";

export default function Layout({
  children,
  showFooter = true,
}: {
  children: React.ReactNode;
  showFooter?: boolean;
}) {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      {showFooter && <Footer />}
    </>
  );
}

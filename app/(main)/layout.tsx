import { Header } from "@/components/header";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-background relative min-h-screen">
      <div className="from-surface to-accent absolute h-1/2 w-full bg-linear-to-t"></div>
      <div className="relative">
        <Header />
        <main className="mx-auto max-w-6xl">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;

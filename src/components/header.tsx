/**
 * Node modules
 */
import Link from "next/link";

/**
 * Components
 */
import { Logo } from "@/components/ui/logo";

export const Header = () => {
  return (
    <header className="w-full px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="inline-block">
          <Logo />
        </Link>
      </div>
    </header>
  );
};

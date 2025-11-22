import Image from "next/image";

type LogoProps = {
  size?: number;
  showText?: boolean;
};

export const Logo = ({ size = 40, showText = true }: LogoProps) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.svg"
        width={size}
        height={size}
        alt="Tripzy Logo"
        priority
      />
      {showText && (
        <span className="text-primary text-[28px] font-bold">Tripzy</span>
      )}
    </div>
  );
};

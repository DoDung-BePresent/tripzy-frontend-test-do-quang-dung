import { SVGProps } from "react";
import { icons, IconName } from "@/constants/icons";

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  size?: number;
}

export const Icon = ({ name, size = 24, className, ...props }: IconProps) => {
  const iconData = icons[name];

  if (!iconData) return null;

  const { component: IconContent, viewBox } = iconData;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      className={className}
      fill="currentColor"
      {...props}
    >
      <IconContent />
    </svg>
  );
};

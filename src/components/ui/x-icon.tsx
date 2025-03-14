import { cn } from "@/lib/utils";

export const xIconPath =
  "M14.12 9.87a3.024 3.024 0 0 1 0 4.26c-.6.57-1.35.87-2.13.87s-1.53-.3-2.13-.87l-2.37-2.37-2.37 2.37c-.6.57-1.35.87-2.13.87s-1.53-.3-2.13-.87a3.024 3.024 0 0 1 0-4.26L3.23 7.5.88 5.13C-.29 3.97-.29 2.05.88.88a3.012 3.012 0 0 1 4.25 0L7.5 3.25 9.87.88a3.024 3.024 0 0 1 4.26 0 3.024 3.024 0 0 1 0 4.26l-2.37 2.37 2.37 2.37Z";

interface XIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function XIcon({ className, ...props }: XIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className={cn(className)} {...props}>
      <path d={xIconPath} />
    </svg>
  );
}

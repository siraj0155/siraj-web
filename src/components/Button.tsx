import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function Button(props: ButtonProps | AnchorProps) {
  const { children, className, variant = "solid" } = props as CommonProps;
  const base =
    "inline-flex items-center justify-center  px-4 py-2 text-sm font-medium transition-colors";
  const solid = "bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/85";
  const outline =
    "border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10";
  const styles = `${base} ${variant === "solid" ? solid : outline} ${className ?? ""}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={styles} {...(props as AnchorProps)}>
        {children}
      </Link>
    );
  }

  // Button element
  const { href: _ignored, ...buttonProps } = props as ButtonProps & { href?: undefined };
  return (
    <button className={styles} {...buttonProps}>
      {children}
    </button>
  );
}



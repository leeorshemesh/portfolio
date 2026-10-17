import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ink";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-teal text-white hover:bg-teal-bright",
  secondary:
    "border border-ink/20 bg-surface text-ink hover:border-teal hover:text-teal",
  ink: "bg-ink text-paper hover:bg-ink-soft",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  download?: boolean | string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  download,
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      download={download}
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-colors ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ink";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-teal text-white hover:bg-teal-bright",
  secondary:
    "border border-ink/20 bg-surface text-ink hover:border-teal hover:text-teal",
  ink: "bg-ink text-paper hover:bg-ink-soft",
};

const baseClass =
  "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60";

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type LinkButtonProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
    download?: boolean | string;
  };

type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const {
    children,
    variant = "primary",
    className = "",
    ...rest
  } = props;
  const classes = `${baseClass} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, download, ...anchorRest } = rest as Omit<
      LinkButtonProps,
      "children" | "variant" | "className"
    >;
    return (
      <a href={href} download={download} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as Omit<
    NativeButtonProps,
    "children" | "variant" | "className"
  >;
  return (
    <button type={buttonRest.type ?? "button"} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}

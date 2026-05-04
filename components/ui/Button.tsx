import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark border border-accent hover:border-accent-dark",
  secondary:
    "bg-transparent text-ink hover:bg-sand border border-line",
  ghost:
    "bg-transparent text-accent hover:text-accent-dark border border-transparent"
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  ariaLabel?: string;
  className?: string;
}

interface AsLinkProps extends CommonProps {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
}

interface AsButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: never;
}

export default function Button(props: AsLinkProps | AsButtonProps) {
  const { variant = "primary", className = "", children, ariaLabel } = props;
  const cls = `${base} ${styles[variant]} ${className}`;

  if ("href" in props && props.href) {
    if (props.href.startsWith("#") || props.href.startsWith("mailto:") || props.href.startsWith("http")) {
      return (
        <a href={props.href} aria-label={ariaLabel} className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} aria-label={ariaLabel} className={cls}>
        {children}
      </Link>
    );
  }

  const { onClick, type = "button", disabled, ...rest } =
    props as AsButtonProps;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cls}
      {...rest}
    >
      {children}
    </button>
  );
}

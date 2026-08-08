import type { JSX, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}

function PinIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 21s-6.5-5.9-6.5-11A6.5 6.5 0 1 1 18.5 10c0 5.1-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </Icon>
  );
}

function TeaIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 9h13v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z" />
      <path d="M17 10.5h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M3 20h15" />
      <path
        d="M8 5.5c.6-.6.6-1.4 0-2M12 5.5c.6-.6.6-1.4 0-2"
        strokeWidth={1.1}
      />
    </Icon>
  );
}

function RingsIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="9" cy="13.5" r="4.2" />
      <circle cx="15" cy="13.5" r="4.2" />
      <path d="M12 6.2v1.8M11 7.1h2" strokeWidth={1.1} />
    </Icon>
  );
}

function CocktailIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 4.5c0 4 2.7 6.8 6 6.8s6-2.8 6-6.8" />
      <path d="M6 4.5h12" />
      <path d="M12 11.3V19M8.5 19h7" />
    </Icon>
  );
}

function DinnerIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 17a8 8 0 0 1 16 0" />
      <path d="M3 17h18" />
      <path d="M12 9V6.5M10.5 6.5h3" />
    </Icon>
  );
}

function CakeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="5" y="13" width="14" height="6" rx="1" />
      <path d="M5 13c1-1.2 2-1.2 3 0s2 1.2 3 0 2-1.2 3 0 2 1.2 3 0" />
      <path d="M12 10V8" />
      <path d="M11.3 8c0-.9.7-.9.7-1.7 0-.5-.4-.9-.4-.9" strokeWidth={1.1} />
    </Icon>
  );
}

function DessertIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 11h12l-1.3 8.2a1.5 1.5 0 0 1-1.5 1.3H8.8a1.5 1.5 0 0 1-1.5-1.3L6 11Z" />
      <path
        d="M6.5 11c-.8-1.6.2-3 1.7-3 .6-1.6 2.4-2.3 3.8-1.4 1.3-1.6 3.8-1 4 1 1.6.1 2.2 1.8 1.5 3.4"
        strokeWidth={1.15}
      />
      <circle cx="12" cy="6" r="0.9" fill="currentColor" stroke="none" />
    </Icon>
  );
}

function ConfettiIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 20l3.4-9.6 6.2 6.2L4 20Z" />
      <path d="M7.4 10.4c1.7-1.7 4.4-1.7 6.1 0 1.7 1.7 1.7 4.4 0 6.1" />
      <path d="M13 3.2l.3.9c.3.8-.2 1.6-1 1.8-.6.1-1 .7-1 1.3v.6" strokeWidth={1.1} />
      <path d="M20.8 11l-.8-.3c-.8-.3-1.6.2-1.8 1-.1.6-.6 1-1.2 1h-.6" strokeWidth={1.1} />
      <path d="M20.8 3.2l-1.9.6c-.8.2-1.3 1-1.2 1.8.1.7-.5 1.3-1.2 1.3h-.3" strokeWidth={1.1} />
      <path d="M16.5 2.5h.01M21 8h.01M12 8.5h.01" strokeWidth={1.4} />
    </Icon>
  );
}

export const PROGRAMMA_ICONS: Record<string, (props: IconProps) => JSX.Element> = {
  pin: PinIcon,
  tea: TeaIcon,
  rings: RingsIcon,
  cocktail: CocktailIcon,
  dinner: DinnerIcon,
  cake: CakeIcon,
  dessert: DessertIcon,
  confetti: ConfettiIcon,
};

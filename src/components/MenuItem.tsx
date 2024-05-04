import Link from "next/link";

interface MenuItemProps {
  label: string;
  url: string;
  icon: any;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link
      href={props.url}
      className={`
      flex gap-3 items-center rounded-lg 
      w-full px-4 py-2 text-base
      hover:bg-zinc-900
      `}
    >
      {props.icon}
      <span>{props.label}</span>
    </Link>
  );
}

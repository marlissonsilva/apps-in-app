import { IconBrandReact, IconBrandTailwind } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={'/'} className="flex items-center px-8 font-black h-16 bg-purple-600 gap-6 p-2 hover:bg-zinc-900">
      <IconBrandReact size={50} stroke={1} /> +
      <IconBrandTailwind size={50} stroke={1} />
    </Link>
  );
}

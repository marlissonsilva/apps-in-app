import { IconBrandReact, IconBrandTailwind } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={'/'} className="flex items-center px-8 font-black bg-purple-700 h-16 gap-6 ">
      <IconBrandReact size={50} stroke={1} /> +
      <IconBrandTailwind size={50} stroke={1} />
    </Link>
  );
}

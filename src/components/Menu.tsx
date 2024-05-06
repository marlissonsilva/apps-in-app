import { IconCreditCard } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div
      className={`
        flex flex-col justify-start h-screen sm:h-full  bg-zinc-800
        p-2 gap-2 text-3xl sm:min-w-32 overflow-auto`}
    >
      <MenuItem
        icon={<IconCreditCard />}
        label="Cartão Interativo"
        url="/cardInterative"
      />
    </div>
  );
}

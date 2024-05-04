import { IconCreditCard } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div
      className={`
        flex flex-col justify-start 
        p-2 gap-2 text-3xl bg-black w-72 overflow-auto`}
    >
      <MenuItem
        icon={<IconCreditCard />}
        label="Cartão Interativo"
        url="/cardInterative/"
      />
    </div>
  );
}

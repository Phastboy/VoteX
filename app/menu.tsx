import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from 'next/image';

export default function Menu(){
	return (
		<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Menu</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Pricing
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>

	);
}

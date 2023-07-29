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
import Link from 'next/link';

export default function Menu(){
	return (
		<Menubar className="float-right m-10">
  <MenubarMenu>
    <MenubarTrigger>Menu</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
      <Link  href='/pricing'>PRICING</Link>
      </MenubarItem>
      <MenubarItem><Link href='/reviews'>REVIEWS</Link></MenubarItem>
      <MenubarSeparator />
      <MenubarItem><Link href='/contact'>CONTACT</Link></MenubarItem>
      <MenubarSeparator />
      <MenubarItem><Link href='/login'>LOGIN</Link></MenubarItem>
      <MenubarSeparator />
      <MenubarItem><Link href='/sign-up'>SIGN UP</Link></MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>

	);
}

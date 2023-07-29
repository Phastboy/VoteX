import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from 'next/link';
import Image from 'next/image';

export default function Nav(){
  return (
		<NavigationMenu>
  <NavigationMenuList>
  <NavigationMenuItem>
  <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      <Image
		src="/logo.svg"
		alt="VoteX logo"
		width={100}
		height={100}
	  />
    </NavigationMenuLink>
  </Link>
	</NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger>MENU</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>PRICING</NavigationMenuLink>
        <NavigationMenuLink>REVIEWS</NavigationMenuLink>
        <NavigationMenuLink>CONTACT</NavigationMenuLink>
        <NavigationMenuLink>LOGIN</NavigationMenuLink>
        <NavigationMenuLink>SIGN UP</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
	);
}



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

export function Nav(){
  return (
		<NavigationMenu>
  <NavigationMenuList>
  <NavigationMenuItem>
  <Link href="/docs" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Documentation
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


export function Menu(){
	return (
		<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
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

"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#rendimiento", label: "Rendimiento" },
  { href: "#proceso", label: "Proceso" },
  { href: "#equipo", label: "Equipo" },
  { href: "#contact", label: "Contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="fixed top-0 w-full border-b border-white/10 glass-refraction z-50 flex justify-between items-center px-8 py-4 max-w-none">
      <Link href="/">
        <div className="text-2xl font-black tracking-tighter text-white uppercase font-headline">
          STRIDAPT
        </div>
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex gap-10 items-center">
        {routeList.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="font-headline font-bold tracking-tight uppercase text-secondary hover:text-white transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="hidden md:block">
        <Link href="#contact">
          <button className="bg-primary-container text-on-primary-container font-headline font-bold tracking-tight uppercase px-6 py-2.5 transition-transform scale-100 active:scale-95 hover:brightness-110">
            EMPEZAR
          </button>
        </Link>
      </div>

      {/* Mobile */}
      <div className="flex items-center md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer text-white"
            />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="flex flex-col bg-surface border-surface-container"
          >
            <SheetHeader className="mb-8">
              <SheetTitle>
                <div className="text-2xl font-black tracking-tighter text-white uppercase font-headline">
                  STRIDAPT
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4">
              {routeList.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="font-headline font-bold tracking-tight uppercase text-secondary hover:text-white transition-colors text-lg py-2"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-primary-container text-on-primary-container font-headline font-bold tracking-tight uppercase px-6 py-3">
                  EMPEZAR
                </button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

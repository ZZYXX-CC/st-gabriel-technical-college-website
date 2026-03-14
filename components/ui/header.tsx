"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const navigationItems = [
    { title: "Home", href: "/" },
    {
      title: "About Us",
      description: "Learn more about St. Gabriel Technical College.",
      items: [
        { title: "Our History", href: "/about#history" },
        { title: "Mission & Vision", href: "/about#mission" },
      ],
    },
    {
      title: "Programs",
      description: "Explore our technical and vocational programs.",
      items: [
        { title: "All Programs", href: "/programs" },
        { title: "Engineering", href: "/programs#engineering" },
        { title: "Information Technology", href: "/programs#it" },
      ],
    },
    { title: "Admissions", href: "/admissions" },
    { title: "News", href: "/news" },
  ];

  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-[var(--banner-height,1.5rem)] z-40 w-full px-4 md:px-8">
      <div
        className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-300 ${
          isScrolled
            ? "border-white/40 bg-white/75 shadow-xl backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/80"
            : "border-white/30 bg-white/55 backdrop-blur-md dark:border-slate-700/60 dark:bg-slate-950/65"
        }`}
      >
        <div className="container relative mx-auto flex min-h-20 items-center gap-4 px-4 md:px-6 lg:grid lg:grid-cols-3">
          <div className="flex items-center justify-start">
            <Link href="/" className="flex items-center">
              <Image
                src="/asset/SGT-blue.svg"
                alt="St. Gabriel Technical College Logo"
                width={60}
                height={60}
                className="h-14 w-14"
              />
            </Link>
          </div>

          <div className="hidden flex-row items-center justify-center gap-4 lg:flex">
            <NavigationMenu className="flex items-center justify-center">
              <NavigationMenuList className="flex flex-row gap-2">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {"href" in item ? (
                      <NavigationMenuLink asChild>
                        <Link href={item.href as string}>
                          <Button variant="ghost" className="text-sm font-medium text-slate-800 hover:text-stg-sky-blue dark:text-slate-100">
                            {item.title}
                          </Button>
                        </Link>
                      </NavigationMenuLink>
                    ) : (
                      <>
                        <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-slate-800 hover:text-stg-sky-blue dark:text-slate-100">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="!w-[420px] p-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-base font-semibold">{item.title}</p>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                              <Button asChild className="mt-6 bg-stg-yellow text-stone-900 hover:bg-stg-yellow/90">
                                <Link href={item.title === "About Us" ? "/about" : "/programs"}>Learn More</Link>
                              </Button>
                            </div>
                            <div className="flex flex-col justify-end text-sm">
                              {item.items?.map((subItem) => (
                                <NavigationMenuLink asChild key={subItem.title}>
                                  <Link href={subItem.href} className="flex items-center justify-between rounded px-3 py-2 hover:bg-muted">
                                    <span>{subItem.title}</span>
                                    <MoveRight className="h-4 w-4 text-muted-foreground" />
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex w-full justify-end gap-3">
            <Button variant="outline" className="hidden border-stg-sky-blue text-stg-sky-blue hover:bg-stg-sky-blue/10 md:flex" asChild>
              <Link href="https://st-gabriels-technical-schools-lms.vercel.app/" target="_blank" rel="noopener noreferrer">
                Online Courses
              </Link>
            </Button>
            <Button className="hidden bg-stg-yellow text-stone-900 hover:bg-stg-yellow/90 md:flex" asChild>
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>

          <div className="flex w-12 shrink-0 items-center justify-end lg:hidden">
            <Button variant="ghost" onClick={() => setOpen((prev) => !prev)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            {isOpen && (
              <div className="fixed left-4 right-4 top-24 z-50 overflow-hidden rounded-2xl border border-white/30 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-950">
                <div className="space-y-4 p-6">
                  {navigationItems.map((item) => (
                    <div key={item.title}>
                      {"href" in item ? (
                        <Link
                          href={item.href as string}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between rounded-lg p-3 text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <span>{item.title}</span>
                          <MoveRight className="h-4 w-4" />
                        </Link>
                      ) : (
                        <>
                          <p className="px-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">{item.title}</p>
                          <div className="mt-2 space-y-2">
                            {item.items?.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-between rounded-lg p-3 hover:bg-slate-100 dark:hover:bg-slate-800"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="h-4 w-4" />
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                  <Button className="mt-3 w-full bg-stg-yellow text-stone-900 hover:bg-stg-yellow/90" asChild>
                    <Link href="/admissions" onClick={() => setOpen(false)}>
                      Apply Now
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

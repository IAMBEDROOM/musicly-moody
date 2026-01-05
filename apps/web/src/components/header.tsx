"use client";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
  ] as const;

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-2 py-1">
        <nav className="flex gap-4 text-lg">
          {links.map(({ to, label }) => {
            return (
              <Link key={to} href={to}>
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-3 py-1.5 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8",
                },
              }}
            />
          </SignedIn>
          <ModeToggle />
        </div>
      </div>
      <hr />
    </div>
  );
}

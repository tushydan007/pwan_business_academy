"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ForwardLinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ForwardLinkButton({
  href,
  children,
  className,
}: ForwardLinkButtonProps) {
  return (
    <Link href={href}>
      <Button variant="destructive" className={cn("group gap-2", className)}>
        {children}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </Link>
  );
}

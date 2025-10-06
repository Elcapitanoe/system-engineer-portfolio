import { Server, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span className="flex items-center gap-4 text-xs text-slate-500 font-mono">
              <a href="https://domiadi.com">[ Domi Adiwijaya ]</a>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
            <span>© 2025 All rights reserved</span>
            <Separator orientation="vertical" className="h-4" />
            <span>Powered by Next.js & Tailwind CSS</span>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="text-center text-xs text-slate-600 font-mono">
          <p>
            System Version: v1.0.0-beta | Last Updated:{" "}
            {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </footer>
  );
}

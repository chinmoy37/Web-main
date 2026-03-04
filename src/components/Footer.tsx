import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-12">
        <div className="flex items-center gap-3 text-foreground">
          <img src="/logo.png" alt="RadianCore Logo" className="h-12 w-12 object-contain" />
          <span className="text-2xl font-bold font-display text-white">
            RadianCore
          </span>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} RadianCore. All rights reserved.
        </p>
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
          All systems operational
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { LayoutDashboard } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-2 text-lg font-semibold">
      <LayoutDashboard size={24} />
      <span>my-dashboard</span>
    </div>
  );
}

export default Logo;

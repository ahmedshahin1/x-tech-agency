import logo from "@/assets/x-tech-logo.png";

export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-30 blur-md" />
      <img
        src={logo}
        alt="X Tech Agency"
        className="relative h-full w-full object-contain dark:invert"
      />
    </div>
  );
}

interface TagPillProps {
  label: string;
  variant?: "default" | "small";
}

export default function TagPill({ label, variant = "default" }: TagPillProps) {
  return (
    <span
      className={`inline-block rounded-full bg-[var(--ci-light)] text-[var(--ci-blue)] font-bold transition-colors hover:bg-[var(--ci-blue)] hover:text-white ${
        variant === "small" ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm"
      }`}
    >
      {label}
    </span>
  );
}

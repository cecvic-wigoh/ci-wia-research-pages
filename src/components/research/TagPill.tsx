interface TagPillProps {
  label: string;
  variant?: "default" | "small";
}

export default function TagPill({ label, variant = "default" }: TagPillProps) {
  return (
    <span
      className={`inline-block rounded-full border border-ci-teal text-ci-blue-dark font-bold transition-colors hover:bg-ci-teal hover:text-white hover:border-ci-teal ${
        variant === "small" ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm"
      }`}
    >
      {label}
    </span>
  );
}

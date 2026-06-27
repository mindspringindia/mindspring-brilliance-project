type LogoProps = {
  light?: boolean;
  showWordmark?: boolean;
  showTagline?: boolean;
};

export function Logo({
  light = false,
  showWordmark = true,
  showTagline = false,
}: LogoProps) {
  const fill = light ? "#ffffff" : "var(--primary)";
  const wordColor = light ? "text-white" : "text-primary";
  const tagColor = light ? "text-white/80" : "text-primary/70";

  return (
    <div className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 64 64"
        aria-hidden
        className="h-10 w-10 shrink-0"
        fill={fill}
      >
        {/* Sun rays */}
        <g>
          <rect x="30.5" y="2" width="3" height="7" rx="1.5" />
          <rect
            x="30.5"
            y="2"
            width="3"
            height="7"
            rx="1.5"
            transform="rotate(25 32 5.5)"
          />
          <rect
            x="30.5"
            y="2"
            width="3"
            height="7"
            rx="1.5"
            transform="rotate(-25 32 5.5)"
          />
          <rect
            x="30.5"
            y="2"
            width="3"
            height="7"
            rx="1.5"
            transform="rotate(50 32 5.5)"
          />
          <rect
            x="30.5"
            y="2"
            width="3"
            height="7"
            rx="1.5"
            transform="rotate(-50 32 5.5)"
          />
        </g>
        {/* Head */}
        <circle cx="32" cy="18" r="5.2" />
        {/* Leaf - left */}
        <path d="M32 60 C 10 56, 4 40, 8 26 C 22 28, 30 42, 32 60 Z" />
        {/* Leaf - right */}
        <path d="M32 60 C 54 56, 60 40, 56 26 C 42 28, 34 42, 32 60 Z" />
        {/* M body / arms */}
        <path d="M16 30 L 22 30 L 32 46 L 42 30 L 48 30 L 48 56 L 41 56 L 41 42 L 34 52 L 30 52 L 23 42 L 23 56 L 16 56 Z" />
      </svg>
      {showWordmark && (
        <div className="leading-none">
          <span
            className={`font-display text-xl font-extrabold tracking-tight ${wordColor}`}
          >
            Mindspring
          </span>
          {showTagline && (
            <span
              className={`mt-1 block text-[10px] font-medium uppercase tracking-[0.18em] ${tagColor}`}
            >
              Mental Health & Child Development
            </span>
          )}
        </div>
      )}
    </div>
  );
}

import svgPaths from "../../imports/svg-ef8k7g7nmy";

interface IconProps {
  className?: string;
}

export function HappyFaceIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={`size-[17px] ${className}`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 17 17"
    >
      <circle
        cx="8.5"
        cy="8.5"
        r="6.875"
        stroke="#BDB8D1"
        strokeWidth="1.25"
      />
      <circle
        cx="6"
        cy="7.5"
        fill="#BDB8D1"
        r="1"
      />
      <circle
        cx="11"
        cy="7.5"
        fill="#BDB8D1"
        r="1"
      />
      <path
        d={svgPaths.p3846dc00}
        stroke="#BDB8D1"
        strokeLinecap="round"
        strokeWidth="1.25"
      />
    </svg>
  );
}

export function MinusIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={`size-[17px] ${className}`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 17 17"
    >
      <path
        d={svgPaths.pcce7f00}
        stroke="#BDB8D1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
}

export function ClocksIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={`size-[17px] ${className}`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 17 17"
    >
      <circle
        cx="8.5"
        cy="8.5"
        r="6.875"
        stroke="#BDB8D1"
        strokeWidth="1.25"
      />
      <path
        d={svgPaths.pf3b1860}
        stroke="#BDB8D1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
}

export function HomeIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={`size-[17px] ${className}`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 17 17"
    >
      <path
        d={svgPaths.p2d1b2100}
        stroke="#BDB8D1"
        strokeWidth="1.25"
      />
    </svg>
  );
}

export function ProfileIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={`size-[17px] ${className}`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 17 17"
    >
      <path
        d={svgPaths.pd522e00}
        stroke="#BDB8D1"
        strokeLinecap="round"
        strokeWidth="1.25"
      />
      <circle
        cx="8.5"
        cy="5.5"
        r="2.875"
        stroke="#BDB8D1"
        strokeWidth="1.25"
      />
    </svg>
  );
}

export function SkullIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={`size-[17px] ${className}`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 17 17"
    >
      <path
        d={svgPaths.p27ddb700}
        stroke="#BDB8D1"
        strokeWidth="1.25"
      />
      <circle
        cx="5.5"
        cy="7.5"
        fill="#BDB8D1"
        r="1.5"
      />
      <circle
        cx="11.5"
        cy="7.5"
        fill="#BDB8D1"
        r="1.5"
      />
      <path
        d={svgPaths.p27521780}
        fill="#BDB8D1"
      />
    </svg>
  );
}

export function FolderIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={`size-[17px] ${className}`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 17 17"
    >
      <path
        d={svgPaths.p35c13300}
        stroke="#BDB8D1"
        strokeWidth="1.25"
      />
    </svg>
  );
}

export function ArrowDownIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={`size-8 ${className}`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 32 32"
    >
      <path
        clipRule="evenodd"
        d={svgPaths.p2eac71f0}
        fill="#BDB8D1"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function InfoIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={`size-3 ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
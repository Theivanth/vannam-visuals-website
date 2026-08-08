import React from "react";

const SANS = "'Roboto', system-ui, sans-serif";
const DARK_BG = "#11301C";
const GOLD = "#C9A66B";

interface SectionLabelProps {
  children: React.ReactNode;
  dark?: boolean;
}

export default function SectionLabel({
  children,
  dark = false,
}: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 justify-center mb-4">
      <span
        className="h-px w-8"
        style={{ background: GOLD }}
      />

      <span
        className="text-[10px] tracking-[0.42em] uppercase"
        style={{
          fontFamily: SANS,
          color: dark ? GOLD : DARK_BG,
        }}
      >
        {children}
      </span>

      <span
        className="h-px w-8"
        style={{ background: GOLD }}
      />
    </div>
  );
}
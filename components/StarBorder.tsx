"use client";

import "./StarBorder.css";

// Updated Interface to accept href and other standard props
interface StarBorderProps extends React.HTMLAttributes<HTMLElement> {
  as?: any;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  href?: string; // Add this explicitly
  target?: string; // Good to have for external links
  rel?: string;
  children: React.ReactNode;
}

export default function StarBorder({
  as: Component = "button",
  className = "",
  color = "#ffffff",
  speed = "6s",
  thickness = 1,
  children,
  ...rest // This now safely includes href
}: StarBorderProps) {

  return (
    <Component
      {...rest} // Spread rest FIRST so styles/className can override if needed
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style,
      }}
    >
      {/* Bottom moving glow */}
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color} 0%, ${color} 20%, transparent 50%)`,
          animationDuration: speed,
        }}
      />

      {/* Top moving glow */}
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color} 0%, ${color} 20%, transparent 50%)`,
          animationDuration: speed,
        }}
      />

      {/* Content */}
      <div className="inner-content">
        {children}
      </div>
    </Component>
  );
}
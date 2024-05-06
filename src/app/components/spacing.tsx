import React from "react";

export interface SpacingProps {
  size8?: boolean;
  size16?: boolean;
  size48?: boolean;
  size64?: boolean;
  size80?: boolean;
  size96?: boolean;
  size112?: boolean;
  debug?: boolean;
}

const Spacing: React.FC<SpacingProps> = ({
  size8,
  size16,
  size48,
  size64,
  size80,
  size96,
  size112,
  debug,
}) => (
  <div
    className={`w-full ${debug ? "bg-red-500" : ""} ${size8 ? "h-2" : ""} ${size16 ? "h-4" : ""} ${size48 ? "h-12" : ""} ${size64 ? "h-16" : ""} ${size80 ? "h-20" : ""} ${size96 ? "h-24" : ""} ${size112 ? "h-28" : ""}`}
  />
);

export default Spacing;

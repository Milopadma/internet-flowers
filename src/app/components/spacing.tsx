export interface SpacingProps {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  debug?: boolean;
}

const Spacing: React.FC<SpacingProps> = ({ debug, xs, sm, md, lg, xl }) => (
  <div
    className={`w-full ${debug ? "bg-red-500" : ""} ${xs ? "h-2" : ""} ${
      sm ? "h-4" : ""
    } ${md ? "h-8" : ""} ${lg ? "h-16" : ""} ${xl ? "h-32" : ""}`}
  />
);

export default Spacing;

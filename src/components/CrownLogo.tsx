import logo from "@/assets/logo.png";

interface Props {
  className?: string;
  size?: number;
  glow?: boolean;
}

const CrownLogo = ({ className = "", size = 96, glow = true }: Props) => (
  <img
    src={logo}
    alt="Prestige Service"
    width={size}
    height={size}
    className={`object-contain select-none ${glow ? "logo-glow" : ""} ${className}`}
    style={{ width: size, height: size }}
    draggable={false}
  />
);

export default CrownLogo;

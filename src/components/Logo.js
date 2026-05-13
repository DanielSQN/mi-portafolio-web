import Image from "next/image";
import { profile } from "@/data/portfolio";

export default function Logo() {
  return (
    <a className="brand" href="#inicio" aria-label="Ir al inicio">
      <span className="brand-mark">
        <Image alt="" height={30} src="/brand/sq-icon.png" width={30} />
      </span>
      <span>
        <strong>{profile.navName || profile.name}</strong>
        <small>Software Engineer</small>
      </span>
    </a>
  );
}

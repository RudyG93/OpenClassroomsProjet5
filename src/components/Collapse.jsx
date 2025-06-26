import { useState } from "react";
import Arrow from "../assets/chevron.svg";
import "../styles/Collapse.scss";

export default function Collapse({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <section className={`collapse${open ? " open" : ""}`}>
      <button
        type="button"
        className="collapse__header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{title}</span>

        <img src={Arrow} alt="chevron" className="collapse__icon" />
      </button>

      <div className="collapse__content-wrapper">
        <div className="collapse__content">{children}</div>
      </div>
    </section>
  );
}

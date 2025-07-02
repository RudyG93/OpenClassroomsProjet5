import { useState } from "react";
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

        <span className="collapse__icon fa-solid fa-chevron-up"></span>
      </button>

      <div className="collapse__content-wrapper">
        <div className="collapse__content">{children}</div>
      </div>
    </section>
  );
}

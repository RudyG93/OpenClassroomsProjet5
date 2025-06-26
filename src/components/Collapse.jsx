import { useState } from "react";
import "../styles/Collapse.scss";

export default function Collapse({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`collapse${open ? " open" : ""}`}>
      <button className="collapse__header" onClick={() => setOpen(!open)}>
        {title}
        <span className="collapse__icon" />
      </button>
      {open && <div className="collapse__content">{children}</div>}
    </div>
  );
}
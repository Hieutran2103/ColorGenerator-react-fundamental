import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ color }) => {
  const { hex, weight } = color;
  const save = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipbroad");
      } catch (error) {
        toast.error("Failed to copy color to clipbroad");
      }
    } else {
      toast.error("Clipbroad access not available");
    }
  };
  return (
    <article className="color" style={{ background: `#${hex}` }} onClick={save}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColor;

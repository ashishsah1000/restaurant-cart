import { useState } from "react";
interface props {
  background: string;
}

export default function Quantity({ background = "none" }: any) {
  const [count, setcount] = useState(0);
  return (
    <div
      className="d-flex  justify-content-between"
      style={{
        background: background,
        borderRadius: "30px",
        padding: "3px 3px",
        width: "100px",
        height: "40px",
        margin: "0px auto",
      }}
    >
      <div className="">
        <span
          onClick={() => {
            if (count > 0) setcount(count - 1);
          }}
          role="button"
          style={{ fontSize: "20px", marginLeft: "10px" }}
        >
          -
        </span>
      </div>

      <div className="p-1" style={{ fontWeight: "800" }}>
        {count}
      </div>
      <div className="">
        <span
          onClick={() => setcount(count + 1)}
          role="button"
          style={{ fontSize: "20px", marginRight: "10px" }}
        >
          +
        </span>
      </div>
    </div>
  );
}

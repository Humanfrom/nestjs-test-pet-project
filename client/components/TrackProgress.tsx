import React from "react";

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (e: any) => void;
  type?: string;
}

const TrackProgress: React.FC<TrackProgressProps> = ({
  left,
  right,
  onChange,
  type,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        type="range"
        min={left}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div>
        {left} {type === "volume" ? null : `: ${right}`}
      </div>
    </div>
  );
};

export default TrackProgress;

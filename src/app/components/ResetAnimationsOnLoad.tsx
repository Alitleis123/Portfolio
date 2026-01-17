"use client";

import { useEffect, useState } from "react";

type ResetAnimationsOnLoadProps = {
  children: React.ReactNode;
};

export default function ResetAnimationsOnLoad({
  children,
}: ResetAnimationsOnLoadProps) {
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    setResetKey(1);
  }, []);

  return (
    <div key={resetKey} style={{ display: "contents" }}>
      {children}
    </div>
  );
}

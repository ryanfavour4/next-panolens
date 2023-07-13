import React, { useEffect, useState } from "react";

export default function Newpage() {
  const [text, setText] = useState("hey bro");
  useEffect(() => {
    console.log("WE DON LAND");
  }, []);

  return (
    <div>
      HELLO NEW PAGE
      {text}
    </div>
  );
}

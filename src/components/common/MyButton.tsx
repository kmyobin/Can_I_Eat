import React from "react";
import { Button } from "antd";
type text = { text: string };

function MyButton({ text }: text) {
  return (
    <Button
      style={{
        backgroundColor: "#00B578",
        color: "white",
        fontFamily: "NotoSansKR-500",
        width: "200px",
        borderRadius: "20px",
      }}
    >
      {text}
    </Button>
  );
}

export default MyButton;

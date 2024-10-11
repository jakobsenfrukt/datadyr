"use client";
import { useState } from "react";
import { randomChoice } from "@/lib/utils";
import styles from "./logo.module.scss";

export default function Logo() {
  const defaultColor = "white";
  const [color, setColor] = useState(defaultColor);
  const colors = ["hotpink", "lime", "yellow", "turquoise", "cyan"];

  function onMouseOver() {
    setColor(randomChoice(colors));
  }

  function onMouseLeave() {
    setColor(defaultColor);
  }

  return (
    <svg
      className={styles.logo}
      style={{ color: color }}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6" width="1" height="1" fill="currentColor" />
      <rect x="7" width="1" height="1" fill="currentColor" />
      <rect x="4" y="1" width="1" height="1" fill="currentColor" />
      <rect x="5" y="1" width="1" height="1" fill="currentColor" />
      <rect x="9" y="1" width="1" height="1" fill="currentColor" />
      <rect x="10" y="1" width="1" height="1" fill="currentColor" />
      <rect x="3" y="15" width="1" height="1" fill="currentColor" />
      <rect x="4" y="15" width="1" height="1" fill="currentColor" />
      <rect x="5" y="16" width="1" height="1" fill="currentColor" />
      <rect x="6" y="16" width="1" height="1" fill="currentColor" />
      <rect x="7" y="16" width="1" height="1" fill="currentColor" />
      <rect x="8" y="16" width="1" height="1" fill="currentColor" />
      <rect x="9" y="16" width="1" height="1" fill="currentColor" />
      <rect x="10" y="15" width="1" height="1" fill="currentColor" />
      <rect x="11" y="15" width="1" height="1" fill="currentColor" />
      <rect x="11" y="2" width="1" height="1" fill="currentColor" />
      <rect x="3" y="2" width="1" height="1" fill="currentColor" />
      <rect x="4" y="2" width="1" height="1" fill="currentColor" />
      <rect x="2" y="3" width="1" height="1" fill="currentColor" />
      <rect x="3" y="3" width="1" height="1" fill="currentColor" />
      <rect x="4" y="3" width="1" height="1" fill="currentColor" />
      <rect x="5" y="3" width="1" height="1" fill="currentColor" />
      <rect x="2" y="4" width="1" height="1" fill="currentColor" />
      <rect x="3" y="4" width="1" height="1" fill="currentColor" />
      <rect x="4" y="4" width="1" height="1" fill="currentColor" />
      <rect x="5" y="4" width="1" height="1" fill="currentColor" />
      <rect x="1" y="5" width="1" height="1" fill="currentColor" />
      <rect x="2" y="5" width="1" height="1" fill="currentColor" />
      <rect x="3" y="5" width="1" height="1" fill="currentColor" />
      <rect x="4" y="5" width="1" height="1" fill="currentColor" />
      <rect x="1" y="6" width="1" height="1" fill="currentColor" />
      <rect x="2" y="6" width="1" height="1" fill="currentColor" />
      <rect x="3" y="6" width="1" height="1" fill="currentColor" />
      <rect x="4" y="6" width="1" height="1" fill="currentColor" />
      <rect x="5" y="12" width="1" height="1" fill="currentColor" />
      <rect x="6" y="12" width="1" height="1" fill="currentColor" />
      <rect x="7" y="12" width="1" height="1" fill="currentColor" />
      <rect x="5" y="11" width="1" height="1" fill="currentColor" />
      <rect x="6" y="11" width="1" height="1" fill="currentColor" />
      <rect x="7" y="11" width="1" height="1" fill="currentColor" />
      <rect x="5" y="10" width="1" height="1" fill="currentColor" />
      <rect x="6" y="10" width="1" height="1" fill="currentColor" />
      <rect x="7" y="10" width="1" height="1" fill="currentColor" />
      <rect x="5" y="13" width="1" height="1" fill="currentColor" />
      <rect x="6" y="13" width="1" height="1" fill="currentColor" />
      <rect x="7" y="13" width="1" height="1" fill="currentColor" />
      <rect x="8" y="12" width="1" height="1" fill="currentColor" />
      <rect x="8" y="11" width="1" height="1" fill="currentColor" />
      <rect x="8" y="13" width="1" height="1" fill="currentColor" />
      <rect x="4" y="12" width="1" height="1" fill="currentColor" />
      <rect x="4" y="11" width="1" height="1" fill="currentColor" />
      <rect x="4" y="13" width="1" height="1" fill="currentColor" />
      <rect x="5" y="14" width="1" height="1" fill="currentColor" />
      <rect x="6" y="14" width="1" height="1" fill="currentColor" />
      <rect x="7" y="14" width="1" height="1" fill="currentColor" />
      <rect x="5" y="5" width="1" height="1" fill="currentColor" />
      <rect x="8" width="1" height="1" fill="currentColor" />
      <rect y="7" width="1" height="1" fill="currentColor" />
      <rect y="8" width="1" height="1" fill="currentColor" />
      <rect y="9" width="1" height="1" fill="currentColor" />
      <rect y="10" width="1" height="1" fill="currentColor" />
      <rect x="14" y="7" width="1" height="1" fill="currentColor" />
      <rect x="14" y="8" width="1" height="1" fill="currentColor" />
      <rect x="14" y="9" width="1" height="1" fill="currentColor" />
      <rect x="14" y="10" width="1" height="1" fill="currentColor" />
      <rect y="11" width="1" height="1" fill="currentColor" />
      <rect x="1" y="12" width="1" height="1" fill="currentColor" />
      <rect x="1" y="13" width="1" height="1" fill="currentColor" />
      <rect x="2" y="14" width="1" height="1" fill="currentColor" />
      <rect x="12" y="14" width="1" height="1" fill="currentColor" />
      <rect x="13" y="12" width="1" height="1" fill="currentColor" />
      <rect x="13" y="13" width="1" height="1" fill="currentColor" />
      <rect x="14" y="11" width="1" height="1" fill="currentColor" />
      <rect x="12" y="3" width="1" height="1" fill="currentColor" />
      <rect x="12" y="4" width="1" height="1" fill="currentColor" />
      <rect x="13" y="5" width="1" height="1" fill="currentColor" />
      <rect x="13" y="6" width="1" height="1" fill="currentColor" />
      <rect x="12" y="5" width="1" height="1" fill="currentColor" />
      <rect x="12" y="6" width="1" height="1" fill="currentColor" />
      <rect x="11" y="5" width="1" height="1" fill="currentColor" />
      <rect x="11" y="6" width="1" height="1" fill="currentColor" />
      <rect x="10" y="6" width="1" height="1" fill="currentColor" />
      <rect x="13" y="7" width="1" height="1" fill="currentColor" />
      <rect x="12" y="7" width="1" height="1" fill="currentColor" />
      <rect x="11" y="7" width="1" height="1" fill="currentColor" />
      <rect x="13" y="8" width="1" height="1" fill="currentColor" />
      <rect x="12" y="8" width="1" height="1" fill="currentColor" />
      <rect x="11" y="8" width="1" height="1" fill="currentColor" />
      <rect x="13" y="9" width="1" height="1" fill="currentColor" />
      <rect x="12" y="9" width="1" height="1" fill="currentColor" />
      <rect x="11" y="9" width="1" height="1" fill="currentColor" />
      <rect x="10" y="7" width="1" height="1" fill="currentColor" />
      <rect x="10" y="8" width="1" height="1" fill="currentColor" />
    </svg>
  );
}

"use client";
import React, { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";
import Link from "next/link";
import { tabs } from "@/utils";

interface Tab {
  label: string;
  href: string;
}

function NavnarMenuDesktop() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleItemClick = (index: number): void => {
    setSelectedIndex(index);
  };

  return (
    <div className="hidden md:block">
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {tabs.map((tab: Tab, index: number) => (
          <button
            key={tab.label}
            onClick={() => handleItemClick(index)}
            style={{
              padding: "0.65rem 0.75rem",

              border: 0,
              cursor: "pointer",
            }}
          >
            {tab.label}
            {selectedIndex === index && (
              <div style={{ position: "relative", transform: "translateY(3px)" }}>
                <MagicTabSelect id="underline" transition={{ type: "spring", bounce: 0.3 }}>
                  <div
                    style={{
                      width: "100%",
                      height: "0.15rem",
                      backgroundColor: "black",
                      position: "absolute",
                    }}
                  />
                </MagicTabSelect>
              </div>
            )}
          </button>
        ))}
        <Link href={tabs[selectedIndex].href} style={{ display: "none" }}>
          Hidden Link for Navigation
        </Link>
      </div>
    </div>
  );
}

export default NavnarMenuDesktop;

"use client";
import React, { JSX } from "react";

interface SkillsBlockProps {
  tags: string[];
  colorClass: string;
}

export default function SkillsBlock({ tags, colorClass }: SkillsBlockProps): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((s) => (
        <span
          key={s}
          className={`px-3 py-1 ${colorClass} text-sm rounded`}
        >
          {s}
        </span>
      ))}
    </div>
  );
}

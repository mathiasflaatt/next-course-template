import React from "react";

type ShortIcon = {
  asc: boolean;
} & Omit<JSX.IntrinsicElements["img"], "src" | "alt">;

export const SortIcon: React.FC<ShortIcon> = ({ asc, ...rest }) => {
  return (
    <img
      {...rest}
      src={require(asc
        ? "public/icons/chevron-up.svg"
        : "public/icons/chevron-down.svg")}
      alt={`Sorticon ${asc ? "acending" : "decending"}`}
    />
  );
};

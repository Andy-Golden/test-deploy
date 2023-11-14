import React from "react";
import { useTranslation } from "react-i18next";

import type { SelectMenuProps } from "./interfaces";
import { MenuItem } from "./MenuItem";
import { Select } from "./Select";

import "./styles.scss";

const SelectMenu = ({
  options,
  defaultValue,
  className,
  textColor,
  background,
  onChange,
}: SelectMenuProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div
      className={`select-menu ${className ?? ""}`}
      style={{ background, color: textColor }}
    >
      <Select onChange={onChange} value={defaultValue}>
        {options.map((item) => (
          <MenuItem key={item.key} value={item.key}>
            {t(`${item.label}`)}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectMenu;

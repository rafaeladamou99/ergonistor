import { MenuItem, Select } from "@mui/material";
import { useCallback, useMemo, useState } from "react";

export interface IDropDownItems {
  value: number;
  label: string;
}

interface IDropDown {
  items: IDropDownItems[];
  label: string;
  className?: string;
  onChange?: () => void;
}

const DropDown = (props: IDropDown) => {
  const [value, setValue] = useState(-1);

  const changeValue = useCallback(
    (value: number) => () => {
      setValue(value);
    },
    [],
  );
  const dropDownItems: IDropDownItems[] = useMemo(() => {
    return [{ value: -1, label: "All" }, ...props.items];
  }, []);
  return (
    <Select
      value={value}
      label={props.label}
      onChange={props.onChange}
      sx={{ height: "45px", width: "140px" }}
      className={props.className ?? ""}
    >
      {dropDownItems.map((item) => (
        <MenuItem
          value={item.value}
          onClick={changeValue(item.value)}
          key={item.value}
        >
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default DropDown;

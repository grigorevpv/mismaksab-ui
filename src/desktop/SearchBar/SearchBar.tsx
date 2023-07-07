import React from "react";
import cn from "classnames";

import searchSvg from "../../assets/icons/search.svg";

import styles from "./SearchBar.scss";

interface Props {
  placeHolderText?: string;
  onChange: (value: string) => void;
}

export function SearchBar({ placeHolderText, onChange }: Props) {
  const [value, setValue] = React.useState("");

  // animation if input is clicked
  const [shown, setShown] = React.useState(false);

  const onChangeCb = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      onChange(e.target.value);

      if (e.target.value === "") {
        setShown(false);
      } else {
        setShown(true);
      }
    },
    [onChange]
  );

  return (
    <div
      className={cn(styles.search, {
        // TODO возможно стоит переименовать название класса
        [styles.shown]: shown,
      })}
    >
      <div className={styles.searchInput}>
        <div className={styles.searchSvgContainer}>
          <img className={styles.searchSvg} src={searchSvg} />
        </div>

        <input
          type="text"
          placeholder={placeHolderText}
          value={value}
          onFocus={() => setShown(true)}
          onBlur={() => setShown(false)}
          onChange={onChangeCb}
          className={styles.searchInput}
        />
      </div>
    </div>
  );
}

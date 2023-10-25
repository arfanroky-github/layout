import { useEffect, useRef, useState, useCallback } from "react";
import styles from "../../styles/select.module.css";
import Button from "./button";
import { RxCaretSort } from "react-icons/rx";
import useOutSideClick from "../../hooks/custom/useOutSideClick";

export type SelectOption = {
  label: string;
  value: string | number;
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

export function Select({ multiple, value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [query, setQuery] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useOutSideClick<HTMLDivElement>(() => toggle(false));

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  const selectOption = useCallback(
    function (option: SelectOption) {
      if (multiple) {
        if (value.includes(option)) {
          onChange(value.filter((o) => o !== option));
        } else {
          onChange([...value, option]);
        }
      } else {
        if (option !== value) onChange(option);
      }
    },
    [multiple, value, onChange]
  );

  function isOptionSelected(option: SelectOption) {
    return multiple ? value.includes(option) : option === value;
  }

  function toggle(value: boolean) {
    if (value === true) {
      setHighlightedIndex(0);
    }
    setIsOpen(value);
  }

  useEffect(() => {
    const container = containerRef.current;
    const handler = (e: KeyboardEvent) => {
      if (!container?.contains(e.target as Node)) return;

      switch (e.code) {
        case "Enter":
        case "Space":
          toggle(!isOpen);
          console.log('first')
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case "ArrowUp":
        case "ArrowDown": {
          if (!isOpen) {
            toggle(true)
            break;
          }

          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case "Escape":
          toggle(false)
          break;
      }
    };
    container?.addEventListener("keydown", handler);

    return () => {
      container?.removeEventListener("keydown", handler);
    };
  }, [isOpen, highlightedIndex, options, selectOption, containerRef]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div tabIndex={0} ref={containerRef} className="relative w-96">
      <Button
        id="btn"
        onClick={() => toggle(!isOpen)}
        size={"default"}
        className="w-full border border-gray-400 px-2 flex gap-x-2 outline-none "
      >
        <span className={"flex-1 text-left"}>
          {multiple
            ? value.map((v) => (
                <button
                  key={v.value}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectOption(v);
                  }}
                  className={styles["option-badge"]}
                >
                  {v.label}
                  <span className={styles["remove-btn"]}>&times;</span>
                </button>
              ))
            : value?.label}
        </span>
        <span
          onClick={(e) => {
            e.stopPropagation();
            clearOptions();
          }}
          className={styles["clear-btn"]}
        >
          &times;
        </span>
        <div className={styles.divider}></div>
        <RxCaretSort size={25} />
      </Button>

      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        <li className="px-2 py-4 w-full ">
          <input
            id="search"
            ref={inputRef}
            autoComplete="off"
            className="w-full outline-none border border-gray-400 p-[6px] rounded-md  focus:ring-1 focus:ring-purple-400"
            placeholder="Search..."
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </li>
        {options
          .filter((item) =>
            item.label.toLowerCase().includes(query.toLowerCase())
          )
          .map((option, index) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              key={option.value}
              className={`${styles.option} ${
                isOptionSelected(option) ? styles.selected : ""
              } ${index === highlightedIndex ? styles.highlighted : ""}`}
            >
              {option.label}
            </li>
          ))}
      </ul>
    </div>
  );
}

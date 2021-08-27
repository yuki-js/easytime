// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useRef } from "react";
import {
  PlasmicTimeInput,
  DefaultTimeInputProps,
} from "./plasmic/easytime/PlasmicTimeInput";

type TimeValues = {
  hour: string;
  minute: string;
  dayAgo: boolean;
};
interface TimeInputProps extends DefaultTimeInputProps {
  value: TimeValues;
  onChange: (value: TimeValues) => void;
}

function TimeInput({ value, onChange }: TimeInputProps) {
  const hrRef = useRef<HTMLInputElement>(null);
  const minRef = useRef<HTMLInputElement>(null);
  if (!value) {
    value = {
      hour: "",
      minute: "",
      dayAgo: false,
    };
  }
  return (
    <PlasmicTimeInput
      dayAgo={value.dayAgo}
      hour={{
        value: value.hour,
        onChange: (e) => {
          const val = e.target.value;
          if (val.length >= 2) {
            minRef.current?.focus();
          }
          onChange({
            hour: removeNonNumeric(val),
            minute: value.minute,
            dayAgo: value.dayAgo,
          });
        },
        ref: hrRef,
      }}
      minute={{
        value: value.minute,
        onChange: (e) => {
          const val = e.target.value;
          if (val.length == 0) {
            hrRef.current?.focus();
          }
          onChange({
            hour: value.hour,
            minute: removeNonNumeric(val).slice(-2),
            dayAgo: value.dayAgo,
          });
        },
        ref: minRef,
      }}
      dayAgoCheckbox={{
        onClick() {
          onChange({
            hour: value.hour,
            minute: value.minute,
            dayAgo: !value.dayAgo,
          });
        },
      }}
    />
  );
}

function removeNonNumeric(str: string): string {
  return str.replace(/\D/g, "");
}

export default TimeInput;

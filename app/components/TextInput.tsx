"use client";
import React, { forwardRef } from "react";
import { Input, Tooltip } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

interface ITestInput {
  labelIcon: any;
  labelText: string;
  placeholder: string;
  toolTipLabel: string;
  type: string;
  value: any;
  onChange: any;
}

export default function TextInput(props: ITestInput) {
  return (
    <article>
      <label className="flex items-center gap-1">
        {props.labelIcon}
        <span className=" font-semibold">{props.labelText}</span>
      </label>
      <Input
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        rightSection={
          <Tooltip
            label={props.toolTipLabel}
            position="top-end"
            withArrow>
            <div>
              <IconAlertCircle
                size="1rem"
                style={{ display: "block", opacity: 0.5 }}
              />
            </div>
          </Tooltip>
        }
      />
    </article>
  );
}

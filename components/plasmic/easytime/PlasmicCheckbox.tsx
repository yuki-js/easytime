// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mBKHaRhjQbiZuznDyARcTS
// Component: j-zkNvYO40
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_easytime.module.css"; // plasmic-import: mBKHaRhjQbiZuznDyARcTS/projectcss
import * as sty from "./PlasmicCheckbox.module.css"; // plasmic-import: j-zkNvYO40/css

export type PlasmicCheckbox__VariantMembers = {
  selected: "selected";
};

export type PlasmicCheckbox__VariantsArgs = {
  selected?: SingleBooleanChoiceArg<"selected">;
};

type VariantPropType = keyof PlasmicCheckbox__VariantsArgs;
export const PlasmicCheckbox__VariantProps = new Array<VariantPropType>(
  "selected"
);

export type PlasmicCheckbox__ArgsType = {};
type ArgPropType = keyof PlasmicCheckbox__ArgsType;
export const PlasmicCheckbox__ArgProps = new Array<ArgPropType>();

export type PlasmicCheckbox__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultCheckboxProps {
  selected?: SingleBooleanChoiceArg<"selected">;
  className?: string;
}

function PlasmicCheckbox__RenderFunc(props: {
  variants: PlasmicCheckbox__VariantsArgs;
  args: PlasmicCheckbox__ArgsType;
  overrides: PlasmicCheckbox__OverridesType;
  dataFetches?: PlasmicCheckbox__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.freeBox___4YxAo)}>
        {(hasVariant(variants, "selected", "selected") ? true : true) ? (
          <div
            className={classNames(defaultcss.all, sty.freeBox__qHoR, {
              [sty.freeBox__selected__qHoRCjZWv]: hasVariant(
                variants,
                "selected",
                "selected"
              ),
            })}
          />
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCheckbox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCheckbox__VariantsArgs;
    args?: PlasmicCheckbox__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCheckbox__Fetches;
  } & Omit<PlasmicCheckbox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCheckbox__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCheckbox__ArgProps,
      internalVariantPropNames: PlasmicCheckbox__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicCheckbox__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCheckbox";
  } else {
    func.displayName = `PlasmicCheckbox.${nodeName}`;
  }
  return func;
}

export const PlasmicCheckbox = Object.assign(
  // Top-level PlasmicCheckbox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicCheckbox
    internalVariantProps: PlasmicCheckbox__VariantProps,
    internalArgProps: PlasmicCheckbox__ArgProps,
  }
);

export default PlasmicCheckbox;
/* prettier-ignore-end */

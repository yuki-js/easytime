// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mBKHaRhjQbiZuznDyARcTS
// Component: WrlNulxyIS
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
import Button from "../../Button"; // plasmic-import: CM9oqbJYK7/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_easytime.module.css"; // plasmic-import: mBKHaRhjQbiZuznDyARcTS/projectcss
import * as sty from "./PlasmicBizItem.module.css"; // plasmic-import: WrlNulxyIS/css

export type PlasmicBizItem__VariantMembers = {};

export type PlasmicBizItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicBizItem__VariantsArgs;
export const PlasmicBizItem__VariantProps = new Array<VariantPropType>();

export type PlasmicBizItem__ArgsType = {};
type ArgPropType = keyof PlasmicBizItem__ArgsType;
export const PlasmicBizItem__ArgProps = new Array<ArgPropType>();

export type PlasmicBizItem__OverridesType = {
  root?: p.Flex<typeof Button>;
};

export interface DefaultBizItemProps {
  className?: string;
}

function PlasmicBizItem__RenderFunc(props: {
  variants: PlasmicBizItem__VariantsArgs;
  args: PlasmicBizItem__ArgsType;
  overrides: PlasmicBizItem__OverridesType;
  dataFetches?: PlasmicBizItem__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <Button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    >
      {null}
    </Button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBizItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBizItem__VariantsArgs;
    args?: PlasmicBizItem__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicBizItem__Fetches;
  } & Omit<PlasmicBizItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBizItem__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicBizItem__ArgProps,
      internalVariantPropNames: PlasmicBizItem__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicBizItem__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBizItem";
  } else {
    func.displayName = `PlasmicBizItem.${nodeName}`;
  }
  return func;
}

export const PlasmicBizItem = Object.assign(
  // Top-level PlasmicBizItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicBizItem
    internalVariantProps: PlasmicBizItem__VariantProps,
    internalArgProps: PlasmicBizItem__ArgProps,
  }
);

export default PlasmicBizItem;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mBKHaRhjQbiZuznDyARcTS
// Component: Q2wcv59jeA
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
import * as sty from "./PlasmicPrintInvoice.module.css"; // plasmic-import: Q2wcv59jeA/css

export type PlasmicPrintInvoice__VariantMembers = {};

export type PlasmicPrintInvoice__VariantsArgs = {};
type VariantPropType = keyof PlasmicPrintInvoice__VariantsArgs;
export const PlasmicPrintInvoice__VariantProps = new Array<VariantPropType>();

export type PlasmicPrintInvoice__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPrintInvoice__ArgsType;
export const PlasmicPrintInvoice__ArgProps = new Array<ArgPropType>("children");

export type PlasmicPrintInvoice__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultPrintInvoiceProps {
  dataFetches: PlasmicPrintInvoice__Fetches;
}

function PlasmicPrintInvoice__RenderFunc(props: {
  variants: PlasmicPrintInvoice__VariantsArgs;
  args: PlasmicPrintInvoice__ArgsType;
  overrides: PlasmicPrintInvoice__OverridesType;
  dataFetches?: PlasmicPrintInvoice__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          {p.renderPlasmicSlot({
            defaultContents: null,
            value: args.children,
          })}
        </div>
      </div>
    </React.Fragment>
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
  PlasmicPrintInvoice__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPrintInvoice__VariantsArgs;
    args?: PlasmicPrintInvoice__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPrintInvoice__Fetches;
  } & Omit<PlasmicPrintInvoice__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPrintInvoice__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPrintInvoice__ArgProps,
      internalVariantPropNames: PlasmicPrintInvoice__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicPrintInvoice__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPrintInvoice";
  } else {
    func.displayName = `PlasmicPrintInvoice.${nodeName}`;
  }
  return func;
}

export const PlasmicPrintInvoice = Object.assign(
  // Top-level PlasmicPrintInvoice renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPrintInvoice
    internalVariantProps: PlasmicPrintInvoice__VariantProps,
    internalArgProps: PlasmicPrintInvoice__ArgProps,
  }
);

export default PlasmicPrintInvoice;
/* prettier-ignore-end */
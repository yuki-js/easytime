// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: j56rC5AhmHAm1fzGMT7yJp
// Component: wPqxbOYlWi
import * as React from "react";

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
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_react_invoice.module.css"; // plasmic-import: j56rC5AhmHAm1fzGMT7yJp/projectcss
import * as sty from "./PlasmicTotal.module.css"; // plasmic-import: wPqxbOYlWi/css

export type PlasmicTotal__VariantMembers = {
  withTax: "withTax";
};

export type PlasmicTotal__VariantsArgs = {
  withTax?: SingleBooleanChoiceArg<"withTax">;
};

type VariantPropType = keyof PlasmicTotal__VariantsArgs;
export const PlasmicTotal__VariantProps = new Array<VariantPropType>("withTax");

export type PlasmicTotal__ArgsType = {
  unit?: React.ReactNode;
  amount?: React.ReactNode;
  taxUnit?: React.ReactNode;
  includedTax?: React.ReactNode;
  action?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTotal__ArgsType;
export const PlasmicTotal__ArgProps = new Array<ArgPropType>(
  "unit",
  "amount",
  "taxUnit",
  "includedTax",
  "action"
);

export type PlasmicTotal__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultTotalProps {
  unit?: React.ReactNode;
  amount?: React.ReactNode;
  taxUnit?: React.ReactNode;
  includedTax?: React.ReactNode;
  action?: React.ReactNode;
  withTax?: SingleBooleanChoiceArg<"withTax">;
  className?: string;
}

function PlasmicTotal__RenderFunc(props: {
  variants: PlasmicTotal__VariantsArgs;
  args: PlasmicTotal__ArgsType;
  overrides: PlasmicTotal__OverridesType;
  dataFetches?: PlasmicTotal__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__withTax]: hasVariant(variants, "withTax", "withTax")
      })}
    >
      <div className={classNames(defaultcss.all, sty.freeBox__bjKSu)}>
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.freeBox___6VaBx
          )}
        >
          {"下記の通り"}
        </div>

        {p.renderPlasmicSlot({
          defaultContents: "ご請求",
          value: args.action
        })}

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.freeBox___233YA
          )}
        >
          {"申し上げます"}
        </div>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__bTSw2, {
          [sty.freeBox__withTax__bTSw2KZ5Yp]: hasVariant(
            variants,
            "withTax",
            "withTax"
          )
        })}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.freeBox___9QgN
          )}
        >
          {"合計金額"}
        </div>

        <div className={classNames(defaultcss.all, sty.freeBox__hvI3H)}>
          {p.renderPlasmicSlot({
            defaultContents: "¥",
            value: args.unit,
            className: classNames(sty.slotUnit, {
              [sty.slotUnit__withTax]: hasVariant(
                variants,
                "withTax",
                "withTax"
              )
            })
          })}

          {p.renderPlasmicSlot({
            defaultContents: "114514",
            value: args.amount,
            className: classNames(sty.slotAmount, {
              [sty.slotAmount__withTax]: hasVariant(
                variants,
                "withTax",
                "withTax"
              )
            })
          })}
        </div>
      </p.Stack>

      {(hasVariant(variants, "withTax", "withTax") ? true : true) ? (
        <div
          className={classNames(defaultcss.all, sty.freeBox__phTp7, {
            [sty.freeBox__withTax__phTp7KZ5Yp]: hasVariant(
              variants,
              "withTax",
              "withTax"
            )
          })}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__hA76K)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__xF0Jk,
                {
                  [sty.freeBox__withTax__xF0JkkZ5Yp]: hasVariant(
                    variants,
                    "withTax",
                    "withTax"
                  )
                }
              )}
            >
              {"内消費税"}
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox__fkn5P)}>
              {p.renderPlasmicSlot({
                defaultContents: "¥",
                value: args.taxUnit
              })}

              {p.renderPlasmicSlot({
                defaultContents: "11451",
                value: args.includedTax
              })}
            </div>
          </p.Stack>
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTotal__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTotal__VariantsArgs;
    args?: PlasmicTotal__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicTotal__Fetches;
  } & Omit<PlasmicTotal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTotal__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTotal__ArgProps,
      internalVariantPropNames: PlasmicTotal__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTotal__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTotal";
  } else {
    func.displayName = `PlasmicTotal.${nodeName}`;
  }
  return func;
}

export const PlasmicTotal = Object.assign(
  // Top-level PlasmicTotal renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTotal
    internalVariantProps: PlasmicTotal__VariantProps,
    internalArgProps: PlasmicTotal__ArgProps
  }
);

export default PlasmicTotal;
/* prettier-ignore-end */

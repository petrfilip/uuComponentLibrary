//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "UnexpectedSuccess",
  //@@viewOff:statics
};

export const UnexpectedSuccess = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    bgStyle: UU5.PropTypes.oneOf(["filled", "outline", "transparent", "underline"]),
    borderRadius: UU5.PropTypes.string,
    elevation: UU5.PropTypes.oneOf(["-1", "0", "1", "2", "3", "4", "5", -1, 0, 1, 2, 3, 4, 5]),
    colorSchema: UU5.PropTypes.string,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
    const [text, setText] = useState("Mission accomplished?");
    //@@viewOff:hooks

    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    return currentNestingLevel && currentNestingLevel !== "inline" ? (
      <UU5.Bricks.Card
        {...attrs}
        bgStyle={props.bgStyle}
        elevation={props.elevation}
        borderRadius={props.borderRadius}
        colorSchema={props.colorSchema}
        style={"paddingBottom: 10px"}
      >
        <UU5.Bricks.Row>
          <UU5.Bricks.Column colWidth="xs-12 s-12" className={"center"}>
            <UU5.Bricks.P>{text}</UU5.Bricks.P>
          </UU5.Bricks.Column>
        </UU5.Bricks.Row>

        <UU5.Bricks.Row>
          <UU5.Bricks.Column colWidth="xs-12 s-6" className={"center"}>
            <UU5.Bricks.Button colorSchema={"success"} onClick={() => setText("Unexpected success!")}>
              Yes!
            </UU5.Bricks.Button>
          </UU5.Bricks.Column>
          <UU5.Bricks.Column colWidth="xs-12 s-6" className={"center"}>
            <UU5.Bricks.Button colorSchema={"danger"} onClick={() => setText("Try again")}>
              No!
            </UU5.Bricks.Button>
          </UU5.Bricks.Column>
        </UU5.Bricks.Row>
      </UU5.Bricks.Card>
    ) : null;
    //@@viewOff:render
  },
});

export default UnexpectedSuccess;

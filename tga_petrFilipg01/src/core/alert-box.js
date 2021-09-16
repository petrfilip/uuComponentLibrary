//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import "uu5g04-block-layout";
import Config from "./config/config";

//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "AlertBox",
  //@@viewOff:statics
};

const types = {
  error: {
    schema: "danger",
    icon: "uu5-alert-circle",
    className: "uu5-common-bold",
  },
  warning: {
    schema: "warning",
    icon: "uu5-error-circle",
    className: "uu5-common-bold",
  },
  success: {
    schema: "success",
    icon: "uu5-ok-circle",
  },
  info: {
    schema: "info",
    icon: "uu5-finder",
  },
};

export const AlertBox = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    type: UU5.PropTypes.oneOf(["error", "warning", "info", "success"]),
    text: UU5.PropTypes.string,
    width: UU5.PropTypes.number,

    bgStyle: UU5.PropTypes.oneOf(["filled", "outline", "transparent", "underline"]),
    borderRadius: UU5.PropTypes.string,
    elevation: UU5.PropTypes.oneOf(["-1", "0", "1", "2", "3", "4", "5", -1, 0, 1, 2, 3, 4, 5]),
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    type: "info",
    text: "aaaaabbbbbccccc",
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
    const [clicked, setClicked] = useState(false);
    //@@viewOff:hooks

    //@@viewOn:private

    // source: https://stackoverflow.com/questions/11426275/how-can-i-show-dots-in-a-span-with-hidden-overflow/11426653
    function add3Dots(string, limit = 255) {
      var dots = "...";
      if (string.length > limit) {
        // you can also use substr instead of substring
        string = string.substring(0, limit) + dots;
      }

      return string;
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    if (props.borderRadius) {
      attrs.style = attrs.style || {};
      attrs.style.borderRadius = props.borderRadius;
    }

    // todo tady potřebuji poradit:
    // https://uuapp.plus4u.net/uu-bookkit-maing01/0238a88bac124b3ca828835b57144ffa/book/page?code=8c83b23a
    // nefunguje border radius (možná i elevation)
    return currentNestingLevel ? (
      <UU5.Common.Div {...attrs} style={clicked ? "backgroundColor: grey" : ""}>
        <UU5.Bricks.Row>
          <UU5.Bricks.Column colWidth="xs-12 s-1">
            <UU5.Bricks.Icon icon={types[props.type].icon} tooltip={props.text} />
          </UU5.Bricks.Column>
          <UU5.Bricks.Column colWidth="xs-12 s-9">
            <UU5.Bricks.Text className={types[props.type].className}>{add3Dots(props.text)}</UU5.Bricks.Text>
          </UU5.Bricks.Column>
          {currentNestingLevel !== "inline" && (
            <UU5.Bricks.Column colWidth="xs-12 s-2">
              <UU5.Bricks.Button onClick={() => setClicked(true)} colorSchema={types[props.type].schema}>
                OK {currentNestingLevel}
              </UU5.Bricks.Button>
            </UU5.Bricks.Column>
          )}
        </UU5.Bricks.Row>
      </UU5.Common.Div>
    ) : null;
    //@@viewOff:render
  },
});

export default AlertBox;

import UU5 from "uu5g04";
import TgaPetrFilip from "tga_petrFilipg01";

const { shallow } = UU5.Test.Tools;

describe(`TgaPetrFilip.Core.AlertBox`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<TgaPetrFilip.Core.AlertBox />);
    expect(wrapper).toMatchSnapshot();
  });
});

//@@viewOn:imports
//@@viewOff:imports

const getClearNumber = (item) => {
  return !isNaN(item) && !(typeof item === "string" || item instanceof String) ? item : 0;
};

export const SumCounter = (items) => {
  return items.reduce((prev, current) => getClearNumber(prev) + getClearNumber(current), 0);
};

export default SumCounter;

import { RangeSliderProps } from "@/utils/Types/appartments";
import { MultiRangeSlider } from "../MultiRangeSlider";

function RangeSlider({
  min,
  max,
  lowValue,
  highValue,
  onLowChange,
  onHighChange,
  prefix = "",
  showHistogram = false,
}: RangeSliderProps) {
  return (
    <MultiRangeSlider
      min={min}
      max={max}
      lowValue={lowValue}
      highValue={highValue}
      onLowChange={onLowChange}
      onHighChange={onHighChange}
      prefix={prefix}
      showHistogram={showHistogram}
    />
  );
}

export default RangeSlider;

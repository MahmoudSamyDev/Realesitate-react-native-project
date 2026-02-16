import { useRef, useState } from "react";
import { Animated, PanResponder, Text, View } from "react-native";

interface MultiRangeSliderProps {
  min: number;
  max: number;
  lowValue: number;
  highValue: number;
  onLowChange: (value: number) => void;
  onHighChange: (value: number) => void;
  prefix?: string;
  showHistogram?: boolean;
}

export const MultiRangeSlider = ({
  min,
  max,
  lowValue,
  highValue,
  onLowChange,
  onHighChange,
  prefix = "",
  showHistogram = false,
}: MultiRangeSliderProps) => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const [isDraggingLow, setIsDraggingLow] = useState(false);
  const [isDraggingHigh, setIsDraggingHigh] = useState(false);

  const lowThumbX = useRef(new Animated.Value(0)).current;
  const highThumbX = useRef(new Animated.Value(0)).current;

  const valueToPx = (value: number) => {
    return ((value - min) / (max - min)) * sliderWidth;
  };

  const pxToValue = (px: number) => {
    const value = (px / sliderWidth) * (max - min) + min;
    return Math.round(Math.max(min, Math.min(max, value)));
  };

  const lowPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        setIsDraggingLow(true);
        lowThumbX.setOffset(valueToPx(lowValue));
        lowThumbX.setValue(0);
      },
      onPanResponderMove: (_, gestureState) => {
        const newPx = valueToPx(lowValue) + gestureState.dx;
        const newValue = pxToValue(newPx);
        if (newValue < highValue - 1) {
          lowThumbX.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        lowThumbX.flattenOffset();
        const newPx = valueToPx(lowValue) + gestureState.dx;
        const newValue = pxToValue(newPx);
        if (newValue < highValue - 1) {
          onLowChange(newValue);
        }
        setIsDraggingLow(false);
      },
    }),
  ).current;

  const highPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        setIsDraggingHigh(true);
        highThumbX.setOffset(valueToPx(highValue));
        highThumbX.setValue(0);
      },
      onPanResponderMove: (_, gestureState) => {
        const newPx = valueToPx(highValue) + gestureState.dx;
        const newValue = pxToValue(newPx);
        if (newValue > lowValue + 1) {
          highThumbX.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        highThumbX.flattenOffset();
        const newPx = valueToPx(highValue) + gestureState.dx;
        const newValue = pxToValue(newPx);
        if (newValue > lowValue + 1) {
          onHighChange(newValue);
        }
        setIsDraggingHigh(false);
      },
    }),
  ).current;

  const lowPercent = ((lowValue - min) / (max - min)) * 100;
  const highPercent = ((highValue - min) / (max - min)) * 100;

  return (
    <View className="py-4">
      {/* Histogram Background */}
      {showHistogram && (
        <View className="flex-row items-end justify-between h-16 px-2 mb-4">
          {[8, 12, 16, 20, 18, 22, 24, 20, 16, 14, 10, 8].map((height, index) => (
            <View
              key={index}
              className="flex-1 bg-black-200/10 mx-0.5 rounded-t"
              style={{ height: height * 2 }}
            />
          ))}
        </View>
      )}

      {/* Slider Container */}
      <View
        onLayout={(e) => setSliderWidth(e.nativeEvent.layout.width)}
        className="h-12 justify-center"
      >
        {/* Track */}
        <View className="h-2 bg-black-200/20 rounded-full">
          {/* Active Range */}
          <View
            className="absolute h-2 bg-primary-300 rounded-full"
            style={{
              left: `${lowPercent}%`,
              width: `${highPercent - lowPercent}%`,
            }}
          />

          {/* Low Thumb */}
          <Animated.View
            {...lowPanResponder.panHandlers}
            className="absolute w-6 h-6 bg-primary-300 rounded-full border-4 border-white shadow-md -top-2"
            style={{
              left: `${lowPercent}%`,
              marginLeft: -12,
              transform: [{ scale: isDraggingLow ? 1.2 : 1 }],
            }}
          />

          {/* High Thumb */}
          <Animated.View
            {...highPanResponder.panHandlers}
            className="absolute w-6 h-6 bg-primary-300 rounded-full border-4 border-white shadow-md -top-2"
            style={{
              left: `${highPercent}%`,
              marginLeft: -12,
              transform: [{ scale: isDraggingHigh ? 1.2 : 1 }],
            }}
          />
        </View>
      </View>

      {/* Values Display */}
      <View className="flex-row justify-between mt-2">
        <Text className="text-base font-rubik-semibold text-primary-300">
          {prefix}
          {lowValue}
        </Text>
        <Text className="text-base font-rubik-semibold text-primary-300">
          {prefix}
          {highValue}
        </Text>
      </View>
    </View>
  );
};

export default MultiRangeSlider;

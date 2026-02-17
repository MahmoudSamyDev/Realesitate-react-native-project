import { useEffect, useRef, useState } from "react";
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
  const [tempLowValue, setTempLowValue] = useState(lowValue);
  const [tempHighValue, setTempHighValue] = useState(highValue);

  // Use refs to store current values so PanResponder always has access to latest values
  const sliderWidthRef = useRef(0);
  const lowValueRef = useRef(lowValue);
  const highValueRef = useRef(highValue);
  const tempLowValueRef = useRef(tempLowValue);
  const tempHighValueRef = useRef(tempHighValue);

  // Update refs when values change
  useEffect(() => {
    sliderWidthRef.current = sliderWidth;
  }, [sliderWidth]);

  useEffect(() => {
    lowValueRef.current = lowValue;
    highValueRef.current = highValue;
  }, [lowValue, highValue]);

  useEffect(() => {
    tempLowValueRef.current = tempLowValue;
    tempHighValueRef.current = tempHighValue;
  }, [tempLowValue, tempHighValue]);

  const lowThumbX = useRef(new Animated.Value(0)).current;
  const highThumbX = useRef(new Animated.Value(0)).current;

  const valueToPx = (value: number) => {
    if (sliderWidthRef.current === 0) return 0;
    return ((value - min) / (max - min)) * sliderWidthRef.current;
  };

  const pxToValue = (px: number) => {
    if (sliderWidthRef.current === 0) return min;
    const value = (px / sliderWidthRef.current) * (max - min) + min;
    return Math.round(Math.max(min, Math.min(max, value)));
  };

  const lowPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        setIsDraggingLow(true);
        setTempLowValue(lowValueRef.current);
      },
      onPanResponderMove: (_, gestureState) => {
        if (sliderWidthRef.current === 0) return;
        const currentPx = valueToPx(lowValueRef.current);
        const newPx = Math.max(0, Math.min(sliderWidthRef.current, currentPx + gestureState.dx));
        const newValue = pxToValue(newPx);
        const currentHighValue = highValueRef.current;
        const clampedValue = Math.max(min, Math.min(currentHighValue - 1, newValue));
        setTempLowValue(clampedValue);
      },
      onPanResponderRelease: () => {
        const clampedValue = Math.max(
          min,
          Math.min(highValueRef.current - 1, tempLowValueRef.current),
        );
        onLowChange(clampedValue);
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
        setTempHighValue(highValueRef.current);
      },
      onPanResponderMove: (_, gestureState) => {
        if (sliderWidthRef.current === 0) return;
        const currentPx = valueToPx(highValueRef.current);
        const newPx = Math.max(0, Math.min(sliderWidthRef.current, currentPx + gestureState.dx));
        const newValue = pxToValue(newPx);
        const currentLowValue = lowValueRef.current;
        const clampedValue = Math.max(currentLowValue + 1, Math.min(max, newValue));
        setTempHighValue(clampedValue);
      },
      onPanResponderRelease: () => {
        const clampedValue = Math.max(
          lowValueRef.current + 1,
          Math.min(max, tempHighValueRef.current),
        );
        onHighChange(clampedValue);
        setIsDraggingHigh(false);
      },
    }),
  ).current;

  const displayLowValue = isDraggingLow ? tempLowValue : lowValue;
  const displayHighValue = isDraggingHigh ? tempHighValue : highValue;

  const lowPercent = ((displayLowValue - min) / (max - min)) * 100;
  const highPercent = ((displayHighValue - min) / (max - min)) * 100;

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
        onLayout={(e) => {
          const width = e.nativeEvent.layout.width;
          setSliderWidth(width);
          sliderWidthRef.current = width;
        }}
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
          {displayLowValue}
        </Text>
        <Text className="text-base font-rubik-semibold text-primary-300">
          {prefix}
          {displayHighValue}
        </Text>
      </View>
    </View>
  );
};

export default MultiRangeSlider;

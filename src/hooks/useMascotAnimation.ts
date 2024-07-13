import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

const useMascotAnimation = (onAnimationComplete) => {
    const translateYAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const startAnimation = () => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(translateYAnim, {
                        toValue: -100,
                        duration: 500,
                        easing: Easing.linear,
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateYAnim, {
                        toValue: 0,
                        duration: 500,
                        easing: Easing.linear,
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateYAnim, {
                        toValue: -50,
                        duration: 500,
                        easing: Easing.linear,
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateYAnim, {
                        toValue: 0,
                        duration: 500,
                        easing: Easing.linear,
                        useNativeDriver: true,
                    }),
                ]),
                { iterations: 1 } // Number of times to repeat animation (adjust as needed)
            ).start(() => {
                onAnimationComplete(); // Notify parent component
            });
        };

        startAnimation();

        // Clean up animation on unmount
        return () => {
            translateYAnim.setValue(0); // Reset animation value on unmount
        };
    }, [translateYAnim, onAnimationComplete]);

    return translateYAnim;
};

export default useMascotAnimation;
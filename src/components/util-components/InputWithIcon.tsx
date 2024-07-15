import { THEME_COLORS } from "@utils/constant/constant";
import { responsiveHeight } from "@utils/style/responsive";
import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
interface InputWithIconProps extends TextInputProps {
  onChangeText: (value: string) => void;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
  onChangeText,
  value,
  placeholder,
  ...rest
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        {...rest}
        cursorColor={THEME_COLORS["semantic.fg.text"]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderColor: THEME_COLORS["semantic.fg.weak"],
    borderWidth: 1,
    height: responsiveHeight(50),
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: THEME_COLORS["semantic.fg.text"],
    backgroundColor: THEME_COLORS["semantic.fg.weak"],
    height: responsiveHeight(48),
    paddingLeft: 20,
    paddingRight: 20,
  },
  iconContainer: {
    backgroundColor: THEME_COLORS["semantic.fg.icon"],
    height: responsiveHeight(50),
  },
});

export default InputWithIcon;

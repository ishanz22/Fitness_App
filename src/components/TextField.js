import React, {useEffect, useRef, useState} from 'react';
import {Image, Keyboard, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {colors, dimensions, fontFamilies, fontSizes, imageSizes} from '../configurations/constants';
import {View} from "react-native-animatable";

const eye = require('../assets/images/icon_eye_open.webp');
const eyeCut = require('../assets/images/icon_eye_close.webp');


const TextField = ({
                       placeholder = '',
                       isPassword = false,
                       icon = null,
                       onChangeText = () => {
                       },
                       textFieldStyles = {},
                       inputStyles = {},
                       placeHolderColor = "rgba(0,0,0,0.65)",
                       showEye = false,
                       keyboardType = 'default',
                       value = null,
                       editable = true,
                       isMultiline = false,
                       maxLength = 220,
                       width = dimensions.widthLevel5
                   }) => {


    const [onEye, setOnEye] = useState(false);
    const [passwordField, setPasswordField] = useState(isPassword);
    const [text, setText] = useState(null);

    const textInputRef = useRef(null);

    useEffect(() => {
        setText(value);
    }, [value])


    useEffect(() => {
        if (isPassword) {
            textInputRef.current.setNativeProps({
                style: {fontFamily: fontFamilies.OpenSansRegular}
            })
        }

        // const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
        //     Keyboard.dismiss()
        // });
        //
        // return () => {
        //     hideSubscription.remove();
        // };
    }, [])


    return (
        <TouchableWithoutFeedback style={{paddingRight: 5}} onPress={() => {
            textInputRef.current.focus()
        }}>
            <View style={[styles.inputContainer, textFieldStyles, {width: width + 22}]}>
                {icon ? <Image source={icon} style={[imageSizes.smallIcons, styles.icon]}/> : null}
                <TextInput
                    onKeyPress={({nativeEvent}) => {
                        if (nativeEvent.key === 'Backspace') {
                            // Keyboard.dismiss();
                        }
                    }}
                    ref={textInputRef}
                    style={[styles.input, inputStyles, showEye ? {
                        width: (width - 20),
                        paddingRight: dimensions.paddingLevel1
                    } : {
                        width: width + 20,
                        paddingRight: dimensions.paddingLevel2,
                    }, icon !== null ? {width: width - 1} : width]}
                    placeholder={placeholder}
                    selectionColor={"#000"}
                    placeholderTextColor={placeHolderColor}
                    secureTextEntry={passwordField}
                    onChangeText={(text) => {
                        setText(text);
                        onChangeText(text);
                    }}
                    value={value ? value : text}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                    editable={editable}
                    multiline={isMultiline}
                />
                {
                    isPassword && showEye ?
                        <TouchableOpacity style={{position: 'absolute', right: 16, top: '35%'}}
                                          onPress={() => {
                                              if (onEye) {
                                                  setPasswordField(true);
                                              } else {
                                                  setPasswordField(false);
                                              }
                                              setOnEye(!onEye);
                                          }}
                        >
                            <Image source={onEye ? eye : eyeCut} style={{
                                width: imageSizes.smallIcons.width * 1.25,
                                height: imageSizes.smallIcons.height * 0.85
                            }}/>
                        </TouchableOpacity>
                        : null
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        // backgroundColor: "transparent",
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        height: dimensions.heightLevel8 / 2.1,
        // borderWidth: 1.5,
        // borderColor: colors.white
        borderColor: '#F5F5F5',
    },
    input: {
        fontSize: fontSizes.fontMidMedium,
        paddingLeft: dimensions.paddingLevel2,
        fontFamily: fontFamilies.OpenSansBold,
        color: colors.black,
        fontWeight: "bold"
    },
    icon: {
        marginLeft: dimensions.paddingLevel2,
        marginRight: dimensions.paddingLevel1 * 0.5,
        minWidth: 20
    }
})

export default TextField;

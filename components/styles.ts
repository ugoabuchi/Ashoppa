import { StyleSheet, Dimensions } from "react-native";
import { StyleTransparentType } from "../types";

//get screen height
const { height, width } = Dimensions.get("screen");

const LightTheme = {

    PRIMARY: "#000000",
    HIGHLIGHT: "#662FFA",
    INFORMATIVE: "#DC2626",
    COMPLIMENTARY1: "#707070",
    COMPLIMENTARY2: "#FFFFFF",
    COMPLIMENTARY3: "#337836",
    SUCCESS: "#337836",
    ERROR: "#DC2626",
    WARNING: "#B85408",
    GETTRANSPARENTCOLOR: (color: String, transparency: StyleTransparentType) => { return color +""+ transparency },
    FONT1: "Poppins-Bold",
    LARGEFONTSIZE: height >= 500 ? 16 : 15,
    MEDIUMFONTSIZE: height >= 500 ? 15 : 14,
    SMALLFONTSIZE: height >= 500 ? 14 : 12,
    TABICONBIG: 30,
    TABICONSMALL: 24,
    BUTTONICONSIZE1: height >= 500 ? 16 : 14,
    BUTTONICONSIZE2: height >= 500 ? 18 : 16,
    BUTTONICONSIZE3: height >= 500 ? 22 : 20
    
}

const DarkTheme = {

    PRIMARY: "",
    HIGHLIGHT: "",
    INFORMATIVE: "",
    COMPLIMENTARY1: "",
    COMPLIMENTARY2: "",
    COMPLIMENTARY3: "",
    SUCCESS: "",
    ERROR: "",
    WARNING: "",
    GETTRANSPARENTCOLOR: (color: String, transparency: StyleTransparentType) => { return color +""+ transparency },
    FONT1: "",
    LARGEFONTSIZE: 0,
    MEDIUMFONTSIZE: 0,
    SMALLFONTSIZE: 0,
    TABICONBIG: 0,
    TABICONSMALL: 0,
    BUTTONICONSIZE1: 0,
    BUTTONICONSIZE2: 0,
    BUTTONICONSIZE3: 0,

}

const LightMode = {

    GenralComponentColors: {

        PRIMARY: LightTheme.PRIMARY,
        HIGHLIGHT: LightTheme.HIGHLIGHT,
        INFORMATIVE: LightTheme.INFORMATIVE,
        COMPLIMENTARY1: LightTheme.COMPLIMENTARY1,
        COMPLIMENTARY2: LightTheme.COMPLIMENTARY2,
        COMPLIMENTARY3: LightTheme.COMPLIMENTARY3,
        SUCCESS: LightTheme.SUCCESS,
        ERROR: LightTheme.ERROR,
        WARNING: LightTheme.WARNING,
        GETTRANSPARENTCOLOR: (hexColorCode: string, transparencyNumber: StyleTransparentType)=>LightTheme.GETTRANSPARENTCOLOR(hexColorCode, transparencyNumber),
        NORMAL: LightTheme.HIGHLIGHT,
        FONT1: LightTheme.FONT1,
        LARGEFONTSIZE: LightTheme.LARGEFONTSIZE,
        MEDIUMFONTSIZE: LightTheme.MEDIUMFONTSIZE,
        SMALLFONTSIZE: LightTheme.SMALLFONTSIZE,
        TABICONBIG: LightTheme.TABICONBIG,
        TABICONSMALL: LightTheme.TABICONSMALL,
        BUTTONICONSIZE1: LightTheme.BUTTONICONSIZE1,
        BUTTONICONCOLOR1: LightTheme.COMPLIMENTARY2,
        BUTTONICONSIZE2: LightTheme.BUTTONICONSIZE2,
        BUTTONICONCOLOR2: LightTheme.HIGHLIGHT,
        BUTTONICONSIZE3: LightTheme.BUTTONICONSIZE3,

    },
    
    

}

const DarkMode = {

    GenralComponentColors: {

        PRIMARY: DarkTheme.PRIMARY,
        HIGHLIGHT: DarkTheme.HIGHLIGHT,
        INFORMATIVE: DarkTheme.INFORMATIVE,
        COMPLIMENTARY1: DarkTheme.COMPLIMENTARY1,
        COMPLIMENTARY2: DarkTheme.COMPLIMENTARY2,
        COMPLIMENTARY3: DarkTheme.COMPLIMENTARY3,
        SUCCESS: DarkTheme.SUCCESS,
        ERROR: DarkTheme.ERROR,
        WARNING: DarkTheme.WARNING,
        GETTRANSPARENTCOLOR: (hexColorCode: string, transparencyNumber: StyleTransparentType)=>DarkTheme.GETTRANSPARENTCOLOR(hexColorCode, transparencyNumber),
        NORMAL: DarkTheme.HIGHLIGHT,
        FONT1: DarkTheme.FONT1,
        LARGEFONTSIZE: DarkTheme.LARGEFONTSIZE,
        MEDIUMFONTSIZE: DarkTheme.MEDIUMFONTSIZE,
        SMALLFONTSIZE: DarkTheme.SMALLFONTSIZE,
        TABICONBIG: DarkTheme.TABICONBIG,
        TABICONSMALL: DarkTheme.TABICONSMALL,
        BUTTONICONSIZE1: DarkTheme.BUTTONICONSIZE1,
        BUTTONICONCOLOR1: DarkTheme.COMPLIMENTARY2,
        BUTTONICONSIZE2: DarkTheme.BUTTONICONSIZE2,
        BUTTONICONCOLOR2: DarkTheme.HIGHLIGHT,
        BUTTONICONSIZE3: DarkTheme.BUTTONICONSIZE3,

    },

}

export { LightMode, DarkMode }
import { StyleSheet } from "react-native";
import { Color } from "../../utils/color";
import ThemeUtils from "../../utils/ThemeUtils";


export const Styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    listContainer: { justifyContent: 'center', alignItems: 'center', marginTop: ThemeUtils.relativeHeight(1) },
    flatStyle: { marginBottom: 2 }
})
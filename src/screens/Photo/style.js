import { StyleSheet } from "react-native";
import ThemeUtils from "../../utils/ThemeUtils";

export const Styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    listContainer: { marginTop: ThemeUtils.relativeHeight(1) },
    flatStyle: { flex: 1, marginBottom: 2, },
})
import { StyleSheet } from "react-native";
import { Color } from "../../utils/color";
import ThemeUtils from "../../utils/ThemeUtils";


export const Styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    listContainer: { marginTop: ThemeUtils.relativeHeight(1) },
    flatStyle: { flex: 1,  },
    card: {
        borderWidth: 1, borderColor: Color.BLACK, padding: ThemeUtils.relativeHeight(1), marginHorizontal: ThemeUtils.relativeWidth(3), margin: ThemeUtils.relativeHeight(1), elevation: 2, shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: Color.WHITE,
        borderRadius:10
    },
   boldText: { color: Color.BLACK,fontWeight: '800', marginTop: 5, fontSize: 16 }
})
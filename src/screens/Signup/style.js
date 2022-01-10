import { StyleSheet } from 'react-native';
import { Color } from '../../utils/color';

export const Styles = StyleSheet.create({
    containerL: { flex: 1, backgroundColor: Color.BACKGROUND, paddingHorizontal: 40, justifyContent: 'center' },
    switchContainer: { flex: 0.2, justifyContent: 'center', alignSelf: 'center' },
    title: { color: Color.WHITE, alignSelf: 'center', marginTop: 20, fontSize: 20 },
    secondContainer: { flex: 0.8 },
    checkBoxContainer: {
        flexDirection: 'row',
        marginStart: 10,
        alignItems: 'center',
        marginHorizontal: 30,

    },
    termnContainer: {
        alignSelf: 'center',
        color: Color.PRIMARY,
        fontWeight: 'bold',

    },
    btnContainer: { marginHorizontal: 80, marginTop: 10 },
    btn: { backgroundColor: Color.BORDER_COLOR, borderRadius: 20, paddingHorizontal: 10, },
    btnText: { padding: 15, color: '#1D412C', alignSelf: 'center' },
    tncText: { color: Color.WHITE, fontSize: 12 },
    tncText1: { color: Color.BORDER_COLOR }


});

import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 40,
    },
});

const Example = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Hello, world!</Text>
        </View>
    );
}

export default Example;

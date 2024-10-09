import {Button, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const ThirdScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Third screen</Text>
            <Button title={'Go to screen one'}
                    onPress={() => navigation.navigate('Screen One')}
            />
        </View>
    )
}

export default ThirdScreen;
import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';
import MyButton from "./components/MyButton/MyButton";
import {useRef, useState} from "react";
import {appStyles} from "./styles/appStyles";
import {AppData} from "./types/AppData";

const App = () => {
    const [appData, setAppData] = useState<AppData>({
        text: 'Here\'s some text',
        textColor: 'black',
    });

    const buttons = [
        {text: "Make text green", textColor: 'green'},
        {text: "Make text yellow", textColor: 'yellow'},
        {text: "Make text red", textColor: 'red'},
    ] as AppData[];

    return (
        <View style={appStyles.container}>
            <Text
                style={[appStyles.text, {color: appData.textColor}]}
            >{appData.text}</Text>
            {buttons.map((button, index) => (
                <MyButton
                    key={index}
                    setAppData={setAppData}
                    appData={button}
                />
            ))}
            <StatusBar style="auto"/>
        </View>
    );
}

export default App;
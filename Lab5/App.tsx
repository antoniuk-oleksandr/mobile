import {NavigationContainer} from '@react-navigation/native';
import "./global.css"
import {SQLiteProvider} from "expo-sqlite";
import {Suspense} from "react";
import LoadingScreen from "./general-components/LoadingScreen/LoadingScreen";
import {useDatabase} from "./app/screens/HomeScreen/hooks/use-database";
import ScreenStack from "./app/screens/ScreenStack";
import {StatusBar} from "expo-status-bar";
import {QueryClient, QueryClientProvider} from "react-query";


export default function App() {
    const {loaded} = useDatabase();
    const queryClient = new QueryClient();

    if (!loaded) return <LoadingScreen/>
    return (
        <QueryClientProvider client={queryClient}>
            <StatusBar/>
            <NavigationContainer>
                <Suspense fallback={<LoadingScreen/>}>
                    <SQLiteProvider databaseName={'sqlite.db'} useSuspense>
                        <ScreenStack/>
                    </SQLiteProvider>
                </Suspense>
            </NavigationContainer>
        </QueryClientProvider>
    );
}
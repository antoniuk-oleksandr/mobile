import {startTransition, useEffect, useState} from "react";
import {openDatabaseAsync} from "expo-sqlite";
import {tryToCreateTables} from "../../../database/repository/recipe-repository";

export const useDatabase = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const doAsync = async () => {
            try {
                // await loadDB();
                const db = await openDatabaseAsync('sqlite.db');
                await tryToCreateTables(db);

                startTransition(() => {
                    setLoaded(true);
                });
            } catch (e) {
                console.error(e);
            }
        }

        doAsync();
    }, []);

    return {loaded};
}
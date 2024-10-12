import {Database} from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import {Post} from "./Post";

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
    schema,
    migrations,
    jsi: true, /* Platform.OS === 'ios' */
    onSetUpError: error => {
        console.log(error)
    }
})

export const database = new Database({
    adapter,
    modelClasses: [Post],
})
import { configureStore } from "@reduxjs/toolkit";

import Data from './data';

const store = configureStore({
    reducer : {
        data: Data
    }
})

export default store;
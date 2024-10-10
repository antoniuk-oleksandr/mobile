import {AppData} from "../types/AppData";
import {Dispatch, SetStateAction} from "react";


export const handleMyButtonClick = (
    appData: AppData,
    setAppData: Dispatch<SetStateAction<AppData>>
) => {
    const {textColor} = appData;

    setAppData({
        text: `Text is ${textColor}`,
        textColor: textColor
    })
}
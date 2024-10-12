import {Dispatch, SetStateAction} from "react";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from 'expo-file-system';
import {SetRecipeValue} from "../../types/SetRecipeValue";

export const uploadImage = async (
    mode: 'camera' | 'gallery',
    setValue: SetRecipeValue,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
) => {
    try {
        let result = mode === 'camera'
            ? await takeCameraPhoto()
            : await takeGalleryPhoto();

        if (!result.canceled)
            await savePhoto(result.assets[0].uri, setValue, setIsOpen);

    } catch (error) {
        console.log(error);
        setIsOpen(false);
    }
}

const takeCameraPhoto = async () => {
    await ImagePicker.requestCameraPermissionsAsync();
    return await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.back,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
    });
}

const takeGalleryPhoto = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    return await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
    });
}

export const removePhoto = (
    setValue: SetRecipeValue,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
) => {
    setValue('image', '');
    setIsOpen(false);
}

const savePhoto = async (
    uri: string,
    setValue: SetRecipeValue
,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
) => {
    const base64Image = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
    });

    setValue('image', `data:image/jpeg;base64,${base64Image}`);
    setIsOpen(false);
}
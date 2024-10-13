import {LinearGradient} from "expo-linear-gradient";

const RecipeGradient = () => {
    return (
        <LinearGradient
            colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
            locations={[0, 0.3, 1]}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%' }}
        />
    )
}

export default RecipeGradient;
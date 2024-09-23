import { Image, View } from 'react-native'

const Logo = () => {
    return (
      <View>
        <Image
          source={require('../../../../assets/images/logo.png')}
          style={{ width: 180, height: 180 }}
        />
      </View>
    )
  }

export default Logo;
import React from 'react';
import { Image, View, ImageBackground } from 'react-native';

const Splash = props => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<ImageBackground
				source={require('../../assets/background.jpg')}
				style={{
					width: '100%',
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Image
					style={{
						width: '90%',
						height: '20%',
					}}
					source={require('../../assets/IATA-Logo.png')}
				/>
			</ImageBackground>
		</View>
	);
};

export { Splash };

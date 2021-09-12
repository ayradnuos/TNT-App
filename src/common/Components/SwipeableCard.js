import * as React from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import { Animated, TouchableOpacity, View } from 'react-native';
import Trash from '../../../assets/Icons/Trash.svg';
import Edit from '../../../assets/Icons/Edit.svg';

export const SwipeableCard = ({ children, onEdit, onDelete }) => {
	const renderRightActions = progress => {
		let widthRange = 0;
		if (onDelete) widthRange += 80;
		if (onEdit) widthRange += 80;

		const trans = progress.interpolate({
			inputRange: [0, 1],
			outputRange: [widthRange, 0],
		});

		return (
			<View style={{ width: widthRange, marginVertical: 10, marginRight: 10 }}>
				<Animated.View
					style={{
						flex: 1,
						flexDirection: 'row',
						transform: [{ translateX: trans }],
					}}>
					{onDelete && (
						<TouchableOpacity
							style={{
								alignItems: 'center',
								flex: 1,
								justifyContent: 'center',
								backgroundColor: 'rgba(200, 41, 41, 0.09)',
								borderRadius: 10,
								marginHorizontal: 10,
							}}
							onPress={() => onDelete()}>
							<Trash color="#FF2929" width={20} height={20} />
						</TouchableOpacity>
					)}
					{onEdit && (
						<TouchableOpacity
							style={{
								alignItems: 'center',
								flex: 1,
								justifyContent: 'center',
								backgroundColor: 'rgba(41, 41, 100, 0.09)',
								borderRadius: 10,
							}}
							onPress={() => onEdit()}>
							<Edit width={20} height={20} />
						</TouchableOpacity>
					)}
				</Animated.View>
			</View>
		);
	};

	return (
		<Swipeable
			// enabled={!!onDelete}
			// enabled={true}
			renderRightActions={progress => renderRightActions(progress)}
			overshootRight={false}>
			{children}
		</Swipeable>
	);
};

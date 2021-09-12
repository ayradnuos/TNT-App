import React, { useState } from 'react';
import DashboardView from './Dashboard.view';
import TesseractOcr, {
	LANG_ENGLISH,
	useEventListener,
} from 'react-native-tesseract-ocr';
import ImagePicker from 'react-native-image-crop-picker';
import { Button, Image, Text, View } from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';

const DashboardScreen = props => {
	const [isLoading, setIsLoading] = useState(false);
	const [progress, setProgress] = useState(0);
	const [imgSrc, setImgSrc] = useState(null);
	const [text, setText] = useState('');
	useEventListener('onProgressChange', p => {
		setProgress(p.percent / 100);
	});

	const DEFAULT_HEIGHT = 500;
	const DEFAULT_WITH = 600;
	const defaultPickerOptions = {
		cropping: true,
		height: DEFAULT_HEIGHT,
		width: DEFAULT_WITH,
	};

	const recognizeTextFromImage = async path => {
		setIsLoading(true);

		try {
			const tesseractOptions = {};
			console.log('1', typeof path);
			const recognizedText = await TesseractOcr.recognize(
				path,
				LANG_ENGLISH,
				tesseractOptions,
			);
			console.log('2');
			setText(recognizedText);
		} catch (err) {
			console.error('???????????', err);
			setText('');
		}

		setIsLoading(false);
		setProgress(0);
	};

	const recognizeFromPicker = async (options = defaultPickerOptions) => {
		try {
			const image = await ImagePicker.openPicker(options);
			setImgSrc({ uri: image.path });
			console.log('IMAEEEE', image.path);
			await recognizeTextFromImage(image.path);
		} catch (err) {
			if (err.message !== 'User cancelled image selection') {
				console.error(err);
			}
		}
	};

	const recognizeFromCamera = async (options = defaultPickerOptions) => {
		try {
			const image = await ImagePicker.openCamera(options);
			setImgSrc({ uri: image.path });
			await recognizeTextFromImage(image.path);
		} catch (err) {
			if (err.message !== 'User cancelled image selection') {
				console.error(err);
			}
		}
	};

	const tessOptions = {};
	TesseractOcr.recognize(imgSrc, LANG_ENGLISH, tessOptions);
	console.log('Dashboard');
	return (
		<View style={{ flex: 1, backgroundColor: 'blue' }}>
			<Button
				disabled={isLoading}
				title="Camera"
				onPress={() => {
					recognizeFromCamera();
				}}
			/>
			<Button
				disabled={isLoading}
				title="Picker"
				onPress={() => {
					recognizeFromPicker();
				}}
			/>
			{imgSrc && (
				<View>
					<Image style={{ width: 300, height: 300 }} source={imgSrc} />
					{isLoading ? (
						<ProgressCircle showsText progress={progress} />
					) : (
						<Text>{text}</Text>
					)}
				</View>
			)}
		</View>
	);
};

export default DashboardScreen;

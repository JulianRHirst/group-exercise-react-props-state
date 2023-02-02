// 💡 You can import assets like images directly and use them in your components:
import {ChuckImage} from '../components/chuck_image';
import {ImageData} from '../types/image_data';
import {FC} from 'react';
import {ChuckInfoProps} from '../components/chuck_info';

interface ChuckCardProps {
	greeting: string;
	images: ImageData[];
}

export const ChuckCard: React.FC<ChuckCardProps> = ( {greeting, images}) =>
	// 💡 This weird-looking `<>` thing is a "Fragment". Each component must have exactly one child.
	// 💡 As a result, sometimes it is useful to wrap components in Fragments like this:
	<>
		<h2>{greeting}</h2>

		<ChuckImage {...images[Math.floor(Math.random()*images.length)]} />
	</>



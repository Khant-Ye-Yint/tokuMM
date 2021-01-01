import React from 'react';
import { CardWrapper, CardText, CardImage } from './Card.elements';
import cardimg from '../../images/ziO.png';

const Card = () => {
	return (
		<CardWrapper to='/kamen-rider/heisei-era/zi-o'>
			<CardText>Zi-O</CardText>
			<CardImage src={cardimg} />
		</CardWrapper>
	);
};

export default Card;

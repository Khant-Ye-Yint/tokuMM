import React from 'react';
import { Card } from '../index';
import { CardContainer, Division, Title } from '../../globalStyles';

const Section = ({ title }) => {
	return (
		<Division>
			<Title>{title}</Title>
			<CardContainer>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</CardContainer>
		</Division>
	);
};

export default Section;

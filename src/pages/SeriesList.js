import React from 'react';
import { Section } from '../components';
import { Container } from '../globalStyles';

const SeriesList = ({ match }) => {
	const era = match.params.era.split('-')[0];
	const title = `${era} ${match.params.genre}`;
	return (
		<Container>
			<Section title={title} />
		</Container>
	);
};

export default SeriesList;

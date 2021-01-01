import React, { useState } from 'react';
import {
	Wrapper,
	DropdownText,
	DropdownIndicator,
	DropdownList,
	DropdownItem,
	DropdownLink,
} from './Dropdown.elements';

const Dropdown = ({ type, closeNav, subDir }) => {
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(!show);

	return (
		<Wrapper onClick={handleShow}>
			<DropdownText>{type}</DropdownText>
			<DropdownIndicator show={show} />
			<DropdownList show={show}>
				<DropdownItem>
					<DropdownLink to={subDir + '/heisei-era'} onClick={closeNav}>
						Heisei Era
					</DropdownLink>
				</DropdownItem>
				<DropdownItem>
					<DropdownLink to={subDir + '/reiwa-era'} onClick={closeNav}>
						Reiwa Era
					</DropdownLink>
				</DropdownItem>
			</DropdownList>
		</Wrapper>
	);
};

export default Dropdown;

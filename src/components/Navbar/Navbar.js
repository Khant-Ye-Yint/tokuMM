import React, { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { FaSun, FaAlignRight, FaTimes } from 'react-icons/fa';
import {
	Nav,
	NavContainer,
	NavLogo,
	NavMenu,
	ThemeIcon,
	HumburgerIcon,
} from './Navbar.elements';
import Dropdown from '../Dropdown/Dropdown';

const Navbar = () => {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => setClicked(!clicked);

	return (
		<IconContext.Provider value={{ color: '#4F5D67' }}>
			<Nav>
				<NavContainer>
					<NavLogo to='/'>toku.mm</NavLogo>
					<HumburgerIcon onClick={handleClick}>
						{clicked ? <FaTimes /> : <FaAlignRight />}
					</HumburgerIcon>
					<NavMenu clicked={clicked}>
						<Dropdown
							type='Super Sentai'
							subDir='/super-sentai'
							closeNav={handleClick}
						/>
						<Dropdown
							type='Kamen Rider'
							subDir='/kamen-rider'
							closeNav={handleClick}
						/>
						<ThemeIcon>
							<FaSun />
						</ThemeIcon>
					</NavMenu>
				</NavContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;

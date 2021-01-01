import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
	padding: 5px 10px;
	width: 200px;
	height: 50px;
	border-radius: 30px;
	box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
		-2px -2px 8px rgba(100, 100, 100, 0.15);
	color: #7c858d;
	cursor: pointer;

	&:active {
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
			-2px -2px 8px rgba(100, 100, 100, 0.15),
			inset 4px 4px 8px rgba(0, 0, 0, 0.25),
			inset -2px -2px 8px rgba(100, 100, 100, 0.15);
	}
`;

export const DropdownText = styled.span`
	font-size: 1.2rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-60%, -50%);
	width: 150px;
`;

export const DropdownIndicator = styled(FaChevronDown)`
	position: absolute;
	top: 50%;
	right: 15px;
	transition: all 500ms ease-in-out;
	transform: ${({ show }) =>
		show ? 'translateY(-30%) rotate(180deg)' : 'translateY(-30%)'};
`;

export const DropdownList = styled.ul`
	position: absolute;
	width: 180px;
	list-style-type: none;
	cursor: pointer;
	left: 20px;
	top: 70px;
	border-radius: 30px;
	box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
		-2px -2px 8px rgba(100, 100, 100, 0.15);
	display: ${({ show }) => (show ? 'block' : 'none')};
	z-index: 999;
	background-color: #243441;

	&:active {
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
			-2px -2px 8px rgba(100, 100, 100, 0.15),
			inset 4px 4px 8px rgba(0, 0, 0, 0.25),
			inset -2px -2px 8px rgba(100, 100, 100, 0.15);
	}
`;

export const DropdownItem = styled.li`
	position: relative;
	padding: 15px;
	transition: all 500ms ease-in-out;

	&:hover {
		background-color: #1f2b35;
	}

	&:first-child {
		border-top-left-radius: 30px;
		border-top-right-radius: 30px;
	}

	&:last-child {
		border-bottom-left-radius: 30px;
		border-bottom-right-radius: 30px;
	}
`;

export const DropdownLink = styled(Link)`
	text-decoration: none;
	color: #7c858d;

	&:hover {
		color: #ebeced;
	}
`;

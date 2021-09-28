import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

export const ButtonWrapper = styled.button<ButtonProps>`
	height: 45px;
	padding: 0 25px;
	font-weight: 500;
	display: inline-block;
	cursor: pointer;
	text-align: center;
	border-radius: 23px;
	border: none;
	box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
	${({ variant }) => {
		switch (variant) {
			case 'black':
				return css`
					color: #ffffff;
					background-color: #000000;
				`;

			case 'dark':
				return css`
					color: #ffffff;
					background-color: #2b2b2b;
				`;

			default:
				return css`
					color: #000000;
					background-color: #ffffff;
				`;
		}
	}}

	& + & {
		margin-left: 20px;
	}
`;

import styled from 'styled-components';

export const Container = styled.div`
	background: #ffffff;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	// position: fixed;
	// top: 0;
	// width: 100%;
	// margin-bottom: 300px;
`;

export const Title = styled.h3`
	font-weight: 500;
	font-size: 40px;
	color: #a87d43;
	margin: 0;
	margin-left: 40px;
	font-family: 'Sketsa Ramadhan', sans-serif;
	&::after {
		display: block;
		content: '';
		width: 30%;
		height: 4px;
		background: #a87d43;
	}
`;

export const EndFlex = styled.div`
	display: flex;
	margin-right: 40px;
	justify-content: space-between;
	width: 20%;
`;

export const ModalContainer = styled.div`
	background-color: #ffffff;
	width: 40%;
	height: 30%;
	padding: 16px;
	margin: auto;
	margin-top: 10%;
`;

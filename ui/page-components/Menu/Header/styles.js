import styled from 'styled-components';

export const Container = styled.div`
	background: #805e33;
	padding: 8px;
	display: flex;
	justify-content: space-between;
	box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
	overflow: hidden;
	// position: fixed;
	// top: 0;
	// width: 100%;
	// margin-bottom: 300px;
`;

export const Title = styled.h3`
	font-weight: 500;
	font-size: 30px;
	color: #ffffff;
	margin: 0;
	margin-left: 40px;
	font-family: 'Sketsa Ramadhan', sans-serif;
	text-shadow: 0px 0px 8px #dbc3a4;
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

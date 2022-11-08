import styled from 'styled-components';

export const Container = styled.div`
	margin: 120px;
`;

export const Title = styled.h1`
	color: #a87d43;
`;

export const AccountCard = styled.div`
	background: #ffffff;
	display: block;
	display: -ms-flexbox;
	display: flex;
`;

export const ProfileTabNav = styled.div`
	min-width: 250px;
	border-right: 1px solid #dee2e6;
`;

export const ProfileDetail = styled.div`
	padding: 1.5rem;
`;

export const Image = styled.img`
	height: 100px;
	width: 100px;
	border-radius: 100%;
	border: 5px solid #fff;
	text-align: center;
	margin-bottom: 1rem;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

export const ProfileName = styled.h4`
	text-align: center;
`;

export const Nav = styled.div`
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	padding-left: 0;
	margin-bottom: 0;
	list-style: none;
	-ms-flex-direction: column;
	flex-direction: column;
	border-radius: 0.25rem;
`;

export const NavLink = styled.a`
	display: block;
	padding: 0.5rem 1rem;
	color: #495057;
	background-color: #fff;
	border-color: #dee2e6 #dee2e6 #fff;
`;

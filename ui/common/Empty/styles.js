import styled from 'styled-components';

export const Container = styled.div`
	text-align: center;
`;

export const Title = styled.div`
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 14px;
	color: #333333;
`;

export const Description = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	color: #898d90;
`;

export const EmptyImage = styled.div`
	svg {
		width: 40%;
		height: 40%;
		path {
			fill: #bdc0c1;
		}
	}
`;

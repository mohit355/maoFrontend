import styled from 'styled-components';

export const Container = styled.div``;

export const Flex = styled.div`
	display: flex;
`;

export const EmptyContainer = styled.div`
	display: flex;
	justify-content:center;
	flex-direction:column;
	align-items: center;
	@media (max-width: 768px) {
		bottom: 0;
		height: 25%;
		overflow: auto;
	}
`;
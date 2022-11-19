import styled from 'styled-components';

export const Container = styled.div`
	box-sizing: border-box;
    display:flex;
    flex-direction:row
    width:100%
	@media (max-width: 500px) {
		font-size: 60%;
	}
	@media (min-width: 501px) and (max-width: 768px) {
		font-size: 60%;
        flex-direction:column

	}

	@media (min-width: 769px) and (max-width: 1200px) {
		font-size: 60%;

	}
`;

export const FormBox = styled.div`
	box-sizing: border-box;
    display:flex
    flex-direction:row;
    align-items:center;
    justify-content:center;
    width:60%
`;

export const DiscountPreviewDiv = styled.div`
    display:flex;
    width:40%;
    align-items: center;
    justify-content: center;
    
`;
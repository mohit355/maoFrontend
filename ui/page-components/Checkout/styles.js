import styled from 'styled-components';

export const Container = styled.div`
	margin: 120px;
`;

export const CheckoutContainer = styled.div`
	border-radius: 4px;
	padding: 28px;
	background: #ffffff;
	margin: 12px;
	width: 50%;
`;

export const AddressContainer = styled.div`
	border-radius: 4px;
	padding: 28px;
	background: #ffffff;
	width: 50%;
	margin: 12px;

`;

export const FinalCheckout = styled.div`
	border-radius: 4px;
	padding: 28px;
	background: #ffffff;
	width: 100%;
	margin: 12px;
	margin-right:0px;
	padding-right:0px;
	display: flex;
    flex-direction: column;
    align-items: flex-end;
	select {
		background: transparent;
		color: #57595c;
		font-weight: 600;
		font-size: 16px;
		padding: 4px 20px;
		height: 20%;
		border-radius: 4px;
		border: 1px solid #57595c;
	}
`;

export const Title = styled.div`
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	line-height: 14px;
	color: #3e4042;
	margin: 20px;
`;

export const SubTitle = styled.div`
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 14px;
	color: #636769;
	margin-bottom: 20px;
`;

export const Description = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	color: #898d90;
`;

export const Line = styled.div`
	border-bottom: 1px dotted #caccce;
	margin-top: 20px;
	margin-bottom: 40px;
`;

export const SubTotal = styled.div`
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	color: #4a4d4f;
`;

export const Instruction = styled.input`
	background: #f2f2f3;
	border: none;
	width: 100%;
	height: 60px;
	padding: 16px;
	font-size: 12px;
	color: #62666a;
	&::placeholder {
		color: #888c91;
	}
`;

export const ApplyCoupon = styled.div`
	text-align: center;
	margin: 40px 8px;
`;

export const ApplyCouponButton = styled.button`
	display: flex;
	border: 1px dashed #caccce;
	background: transparent;
	color: #6e7377;
	text-align: center;
	align-items: center;
	margin: auto;
	cursor: pointer;
	padding: 8px 28px;
	width: 75%;

	:hover {
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
`;

export const Text = styled.h3`
	margin-right: 40px;
`;

export const ConfirmOrderButton = styled.button`
	color: #ffffff;
	background: #b68949;
	border: none;
	padding: 12px;
	cursor: pointer;
	font-weight: 700;
	font-size: 14px;

	:disabled{
		background:gray;
		cursor:not-allowed;
	}
`;

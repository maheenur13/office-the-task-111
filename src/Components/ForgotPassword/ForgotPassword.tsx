import React, { MouseEvent, MouseEventHandler, useState } from 'react';
import styled from 'styled-components';
import { setTimeValidation } from '../../helpers/formValidation';
import { Button } from '../atoms';

const ForgotPassword = ({ props }: any) => {
	const [isSendCodeDisabled, setIsSendCodeDisabled] = props?.item1;
	const [errors, setErrors] = props?.item2;
	const [timer, setTimer] = props?.item3;
	const [isSendCode, setIsSendCode] = useState(false);
	const [phoneData, setPhoneData] = useState('');
	const [isChangeNumberDisabled , setIsChangeNumberDisabled] = useState(true);
	const defaultValue = '1234';
	const forgetPasswordHandler = (e: any) => {
		e.preventDefault();
		setIsSendCode(true);
		if(e.target.name === 'changeNumber'){
			setIsChangeNumberDisabled(false)
		}
	};
	const sendCodeVerification = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newErrors = { ...errors };
		const value = e.target.value;
		if (e.target.name === 'phoneNumber') {
			newErrors.phone = false;
			setErrors(newErrors);
			if (value.length === 11) {
				newErrors.phone = true;
				setErrors(newErrors);
				setPhoneData(value);
			} else {
				newErrors.phone = false;
				setErrors(newErrors);
			}
		}
		if (e.target.name === 'verificationCode') {
			if (value !== defaultValue) {
			}
			if (value === defaultValue) {
			}
		}	
	};
	const isButtonDisabled = errors.phone && phoneData.length !== 0;
	return (
		<form>
			<div className="my-3">
				<FormLabel>Phone Number</FormLabel>
				<div
					className="d-flex justify-content-between "
					style={{
						borderRadius: '10px',
						border: '1px solid #cbcbcb',
					}}
				>
					<FormInput
						style={{ border: 'none', width: '55%' }}
						type="number"
						onChange={sendCodeVerification}
						required
						name="phoneNumber"
						disabled={isSendCode && isChangeNumberDisabled}
					/>
				{ isSendCode &&	<button className="mr-3"
					onClick={forgetPasswordHandler} 
					name="changeNumber" style={{ border: 'none', outline: 'none', background: 'none',fontWeight:500 }}>
						Change
					</button>}
				</div>
			</div>

			{isSendCode && (
				<div
					style={{ border: '1px solid #cbcbcb', borderRadius: '10px' }}
					className="my-3 d-flex justify-content-center align-items-center"
				>
					<FormInput
						style={{ border: 'none' }}
						placeholder="Verification Code"
						name="verificationCode"
						onChange={sendCodeVerification}
						required
					/>
					<button
						className="pr-3"
						style={{
							whiteSpace: 'nowrap',
							fontWeight: 500,
							background: 'none',
							border: 'none',
						}}
						onClick={() => {
							setTimeValidation({
								item1: [isSendCodeDisabled, setIsSendCodeDisabled],
								item2: [errors, setErrors],
								item3: [timer, setTimer],
							});
						}}
						disabled={isSendCodeDisabled}
					>
						Send Again
					</button>
					{errors.isSetTimer && timer > 0 && <p className="pr-3">{`00:${timer < 10 ? `0` : ''}${timer}`}</p>}
				</div>
			)}
			<div className="mt-3">
				<Button
					style={{ borderRadius: '10px' }}
					variant="black"
					className="w-100"
					onClick={forgetPasswordHandler}
					disabled={!isButtonDisabled}
				>
					{isSendCode?`Proceed`:`Send Code`}
				</Button>
			</div>
		</form>
	);
};

const FormInput = styled.input`
	border-radius: 10px;
	border: 1px solid #cbcbcb;
	width: 100%;
	color: #2b2b2b;
	padding: 0px 17px;
	height: 43px;
	::-webkit-outer-spin-button,
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}

	::placeholder {
		color: #cbcbcb;
	}
	:focus {
		outline: none;
	}
`;
const FormLabel = styled.label`
	display: block;
	font-weight: 500;
	font-size: 0.8rem;
`;
export default ForgotPassword;

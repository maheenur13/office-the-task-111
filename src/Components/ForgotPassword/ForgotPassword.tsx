import React, { MouseEvent, MouseEventHandler, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../atoms';

const ForgotPassword = () => {
    const [isSendCode , setIsSendCode] = useState(false);
    const forgetPasswordHandler = (e:any) => {
        console.log(e.target.value)
        
    }

	return (
		<div>
			<form>
				<div className="my-3">
					<FormLabel>Phone Number</FormLabel>
					<div
						style={{
							borderRadius: '10px',
							border: '1px solid #cbcbcb',
						}}
					>
						<FormInput style={{ border: 'none', width: '55%' }} type="number" required name="phoneNumber" />
					</div>
				</div>

				<div
					style={{ border: '1px solid #cbcbcb',borderRadius: '10px'}}
					className="my-3 d-flex justify-content-center align-items-center"
				>
					<FormInput style={{ border: 'none' }} placeholder="Verification Code" />
					<p className="pr-3" style={{ whiteSpace: 'nowrap',fontWeight: 500 }}>Send Again</p>
				</div>
				<div className="mt-3">
					<Button 
                    style={{ borderRadius: '10px' }} 
                    variant="black" 
                    className="w-100"
                    onClick={forgetPasswordHandler}
                    >
						Send Code
					</Button>
				</div>
			</form>
		</div>
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

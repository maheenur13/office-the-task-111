import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms';
const SellerSignIn = (handleSignIn:any) => {

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
								<FormInput
									style={{ border: 'none', width: '55%' }}
									type="number"
									required
									name="phoneNumber"
								/>
							</div>
						</div>

						<div className="my-3">
							<FormLabel>Password</FormLabel>
							<FormInput type="password" required name="password" />
						</div>
						<p
							onClick={handleSignIn.handleSignIn}
							style={{
								textAlign: 'right',
								color: '#999999',
								cursor: 'pointer',
							}}
						>
							Forgot Password
						</p>
						<div className="mt-3">
							<Button
								style={{ borderRadius: '10px' }}
								variant="black"
								className="w-100"
								
							>
								Sign In
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
export default SellerSignIn;
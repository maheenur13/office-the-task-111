import React, { FC, FormEvent, FormEventHandler, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import { Button, Title } from '../../atoms';

const RegForm: FC = () => {
	const [oldUser, setOldUser] = useState(false);
	const [isForgetPass, setIsForgetPass] = useState(false);
	const [isCreateAccount, setCreateAccount] = useState(true);
	const [isProceed, SetIsProceed] = useState(false);
	const [isSendCode, SetIsSendCode] = useState(false);
	const [isChangePass, SetIsChangePass] = useState(false);

	const signInHandler = () => {
		setOldUser(true);
		setCreateAccount(false);
		setIsForgetPass(false);
		SetIsProceed(false);
		SetIsSendCode(false);
		SetIsChangePass(false);
	};

	const createHandler = () => {
		setOldUser(false);
		setCreateAccount(true);
		setIsForgetPass(false);
		SetIsProceed(false);
		SetIsSendCode(false);
		SetIsChangePass(false);

	};
	
	const handleForgetPass = () => {
		setOldUser(false);
		setCreateAccount(false);
		setIsForgetPass(true);
		SetIsProceed(false);
		SetIsSendCode(false);
		SetIsChangePass(false);
	};
	const sendCodeHandler = () => {
		SetIsSendCode(true);
		setOldUser(false);
		setCreateAccount(false);
		setIsForgetPass(false);
		SetIsProceed(false);
		
		SetIsChangePass(false);
	};

	const proceedHandler = () => {
		SetIsProceed(true);
		setOldUser(false);
		setCreateAccount(false);
		setIsForgetPass(false);
		SetIsSendCode(false);
		SetIsChangePass(false);
	};
	const changePassHandler = () => {
		signInHandler();
		console.log('password change successful!')
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e.target);
	}
	const handleSendCode = () => {
		sendCodeHandler();
	}
	const handleProceed = () => {
		proceedHandler();
	}
	return (
		<FormSection>
			<Title style={{ fontSize: '1.3rem' }} className="text-left" variant="black" size="md">
				Seller Registration
			</Title>
			{
			((isCreateAccount && !oldUser )||(isForgetPass || isSendCode || isProceed)) && <p onClick={signInHandler} className="my-3" style={{ cursor: 'pointer' }}>
				Already Have an account?
				<span className="text-primary">{' '}Sign In</span>
			</p>
			}

			{(oldUser && !isCreateAccount)&& <p onClick={createHandler} className="my-3" style={{ cursor: 'pointer' }}>
				New User?
				<span className="text-primary">{' '}Create An Account</span>
			</p>}
			<div>
				<form onSubmit={handleSubmit}>
					{isCreateAccount && (
						<div className="my-3">
							<FormLabel>Store Name</FormLabel>
							<FormInput />
						</div>
					)}
					{((oldUser && !isCreateAccount) || (isForgetPass)) && (
						<div className="my-3">
							<FormLabel>Phone Number</FormLabel>
							<FormInput />
						</div>
					)}
					{isCreateAccount && (
						<div className="my-3">
							<FormLabel>Account Type</FormLabel>
							<FormSelect className="px-3">
								<option selected disabled hidden>
									select one
								</option>
								<option className="my-5">Business</option>
								<option>Individual</option>
							</FormSelect>
						</div>
					)}
					{isCreateAccount && (
						<div className="my-3">
							<FormLabel>Product category</FormLabel>
							<FormSelect className="px-3">
								<option selected disabled hidden>
									select one
								</option>
								<option className="my-5">Business</option>
								<option>Individual</option>
							</FormSelect>
						</div>
					)}
					{(isCreateAccount || isSendCode ) && (
						<div className="my-3">
							<FormLabel>Phone Number</FormLabel>
							<div
								style={{
									borderRadius: '10px',
									border: '1px solid #cbcbcb',
								}}
								className="d-flex justify-content-between align-items-center px-4"
							>
								<p className="">+880</p>
								{(isCreateAccount || isSendCode) && <>
								<FormInput style={{ border: 'none' }} />
								<p>Send Code</p>
								</>}
							</div>
						</div>
					)}
					{(isCreateAccount || isSendCode) && (
						<div style={{ borderRadius: '10px'}}className="mt-3 mb-4 d-flex align-items-center border">
							<FormInput style={{border: 'none',width:'70%'}} placeholder="SMS Verification Code"  />
							{isSendCode && <h6 style={{cursor: 'pointer'}}>Send Again</h6>}
						</div>
					)}
					{((!isForgetPass && isCreateAccount) ||(isProceed || oldUser)) && (
						<div className="my-3">
							<FormLabel>{isProceed && `New`} Password</FormLabel>
							<FormInput type="password" />
						</div>
					)}
					{((!oldUser && !isForgetPass && isCreateAccount) || (isProceed)) && (
						<div className="mt-4 mb-3">
							<FormLabel>Confirm Password</FormLabel>
							<FormInput type="password" />
						</div>
					)}
					{oldUser && !isForgetPass && (
						<p
							onClick={handleForgetPass}
							style={{
								textAlign: 'right',
								color: '#999999',
								cursor: 'pointer',
							}}
						>
							Forgot Password
						</p>
					)}
					{isCreateAccount && (
						<div className="my-3 d-flex justify-content-between align-items-start">
							<img className="mr-1" src="/images/info.svg" alt="info-icon" />
							<p style={{ fontSize: '.75rem' }}>
								{' '}
								By continuing, you agree to zDrop's Conditions of Use and Privacy Policy.{' '}
							</p>
						</div>
					)}
					<div className="my-3">
						{(!isForgetPass && !isSendCode && !isProceed) && <Button style={{ borderRadius: '10px' }} type="submit" variant="black" className="w-100">
							{(((oldUser && !isForgetPass && !isCreateAccount ) && `Sign In`) ||
								((!oldUser && !isForgetPass && isCreateAccount ) && `Register`)
								) }
						</Button>}
						{
							(isForgetPass) && <Button onClick={handleSendCode}  style={{ borderRadius: '10px' }} variant="black" className="w-100">
							Send Code
						</Button>
						}
						{
							(isSendCode) && <Button onClick={handleProceed} style={{ borderRadius: '10px' }} variant="black" className="w-100">
							Proceed
						</Button>
						}
						{
							(!isSendCode && isProceed) && <Button onClick={changePassHandler}  style={{ borderRadius: '10px' }} variant="black" className="w-100">
							Change Password
						</Button>
						}
					</div>
				</form>
			</div>
		</FormSection>
	);
};

const FormSection = styled.div`
	width: 390px;
	border-radius: 25px;
	box-shadow: 0px 0px 6px #8a8a8a3d;
	border: 1px solid #ececec;
	background-color: var(--white);
	margin-left: 125px;

	padding: 24px 30px;
`;

const FormInput = styled.input`
	border-radius: 10px;
	border: 1px solid #cbcbcb;
	width: 100%;
	color: #2b2b2b;
	padding: 0px 17px;
	height: 43px;

	::placeholder {
		color: #cbcbcb;
	}
`;
const FormLabel = styled.label`
	display: block;
	font-weight: bold;
	font-size: 0.7rem;
`;

const FormSelect = styled.select`
	border-radius: 10px;
	border: 1px solid #cbcbcb;
	color: #2b2b2b;
	width: 100%;
	height: 43px;
	-moz-appearance: none; /* Firefox */
	-webkit-appearance: none; /* Safari and Chrome */
	background-image: url('/images/arrow-down.svg');
	background-repeat: no-repeat;
	background-position-x: 97%;
	background-position-y: 10px;

	:focus {
		outline: none;
	}
	option {
		:active {
			background-color: transparent !important;
		}
	}
`;

export default RegForm;

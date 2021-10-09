import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Title } from '../../atoms';
import ForgotPassword from '../../ForgotPassword/ForgotPassword';
import SellerSignIn from '../../SellerSignIn/SellerSignIn';
import RegistrationFor from '../RegistrationForm/RegistrationForm';

const RegForm: FC = () => {
	const [isOldUser, setIsOldUser] = useState(false);
	const [isForgetPass, setIsForgetPass] = useState(false);
	const [isNewUser, setNewUser] = useState(true);
	
	const [timer, setTimer] = useState<number>(60);
	const [isSendCodeDisabled, setIsSendCodeDisabled] = useState(false);

	const [errors, setErrors] = useState({
		storeName: true,
		phone: true,
		password: true,
		confirmPassword: true,
		checkStartNumber: true,
		isPassHasNum: true,
		isPassEmpty: true,
		isPassConfirmed: true,
		isInputDisable: true,
		isSetTimer: false,
		isSendCodeDisabled: false,
	});


	const signInHandler = () => {
		console.log('signInHandler')
		setIsOldUser(true);
		setNewUser(false);
		setIsForgetPass(false);
	};

	const registrationHandler = () => {
		setIsOldUser(false);
		setNewUser(true);
		setIsForgetPass(false);
	};

	//forget password handler
	const handleForgetPass = () => {
		console.log('clicked handle forget pass')
		setIsOldUser(false);
		setNewUser(false);
		setIsForgetPass(true);
	};
	return (
		<FormSection>
			<Title style={{ fontSize: '1.3rem' }} className="text-left" variant="black" size="md">
				Seller Registration
			</Title>
			{((isNewUser && !isOldUser) || isForgetPass) && (
				<p onClick={signInHandler} className="my-3" style={{ cursor: 'pointer', fontSize: '.8rem' }}>
					Already Have an account?
					<span style={{ fontSize: '.8rem' }} className="text-primary">
						{' '}
						Sign In
					</span>
				</p>
			)}
			{isOldUser && !isNewUser && (
				<p onClick={registrationHandler} className="my-3" style={{ cursor: 'pointer', fontSize: '.8rem' }}>
					New User?
					<span style={{ fontSize: '.8rem' }} className="text-primary">
						{' '}
						Create An Account
					</span>
				</p>
			)}
			<div>
				{/* reg form */}
				{isNewUser && (
					<RegistrationFor props={{
							item1: [isSendCodeDisabled, setIsSendCodeDisabled],
							item2:[errors, setErrors],
							item3:[timer, setTimer],
							
					}} />
				)}
				{/* Old user form */}
				{isOldUser && (
					<SellerSignIn handleSignIn={handleForgetPass} />
				)}
				{
				 isForgetPass && (
						<ForgotPassword props={{
							item1: [isSendCodeDisabled, setIsSendCodeDisabled],
							item2:[errors, setErrors],
							item3:[timer, setTimer]}} />
					)
				}
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
	@media only screen and (max-width: 425px) {
		width: 95%;
		padding: 24px 30px;
	}
	@media only screen and (max-width: 768px) {
		padding: 18px 25px;
	}
	@media only screen and (max-width: 1440px) {
		margin-left: 0px;
	}
`;


export default RegForm;
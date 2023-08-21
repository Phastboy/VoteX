'use client';

import { useRegister } from '@/hooks';
import { Form } from '@/components/forms';

export default function RegisterForm() {
	const {
		username,
		matric_no,
		email,
		password,
		phone_no,
		isLoading,
		onChange,
		onSubmit,
	} = useRegister();

	const config = [
		{
			labelText: 'Username',
			labelId: 'username',
			type: 'text',
			value: username,
			required: true,
            
		},
		{
			labelText: 'Student Matric Number',
			labelId: 'matric_no',
			type: 'text',
			value: matric_no,
			required: true,
		},
		{
			labelText: 'Email address',
			labelId: 'email',
			type: 'email',
			value: email,
			required: true,
		},
		{
			labelText: 'Password',
			labelId: 'password',
			type: 'password',
			value: password,
			required: true,
		},
		{
			labelText: 'Phone Number',
			labelId: 'phone_no',
			type: 'tel',
			value: phone_no,
			required: true,
		},
	];

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText='Sign up'
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}
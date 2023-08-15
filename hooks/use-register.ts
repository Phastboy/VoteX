import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useRegisterMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';

export default function useRegister() {
	const router = useRouter();
	const [register, { isLoading }] = useRegisterMutation();

	const [formData, setFormData] = useState({
		email: '',
        username: '',
		password: '',
		phone_no: '',
        matric_no:'',
        user_type:'student'

	});

	const { email, password, phone_no, matric_no, username, user_type } = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		register({ email, password, phone_no, matric_no, username, user_type })
			.unwrap()
			.then(() => {
				toast.success('Please check email to verify account');
				router.push('/auth/login');
			})
			.catch(() => {
				toast.error('Failed to register account');
			});
	};

	return {		
		email,
        username,
		password,
		phone_no,
        matric_no,
        user_type,
		isLoading,
		onChange,
		onSubmit,
	};
}
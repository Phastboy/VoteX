import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function useLogin() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setIsLoading(true);

		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/accounts/token/obtain/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});

			if (response.ok) {
				toast.success('Logged in');
				router.push('/dashboard');
			} else {
				toast.error('Failed to log in');
			}
		} catch (error) {
			console.error('Error while logging in:', error);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		email,
		password,
		isLoading,
		onChange,
		onSubmit,
	};
}

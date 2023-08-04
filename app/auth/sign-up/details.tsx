import {useState} from 'react';


export default function Details(){
	const [formData, setFormData]=useState({
		matric_no: "",
		student_email: "",
		phone_no: "",
		username: "",
		password: ""
	});
	const handleInput = (e: any) => {
		const name = e.target.name;
		const value = e.target.value;

		setFormData((prevState) => ({
		...prevState,
		[name]: value
		}));
	}

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setIsSubmitting(true);

		const formURL = e.target.action;
		const data = new FormData();
		Object.entries(formData).forEach(([key, value]) => {
		data.append(key, value);
	});

	fetch(formURL, {
		method: "POST",
		body: data,
		headers: {
			'accept': 'application/json',
		},
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
			.then(() => {
				setFormData({
					matric_no: "",
					student_email: "",
					phone_no: "",
					username: "",
					password: "",
				});
			})
				.catch((error) => {
					console.error("Error submitting form:", error);
				})
					.finally(() => {
						setIsSubmitting(false);
					});
	};
}

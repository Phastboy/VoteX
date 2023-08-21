'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@radix-ui/react-menubar';

export default function BallotCreator(): JSX.Element {
    const [formData, setFormData] = useState({
        title: '',
        short_description: '',
        description: '',
    });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const accessToken = localStorage.getItem('accessToken');
        const electionId = localStorage.getItem('electionId');
      
        try {
            const headers = {
                'Authorization': `Bearer ${accessToken}`,
                'Content-type': 'application/json'
            };
      
            const response = await fetch(`https://votex-backend.eastasia.cloudapp.azure.com/elections/${electionId}/questions`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                alert('Ballot created')
                console.log('Ballot created:', data);
            } else {
                console.error('Error creating ballot:', response.status);
            }
        } catch (error) {
            alert('Ballot creation failed')
            console.error('Error creating ballot:', error);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Create Ballot</h1>
            <form className="mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <Label className="text-lg font-semibold mb-2">Title</Label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="block w-full border rounded-md p-2 mb-2"
                        placeholder="Title"
                    />
                </div>
                <div className="mb-4">
                    <Label className="text-lg font-semibold mb-2">Short description</Label>
                    <input
                        type="text"
                        name="short_description"
                        value={formData.short_description}
                        onChange={handleChange}
                        className="block w-full border rounded-md p-2 mb-2"
                        placeholder="Short Description"
                    />
                </div>

                <div>
                    <Label className="text-lg font-semibold mb-2">Description</Label>
                    <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleDescriptionChange}
                    />
                </div>

                <Button variant="continue" className="mt-4 w-full" type="submit">
                    Create Ballot
                </Button>
            </form>
        </div>
    );
}

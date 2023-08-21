import React, { useState } from 'react';
import {Nav} from '../../nav';
import BallotCreator from './create-ballot';

function CreateBallotPage() {
  return (
    <div className='flex h-screen'>
        <div className='w-1/4'>
            <Nav />
        </div>
        <div className='w-3/4'>
            <main className="bg-gray-100 p-10">
                <div className="bg-white rounded-lg shadow-md">
                    <BallotCreator/>
                </div>
            </main>
        </div>
    </div>
);
}
export default CreateBallotPage;

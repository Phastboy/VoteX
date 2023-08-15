import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Poll from './poll';
import Vote from "./vote";

export default function Home(){
	return (
		<>
			<Head>
				<title>Your feed</title>
				<meta name='description' content='recent activities'/>
			</Head>
			<main className="text-center py-10">
			<h3 className="p-3">Good morning username</h3>
			<h3 className="px-3">recent poll</h3>
			<div className='container mx-auto px-4 md:px-12 justify-center'>
				<div className='flex flex-wrap justify-center'>
					<div className="w-full md:w-1/2 lg:w-1/3 max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<div className='justify-center text-center'>
							<h5 className="pt-5 mb-1 text-xl font-medium text-gray-900 dark:text-white">Are you a member?</h5>
						</div>
						<div className="flex justify-center mt-4 space-x-3 md:mt-6">
							<p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Yes</p>
							<p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">No</p>
        				</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<div className='justify-center text-center'>
							<h5 className="pt-5 mb-1 text-xl font-medium text-gray-900 dark:text-white">Are you a member?</h5>
						</div>
						<div className="flex justify-center mt-4 space-x-3 md:mt-6">
							<p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Yes</p>
							<p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">No</p>
        				</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<div className='justify-center text-center'>
							<h5 className="pt-5 mb-1 text-xl font-medium text-gray-900 dark:text-white">Are you a member?</h5>
						</div>
						<div className="flex justify-center mt-4 space-x-3 md:mt-6">
							<p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Yes</p>
							<p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">No</p>
        				</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<div className='justify-center text-center'>
							<h5 className="pt-5 mb-1 text-xl font-medium text-gray-900 dark:text-white">Are you a member?</h5>
						</div>
						<div className="flex justify-center mt-4 space-x-3 md:mt-6">
							<p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Yes</p>
							<p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">No</p>
        				</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<div className='justify-center text-center'>
							<h5 className="pt-5 mb-1 text-xl font-medium text-gray-900 dark:text-white">Are you a member?</h5>
						</div>
						<div className="flex justify-center mt-4 space-x-3 md:mt-6">
							<p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Yes</p>
							<p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">No</p>
        				</div>
					</div>
					{/* <Poll/> */}
				</div>
			</div>
				<h3>recent election</h3>
				<div className='container mx-auto px-4 md:px-12 justify-center'>
					<div className='flex flex-wrap justify-center'>	
						<div className="flex flex-col m-4 items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    						<p>
        						<Image className="rounded-t-lg text-center p-5" 
								src="/black.svg"
								height={200}
								width={200}
								alt="election avatar" />
    						</p>
    						<div className="p-5">
            					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SUG president election</h5>
        						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Decide your sug president for the next acedemic session.</p>
        						<p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            						Click to vote
             						<svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            							</svg>
        						</p>
    						</div>
						</div>
						<div className="flex flex-col items-center m-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    						<p>
        						<Image className="rounded-t-lg text-center p-5" 
								src="/black.svg"
								height={200}
								width={200}
								alt="election avatar" />
    						</p>
    						<div className="p-5">
            					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SUG president election</h5>
        						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Decide your sug president for the next acedemic session.</p>
        						<p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            						Click to vote
             						<svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            						</svg>
        						</p>
    						</div>
						</div>
						{/* <Vote/> */}
					</div>
				</div>
				<h3>or maybe look around</h3>
			</main>
		</>
	);
}

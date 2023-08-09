import Link from 'next/link';
import Image from 'next/image';

export default function Home(){
	return (
		<>
			<h3 className="p-3">Good morning username</h3>
			<h3 className="px-3">recent poll</h3>
			<div className='container mx-auto px-4 md:px-12 justify-center'>
				<div className='flex flex-wrap justify-center'>
					<div className="w-full md:w-1/2 lg:w-1/3 max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<div className='justify-center text-center'>
							<h5 className="pt-5 mb-1 text-xl font-medium text-gray-900 dark:text-white">Are you a member?</h5>
						</div>
						<div className="flex justify-center mt-4 space-x-3 md:mt-6">
							<Link href="/result" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Yes</Link>
							<Link href="/result" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">No</Link>
        				</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<div className='justify-center text-center'>
							<h5 className="pt-5 mb-1 text-xl font-medium text-gray-900 dark:text-white">Are you a member?</h5>
						</div>
						<div className="flex justify-center mt-4 space-x-3 md:mt-6">
							<Link href="/result" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Yes</Link>
							<Link href="/result" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">No</Link>
        				</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<div className='justify-center text-center'>
							<h5 className="pt-5 mb-1 text-xl font-medium text-gray-900 dark:text-white">Are you a member?</h5>
						</div>
						<div className="flex justify-center mt-4 space-x-3 md:mt-6">
							<Link href="/result" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Yes</Link>
							<Link href="/result" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">No</Link>
        				</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<div className='justify-center text-center'>
							<h5 className="pt-5 mb-1 text-xl font-medium text-gray-900 dark:text-white">Are you a member?</h5>
						</div>
						<div className="flex justify-center mt-4 space-x-3 md:mt-6">
							<Link href="/result" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Yes</Link>
							<Link href="/result" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">No</Link>
        				</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<div className='justify-center text-center'>
							<h5 className="pt-5 mb-1 text-xl font-medium text-gray-900 dark:text-white">Are you a member?</h5>
						</div>
						<div className="flex justify-center mt-4 space-x-3 md:mt-6">
							<Link href="/result" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Yes</Link>
							<Link href="/result" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">No</Link>
        				</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<div className='justify-center text-center'>
							<h5 className="pt-5 mb-1 text-xl font-medium text-gray-900 dark:text-white">Are you a member?</h5>
						</div>
						<div className="flex justify-center mt-4 space-x-3 md:mt-6">
							<Link href="/result" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Yes</Link>
							<Link href="/result" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">No</Link>
        				</div>
					</div>
				</div>
			</div>
			<h3>recent election</h3>
			<h3>or maybe look around</h3>
		</>
	);
}

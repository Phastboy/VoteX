import Image from "next/image";

type VoteProps = {
    title: string;
    imageSrc: string;
    onClick: () => void;
};

export default function Vote({ title, imageSrc, onClick }: VoteProps) {
    return (
        <div className="flex flex-col items-center m-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <p>
                <Image className="rounded-t-lg text-center p-5" 
                    src={imageSrc}
                    height={200}
                    width={200}
                    alt={`${title} avatar`} />
            </p>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <div className='justify-center text-center'>
					<h5 className="pt-5 mb-1 text-xl font-medium text-gray-900 dark:text-white">Are you a member?</h5>
				</div>
				<div className="flex justify-center mt-4 space-x-3 md:mt-6">
					<p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Yes</p>
					<p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">No</p>
        		</div>
            </div>
        </div>
    );
}

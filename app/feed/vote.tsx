type PollProps = {
    totalVotes: number;
    messiVotes: number;
    ronaldoVotes: number;
};

export default function Poll({ totalVotes, messiVotes, ronaldoVotes }: PollProps) {
    const calculatePercentage = (votes: number) => {
        return (votes / totalVotes) * 100;
    };

    return (
        <div className="w-full md:w-1/2 lg:w-1/3 max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="text-center">
                <h5 className="pt-5 mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Messi or Ronaldo?
                </h5>
            </div>
            <div className="flex flex-col justify-center mt-4 space-y-3 md:mt-6">
                <div className="relative px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600">
                    <div className="h-4 bg-blue-400 dark:bg-blue-500 rounded-md"></div>
                    <div className="absolute top-0 left-0 h-4 bg-blue-700 dark:bg-blue-600 rounded-md" style={{ width: `${calculatePercentage(messiVotes)}%` }}></div>
                    <div className="flex items-center justify-between mt-1">
                        <p className="block leading-6">Messi</p>
                        <p className="text-gray-600 dark:text-gray-400">{messiVotes} votes</p>
                    </div>
                </div>
                <div className="relative px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
                    <div className="absolute top-0 left-0 h-4 bg-gray-500 dark:bg-gray-600 rounded-md" style={{ width: `${calculatePercentage(ronaldoVotes)}%` }}></div>
                    <div className="flex items-center justify-between mt-1">
                        <p className="block leading-6">Ronaldo</p>
                        <p className="text-gray-600 dark:text-gray-400">{ronaldoVotes} votes</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

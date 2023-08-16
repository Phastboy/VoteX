export default function LauchElection(){
    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Lauch Election</h1>
            <div className="mb-4">
                <p className="text-lg font-semibold mb-2">Election Title</p>
                <p className="text-lg font-semibold mb-2">Election Description</p>
                <p className="text-lg font-semibold mb-2">Election Start Date</p>
                <p className="text-lg font-semibold mb-2">Election End Date</p>
                <p className="text-lg font-semibold mb-2">Email enabled?</p>
            </div>
        </div>
    );
}
import Image from 'next/image'

export default function Welcome() {
  return (
	<main>
		<div className="text-center py-10">
			<h1>Welcome to VoteX!</h1>
			<p>Cast yor vote, create elections, and share your opinions through polls.</p>
			<div className="flex flex-col md:flex-row p-10 justify-center items-center space-y-5 md:space-x-20 md:space-y-0">
				<button className="btn btn-green">Create election</button>
				<button className="btn btn-green">Create poll</button>
			</div>
		</div>
	</main>
  )
}

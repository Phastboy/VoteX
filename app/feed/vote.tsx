import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type VoteProps = {
    title: string;
    description: string;
    imageSrc: string;
    onClick: () => void;
};

export default function Vote({ title, description, imageSrc, onClick }: VoteProps) {
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
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
                <Button
                    variant="continue"
                    onClick={onClick}
                >
                    Click to vote
                    <ArrowRight/>
                </Button>
            </div>
        </div>
    );
}

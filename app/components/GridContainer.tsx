import { twMerge } from "tailwind-merge";

type TypeChildren = {
    children: React.ReactNode,
    className?: string
}

export default function GridContainer({ children, className}: TypeChildren) {
    return (
        <div className={twMerge('w-full px-3 mx-auto max-w-[1240px]', className)}>
            {children}
        </div>
    );
}
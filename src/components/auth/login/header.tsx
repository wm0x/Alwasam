/* eslint-disable @next/next/no-img-element */
interface HeaderProps{
    label: string;
}

export const Header = ({
    label,
}: HeaderProps ) =>{
    return(
        <div className=" flex w-full flex-col gap-y-4 items-center justify-center text-white">
            <h1 className="text-xl font-semibold">
                {label}
            </h1>
            <div className="h-20 w-16">
                <img src="/logo-alwasam.png" alt="" />
            </div>
        </div>
    )
}
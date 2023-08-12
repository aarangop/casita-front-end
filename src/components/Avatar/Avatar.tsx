import {AvatarImage} from "@/components/Avatar/AvatarImage";

export interface AvatarProps {
    fullName: string
    width: number
    rounded?: boolean
}

export function Avatar(props: AvatarProps) {
    return <div className="rounded-full overflow-hidden min-w-fit min-h-fit">
        <AvatarImage {...props}/>
    </div>
}
import { AvatarImage } from "@/components/Avatar/AvatarImage";
import { UserProfile } from "@auth0/nextjs-auth0/client";

export interface AvatarProps {
  user: UserProfile;
  width: number;
  showName?: boolean;
  rounded?: boolean;
}

export function Avatar({
  showName = true,
  rounded = true,
  user,
  ...rest
}: AvatarProps) {
  return (
    user && (
      <div className="flex flex-row space-x-2 items-center px-4 hover:cursor-pointer">
        <h2 className="font-semibold">{user.nickname}</h2>
        <div className="transition-all flex flex-row rounded-full border-2 border-dark-3 hover:border-light-2 overflow-hidden min-w-fit min-h-fit">
          <AvatarImage user={user} {...rest} />
        </div>
      </div>
    )
  );
}

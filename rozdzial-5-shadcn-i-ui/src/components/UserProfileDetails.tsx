import { User } from "@/src/types/User";
import Image from "next/image";
import PizzaIcon from "@/src/components/PizzaIcon";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
} from "@/src/components/ui/card";

interface UserProfileDetailsProps {
  user: User;
}

export function UserProfileDetails({ user }: UserProfileDetailsProps) {
  const { name, role, likesPizza, avatarUrl, description } = user;

  return (
    <Card className="@container relative max-w-full h-full min-h-64 gap-0 py-0 rounded-md overflow-hidden">
          <div className="relative w-full h-32 @lg:h-48 rounded-inherit shrink-0">
            <div className="absolute inset-0 z-1 bg-blue-300" />

            <div className="rounded-full size-16 @lg:size-24 absolute bg-white z-2 bottom-0 left-4 translate-y-1/2 border overflow-hidden shadow-md">
              <Image src={avatarUrl} alt="avatar" className="w-full h-full object-cover" fill sizes="(min-width: 1024px) 96px, 64px" loading="eager" />
            </div>
          </div>

          <CardHeader className="px-4 pt-12 @lg:pt-16">
            {likesPizza && (
              <CardAction className="size-10 grid place-items-center rounded-full">
                <PizzaIcon />
              </CardAction>
            )}

            <CardTitle className="text-xl @md:text-2xl">{name}</CardTitle>
            <CardDescription>{role}</CardDescription>
          </CardHeader>

          <CardContent className="px-4 pb-4 mt-2 text-muted-foreground @lg:max-w-md">
            {description}
          </CardContent>
        </Card>
    
  )
}


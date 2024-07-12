import { MenuItemFollowCompTypes } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

export default function ClientOnly({ user }: MenuItemFollowCompTypes) {
  return (
    <>
      <Link
        href={`/profile/${user?.id}`}
        className="flex items-center hover:bg-gray-100 rounded-md w-full py-1.5 px-2"
      >
        <Image
          src={user?.image}
          alt=""
          width={35}
          height={35}
          className="rounded-full lg:mx-0 mx-auto"
        />
      </Link>
    </>
  );
}

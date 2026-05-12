import { useState } from "react";
import { cn } from "@/lib/utils";
interface ProfileCardProps {
  name: string;
  role: string;
}
export default function ProfileCard({ name, role }: ProfileCardProps) {
  const [following, setFollowing] = useState(false);
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl shadow p-8 w-full max-w-md">
      <img
        src="https://i.pravatar.cc/150" 
        alt="DefaultAvatar" 
        className="w-24 h-24 rounded-full object-cover"
      />
      <div className="flex flex-col items-center md:items-start gap-2 flex-1">
        <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-600">{role}</p>
        <button
          onClick={() => setFollowing((prev) => !prev)}
          className={cn(
            "mt-2 px-5 py-2 rounded-full text-sm font-medium transition-colors",
            following
              ? "bg-fuchsia-100 text-fuchsia-600" 
              : "bg-blue-600 text-white hover:bg-blue-700" 
          )}
        >
          {following ? "Following" : "Follow"} 
        </button>
      </div>
    </div>
  );
}
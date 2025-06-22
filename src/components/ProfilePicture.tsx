"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ProfilePicture = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const githubUsername = "rastuak"; // Ganti dengan username kamu

  useEffect(() => {
    const fetchGitHubAvatar = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${githubUsername}`
        );
        const data = await res.json();
        console.log(data);
        setAvatarUrl(data.avatar_url);
      } catch (err) {
        console.error("Failed to fetch GitHub avatar:", err);
      }
    };

    fetchGitHubAvatar();
  }, []);

  if (!avatarUrl) {
    return (
      <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gray-200 rounded-full mx-auto mb-6 animate-pulse" />
    );
  }

  return (
    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 glass-effect rounded-full mx-auto mb-6 overflow-hidden relative">
      <Image
        src={avatarUrl}
        alt="GitHub Profile Picture"
        fill
        className="object-cover rounded-full"
        sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
      />
    </div>
  );
};

export default ProfilePicture;

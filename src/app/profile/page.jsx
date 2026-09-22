"use client";

import { useState } from "react";
import { Avatar } from "@heroui/react";
import { FaUser } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");

  const handleSave = async (e) => {
    e.preventDefault();

    await authClient.updateUser({
      name,
      image,
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0F172A] dark:text-white">
            Shape your profile.
          </h1>

          <p className="mt-2 text-slate-500">
            Keep your IdeaVault profile up to date.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Profile Preview */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-[#2563EB]">
                <FaUser />
              </div>

              <div>
                <h2 className="font-semibold text-[#0F172A] dark:text-white">
                  Your Identity
                </h2>

                <p className="text-sm text-slate-500">
                  This is how others see you.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 text-center dark:bg-slate-800">
              <Avatar className="mx-auto mb-4 h-24 w-24">
                <Avatar.Image
                  src={user?.image || ""}
                  alt={user?.name || "User"}
                />

                <Avatar.Fallback>
                  {user?.name?.charAt(0) || "U"}
                </Avatar.Fallback>
              </Avatar>

              <p className="mb-2 text-sm font-medium text-[#4F46E5]">
                Profile Preview
              </p>

              <h3 className="text-xl font-bold text-[#0F172A] dark:text-white">
                {user?.name || "Your Name"}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {user?.email}
              </p>
            </div>
          </div>

          {/* Edit Profile */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-6 text-xl font-bold text-[#0F172A] dark:text-white">
              Edit Profile
            </h2>

            <form onSubmit={handleSave} className="space-y-5">
              {/* Display Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Display Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#2563EB] dark:border-slate-700 dark:bg-slate-800"
                />
              </div>

              {/* Avatar URL */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Avatar URL
                </label>

                <input
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://example.com/avatar.jpg"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#2563EB] dark:border-slate-700 dark:bg-slate-800"
                />
              </div>

              {/* Account Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Account Email
                </label>

                <input
                  type="email"
                  value={user?.email || ""}
                  disabled
                  className="w-full cursor-not-allowed rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-500 dark:border-slate-700 dark:bg-slate-800"
                />
              </div>

              {/* Save Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#2563EB] px-5 py-3 font-semibold text-white transition hover:bg-[#1D4ED8]"
              >
                Save Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
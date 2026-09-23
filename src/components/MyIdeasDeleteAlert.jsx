"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

export function MyIdeasDeleteAlert({ id }) {
  const handleDelete = async () => {
    const { data } = await authClient.token();
    const token = data?.token;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();

     if (res.ok) {
    toast.success("Idea deleted successfully!");
    window.location.reload();
  } else {
    toast.error(data.message || "Failed to delete idea!");
  }
    window.location.reload();
  };

  return (
    <AlertDialog>
      <AlertDialog.Trigger>
       <button
  type="button"
  className="group flex h-10 items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 font-medium text-red-600 transition-all hover:border-red-300 hover:bg-red-600 hover:text-white dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white"
>
  <FaTrash
    size={17}
    className="transition-transform duration-200 group-hover:scale-110"
  />
  Delete
</button>
      </AlertDialog.Trigger>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>
                Delete idea permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                Are you sure you want to delete this idea? This action cannot be
                undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Idea
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}

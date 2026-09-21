"use client";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  TextArea,
  TextField,
} from "@heroui/react";

import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { IoClose } from "react-icons/io5";

export default function EditMyIdeaForm({ idea }) {
  const { _id, title, shortDescription, detailedDescription } = idea;

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const { data } = await authClient.token();

    const token = data?.token;

    const formData = new FormData(form);

    const updateData = {
      title: formData.get("title"),
      shortDescription: formData.get("shortDescription"),
      detailedDescription: formData.get("detailedDescription"),
    };

    const res = await fetch(`http://localhost:8080/my-idea/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updateData),
    });

    const result = await res.json();

    if (!res.ok) {
      toast.error(result.message || "Failed to update idea");
      return;
    }

    toast.success("Idea updated successfully");
  };

  return (
    <Modal>
      {/* Edit Button */}
<Button
  className="group flex h-10 items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 px-3 font-medium text-indigo-600 transition-all hover:border-indigo-300 hover:bg-indigo-600 hover:text-white dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-400 dark:hover:bg-indigo-600 dark:hover:text-white"
>
  <BiEdit
    size={17}
    className="transition-transform duration-200 group-hover:scale-110"
  />
  Edit
</Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="w-full max-w-xl rounded-2xl">
            {/* Close */}
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header className="px-6 pt-5">
              <Modal.Heading className="text-xl font-bold">
                Edit Idea
              </Modal.Heading>
            </Modal.Header>

            {/* Form */}
            <form onSubmit={onSubmit}>
              <Modal.Body className="px-6 py-4">
                <div className="space-y-4">
                  {/* Idea Title */}
                  <TextField isRequired>
                    <Label className="mb-1.5 block font-medium">
                      Idea Title
                    </Label>

                    <Input
                      name="title"
                      defaultValue={title}
                      placeholder="Enter your idea title"
                      className="h-11 w-full rounded-lg border border-gray-400 px-3"
                    />

                    <FieldError />
                  </TextField>

                  {/* Short Description */}
                  <TextField isRequired>
                    <Label className="mb-1.5 block font-medium">
                      Short Description
                    </Label>

                    <TextArea
                      name="shortDescription"
                      defaultValue={shortDescription}
                      placeholder="Write a short description"
                      className="min-h-14 w-full rounded-lg border border-gray-400 px-3 py-3"
                    />

                    <FieldError />
                  </TextField>

                  {/* Detailed Description */}
                  <TextField isRequired>
                    <Label className="mb-1.5 block font-medium">
                      Detailed Description
                    </Label>

                    <TextArea
                      name="detailedDescription"
                      defaultValue={detailedDescription}
                      placeholder="Explain your idea in detail"
                      className="min-h-24 w-full rounded-lg border border-gray-400 px-3 py-3"
                    />

                    <FieldError />
                  </TextField>
                </div>
              </Modal.Body>

              {/* Footer */}
              <Modal.Footer className="flex gap-3 px-6 pb-5">
                {/* Save */}
                <Button
                  type="submit"
                  className="flex-1 rounded-lg bg-indigo-600 font-semibold text-white hover:bg-indigo-700"
                >
                  Save
                </Button>

                {/* Cancel */}
                <Modal.CloseTrigger className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200">
                  <IoClose size={22} />
                </Modal.CloseTrigger>
              </Modal.Footer>
            </form>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

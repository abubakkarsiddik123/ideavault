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
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

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
        className="
          flex items-center gap-2
          rounded-lg
          bg-[#2563EB]
          px-4 py-2
          font-semibold
          text-white
          transition
          hover:bg-[#1D4ED8]
        "
      >
        <BiEdit size={17} />
        Edit
      </Button>

      {/* Modal Backdrop */}
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog
            className="
              w-full
              max-w-xl
              rounded-2xl
              bg-white
              dark:bg-gray-900
            "
          >
            {/* Close Button */}
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header className="px-6 pt-5">
              <Modal.Heading
                className="
                  text-xl
                  font-bold
                  text-[#0F172A]
                  dark:text-white
                "
              >
                Edit Idea
              </Modal.Heading>
            </Modal.Header>

            {/* Form */}
            <form onSubmit={onSubmit}>
              <Modal.Body className="px-6 py-4">
                <div className="space-y-4">
                  {/* Idea Title */}
                  <TextField name="title" defaultValue={title || ""} isRequired>
                    <Label
                      className="
                        mb-1.5
                        block
                        font-medium
                        text-gray-700
                        dark:text-gray-200
                      "
                    >
                      Idea Title
                    </Label>

                    <Input
                      placeholder="Enter your idea title"
                      className="
                        h-11
                        w-full
                        rounded-lg
                        border
                        border-gray-400
                        px-3
                        dark:border-gray-600
                      "
                    />

                    <FieldError />
                  </TextField>

                  {/* Short Description */}
                  <TextField
                    name="shortDescription"
                    defaultValue={shortDescription || ""}
                    isRequired
                  >
                    <Label
                      className="
                        mb-1.5
                        block
                        font-medium
                        text-gray-700
                        dark:text-gray-200
                      "
                    >
                      Short Description
                    </Label>

                    <TextArea
                      placeholder="Write a short description"
                      className="
                        min-h-14
                        w-full
                        rounded-lg
                        border
                        border-gray-400
                        px-3
                        py-3
                        dark:border-gray-600
                      "
                    />

                    <FieldError />
                  </TextField>

                  {/* Detailed Description */}
                  <TextField
                    name="detailedDescription"
                    defaultValue={detailedDescription || ""}
                    isRequired
                  >
                    <Label
                      className="
                        mb-1.5
                        block
                        font-medium
                        text-gray-700
                        dark:text-gray-200
                      "
                    >
                      Detailed Description
                    </Label>

                    <TextArea
                      placeholder="Explain your idea in detail"
                      className="
                        min-h-24
                        w-full
                        rounded-lg
                        border
                        border-gray-400
                        px-3
                        py-3
                        dark:border-gray-600
                      "
                    />

                    <FieldError />
                  </TextField>
                </div>
              </Modal.Body>

              {/* Footer */}
              <Modal.Footer
                className="
                  flex
                  gap-3
                  px-6
                  pb-5
                "
              >
                {/* Save Button */}
                <Button
                  type="submit"
                  className="
                    flex-1
                    rounded-lg
                    bg-[#2563EB]
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#1D4ED8]
                  "
                >
                  Save Changes
                </Button>

                {/* Close Button */}
                <Modal.CloseTrigger
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    bg-gray-200
                    text-gray-700
                    transition
                    hover:bg-gray-300
                    dark:bg-gray-700
                    dark:text-gray-200
                    dark:hover:bg-gray-600
                  "
                >
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

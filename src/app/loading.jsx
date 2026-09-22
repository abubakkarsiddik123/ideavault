import { Spinner } from "@heroui/react";

const Loading = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-3">
      <Spinner size="lg" color="primary" />
      <p className="text-sm font-medium text-[#2563EB]">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
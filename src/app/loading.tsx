"use client";
import { TailSpin } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex justify-center mt-20">
      <TailSpin
        height="80"
        width="80"
        color="#004491"
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
      />
    </div>
  );
}

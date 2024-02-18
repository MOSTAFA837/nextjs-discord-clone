"use client";

import { Plus } from "lucide-react";
import React from "react";
import ActionTooltip from "../action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

export default function NavAction() {
  const { open } = useModal();

  return (
    <div>
      <ActionTooltip side="left" align="center" label="Add a server">
        <button
          className="group flex items-center"
          onClick={() => open("createServer")}
        >
          <div className="flex items-center justify-center mx-3 h-[48px] w-[48px] rounded-[50%] group-hover:rounded-[16px] transition-all overflow-hidden bg-neutral-200 dark:bg-neutral-700 group-hover:bg-emerald-500">
            <Plus
              className=" group-hover:text-white transition text-emerald-500"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
}

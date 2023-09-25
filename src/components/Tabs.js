import React, { useContext } from "react";
import { todosContext } from "../App";

const Tabs = () => {
  const { tabId, setTabId } = useContext(todosContext);
  return (
    <div class="flex justify-center mt-8">
      <div class="border-b border-gray-200 dark:border-gray-700">
        <nav class="-mb-0.5 flex justify-center space-x-6">
          <button
            type="button"
            onClick={() => setTabId(1)}
            class={`py-4 px-1 inline-flex items-center gap-2 border-b-[3px] ${
              tabId === 1 ? "border-red-500" : "border-transparent"
            } text-sm whitespace-nowrap text-black hover:text-blue-600`}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setTabId(2)}
            class={`py-4 px-1 inline-flex items-center gap-2 border-b-[3px] ${
              tabId === 2 ? "border-red-500" : "border-transparent"
            } text-sm whitespace-nowrap text-black hover:text-blue-600`}
          >
            Completed
          </button>
          <button
            type="button"
            onClick={() => setTabId(3)}
            class={`py-4 px-1 inline-flex items-center gap-2 border-b-[3px] ${
              tabId === 3 ? "border-red-500" : "border-transparent"
            } text-sm whitespace-nowrap text-black hover:text-blue-600`}
          >
            Uncompleted
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Tabs;

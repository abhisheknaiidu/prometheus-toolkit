import React from "react";
import yaml from "js-yaml";
import * as Dialog from "@radix-ui/react-dialog";
import CodeSnippet from "./CodeSnippet";
import { Spinner } from "./Spinner";
import { Subcategory } from "@/type";

const Modal = ({ subcategory }: { subcategory: Subcategory }) => {
  const [subcategoryRules, setSubcategoryRules] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const handleModalClick = (url: string) => {
    setLoading(true);
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const jsonData: any = yaml.load(data);
        setSubcategoryRules(jsonData?.groups?.[0]?.rules);
        setLoading(false);
        console.log("jsonData", jsonData?.groups?.[0]);
      });
  };

  const addSpacesBeforeCapitals = (text: string) => {
    return text.replace(/([A-Z])/g, " $1").trim();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="bg-white border border-[#E2E8F0] text-[#475569] px-4 py-2 rounded absolute bottom-4 pointer-events-auto cursor-pointer w-[calc(100%-32px)]"
          onClick={() => handleModalClick(subcategory.fetchUrl)}
        >
          View Alert Rules
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        {loading ? (
          <Dialog.Content>
            <Dialog.Description>
              <div
                className={"p-5 space-y-2 bold-18 flex flex-col items-center"}
              >
                <Spinner size="md" />
              </div>
            </Dialog.Description>
          </Dialog.Content>
        ) : (
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] overflow-auto max-h-[85vh] w-[90vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-2 md:p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Description className="text-mauve11 mb-5 text-[15px] leading-normal">
              <div className="mx-auto p-2 md:p-6 pt-0">
                <div className="bg-white p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={subcategory.icon}
                      alt="Icon"
                      className="mr-2 w-6 h-6"
                    />
                    <span className="text-[16px] text-[#475569] leading-6 tracking-[-0.18px] font-medium ">
                      {subcategory?.text}
                    </span>
                    <span className="ml-2 bg-[#F1F5F9] text-[#94A3B8] text-[10px] font-bold px-1 py-1 leading-4 rounded-lg uppercase">
                      {subcategoryRules?.length} rules
                    </span>
                  </div>
                  <Dialog.Close asChild>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </Dialog.Close>
                </div>
                <div className="flex-grow border-t border-gray-200 -mx-11 mb-6"></div>

                <div className="space-y-6">
                  {subcategoryRules.map((rule: any, index: number) => (
                    <div key={index} className="p-6 pt-1 bg-white">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-[#F1F5F9] rounded-full text-[12px] font-bold leading-4 text-[#64748B]">
                          {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                        </div>
                        <div className="ml-4">
                          <h2 className="text-[14px] leading-[20px] font-semibold mb-1">
                            {addSpacesBeforeCapitals(rule.alert)}
                          </h2>
                          <p className="text-[12px] leading-4 text[#64748B]">
                            {rule.annotations.description?.split("\n")[0]}
                          </p>
                        </div>
                      </div>

                      <CodeSnippet rule={rule} key={index} />
                    </div>
                  ))}
                </div>
              </div>{" "}
            </Dialog.Description>
          </Dialog.Content>
        )}
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;

import { Rules } from "@/type";
import React from "react";
import yaml from "js-yaml";

const CodeSnippet = ({ rule }: { rule: Rules }) => {
  const handleCopy = async () => {
    try {
      const yamlString = yaml.dump(rule);

      console.log(yamlString);
      await navigator.clipboard.writeText(yamlString);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div className="relative">
      <figure className="bg-[#F8FAFC]">
        <pre className="p-3 overflow-auto text-[0.9rem] leading-[1.45] rounded-[0.3rem]">
          <code className="language-yaml" data-lang="yaml">
            <div className="code-block">
              - <span className="key">alert</span>: {rule.alert}
              <br />
              &nbsp;&nbsp;<span className="key">expr</span>: {rule.expr}
              <br />
              &nbsp;&nbsp;<span className="key">for</span>: {rule.for}
              <br />
              &nbsp;&nbsp;<span className="key">labels</span>:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="key">severity</span>
              :&nbsp;
              {rule?.labels?.severity}
              <br />
              &nbsp;&nbsp;<span className="key">annotations</span>:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="key">severity</span>
              :&nbsp;
              {rule?.annotations?.description}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="key">summary</span>
              :&nbsp;
              {rule?.annotations?.summary}
            </div>
          </code>
        </pre>
      </figure>
      <button
        className="flex items-center copy-button absolute top-0 right-0"
        onClick={handleCopy}
      >
        <img src="/icons/copy.png" alt="Copy" className="w-3 h-3 mr-1" />
        COPY
      </button>
    </div>
  );
};

export default CodeSnippet;

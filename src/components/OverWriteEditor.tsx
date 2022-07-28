import React, { KeyboardEvent } from "react";

const TEXTAREA_HEIGHT = "500px";
const TEXTAREA_WIDTH = "600px";

interface OverWriteEditorProps {
  textToCopy: string;
}

export default function OverWriteEditor({ textToCopy }: OverWriteEditorProps) {
  const textareaRef = React.useRef<null | HTMLTextAreaElement>(null);
  const overlayRef = React.useRef<null | HTMLTextAreaElement>(null);

  // To allow the user to scroll the overlay, prefill the textarea with empty
  // lines.
  const emptyLines = textToCopy.split("\n").map(() => "");
  const emptyValue = emptyLines.join("\n");

  const onKeyDown = (event: KeyboardEvent) => {
    if (textareaRef.current === null) return;

    // Prevent tab key from causing focus to leave the textarea.
    if (event.key === "Tab") {
      textareaRef.current.value += "    ";
      event.preventDefault();
    }
  };

  const onScroll = () => {
    if (textareaRef.current === null || overlayRef.current === null) return;

    // Sync user-controlled textarea and overlay textarea scrollTop.
    const scrollTop = textareaRef.current.scrollTop;
    overlayRef.current.scrollTop = scrollTop;
  };

  return (
    <div
      className="code b"
      style={{
        fontSize: "1.1rem",
      }}
    >
      <textarea
        ref={overlayRef}
        className="absolute w-100 ma0"
        defaultValue={textToCopy}
        style={{
          pointerEvents: "none",
          overflow: "hidden",
          resize: "none",
          opacity: 0.2,
          height: TEXTAREA_HEIGHT,
          width: TEXTAREA_WIDTH,
        }}
      ></textarea>
      <textarea
        ref={textareaRef}
        className="w-100"
        onKeyDown={onKeyDown}
        onScroll={onScroll}
        defaultValue={emptyValue}
        style={{
          resize: "none",
          height: TEXTAREA_HEIGHT,
          width: TEXTAREA_WIDTH,
        }}
      ></textarea>
    </div>
  );
}

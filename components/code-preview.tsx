"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CODE_EXAMPLES } from "@/lib/code-examples";
import { isValidColor, normalizeColor } from "@/lib/color-utils";
import type { TokenColor, VSCodeTheme } from "@/types/theme";

interface CodePreviewProps {
  theme: VSCodeTheme;
}

export function CodePreview({ theme }: CodePreviewProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("typescript");
  const currentExample =
    CODE_EXAMPLES[selectedLanguage as keyof typeof CODE_EXAMPLES];

  const getColor = (scope: string) => {
    const token = theme.tokenColors.find((t: TokenColor) =>
      t.scope.some((s: string) => s.includes(scope)),
    );
    const color =
      token?.settings.foreground || theme.colors["editor.foreground"];
    return isValidColor(color) ? normalizeColor(color) : "#d4d4d4";
  };

  const highlightLine = (line: string): string => {
    // First escape HTML special characters
    let result = line
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Use a placeholder system to prevent re-processing
    const placeholders: string[] = [];
    let placeholderIndex = 0;

    const addPlaceholder = (content: string): string => {
      const placeholder = `__PLACEHOLDER_${placeholderIndex}__`;
      placeholders[placeholderIndex] = content;
      placeholderIndex++;
      return placeholder;
    };

    // Process patterns in order, replacing matches with placeholders
    const patterns = [
      // Strings first (highest priority)
      { regex: /(['"`])((?:\\.|(?!\1).)*?)\1/g, color: getColor("string") },
      // Comments
      { regex: /\/\/.*/g, color: getColor("comment"), italic: true },
      // Keywords
      {
        regex:
          /\b(import|export|from|const|let|var|function|return|if|else|interface|type|class|async|await|try|catch|finally|default|package|public|private|protected|static|void|int|string|bool|struct|func|impl|use|fn|mut|pub|namespace|using|def|end|do|require|module)\b/g,
        color: getColor("keyword"),
      },
      // Numbers
      { regex: /\b(\d+)\b/g, color: getColor("constant.numeric") },
      // React hooks
      {
        regex: /\b(useState|useEffect|useCallback|useMemo|useRef)\b/g,
        color: getColor("entity.name.function"),
      },
    ];

    patterns.forEach(({ regex, color, italic }) => {
      result = result.replace(regex, (match) => {
        const style = italic
          ? `color: ${color}; font-style: italic;`
          : `color: ${color}`;
        const span = `<span style="${style}">${match}</span>`;
        return addPlaceholder(span);
      });
    });

    // Replace all placeholders with actual content
    placeholders.forEach((content, index) => {
      result = result.replace(`__PLACEHOLDER_${index}__`, content);
    });

    return result;
  };

  const lines = currentExample.code.split("\n");

  const editorBg = normalizeColor(
    theme.colors["editor.background"] || "#1e1e1e",
  );
  const editorFg = normalizeColor(
    theme.colors["editor.foreground"] || "#d4d4d4",
  );
  const titleBarBg = normalizeColor(
    theme.colors["titleBar.activeBackground"] || "#1e1e1e",
  );
  const titleBarFg = normalizeColor(
    theme.colors["titleBar.activeForeground"] || "#cccccc",
  );
  const lineNumberBg = normalizeColor(
    theme.colors["editorLineNumber.background"] || "transparent",
  );
  const lineNumberFg = normalizeColor(
    theme.colors["editorLineNumber.foreground"] || "#858585",
  );
  const statusBarBg = normalizeColor(
    theme.colors["statusBar.background"] || "#007acc",
  );
  const statusBarFg = normalizeColor(
    theme.colors["statusBar.foreground"] || "#ffffff",
  );

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden border border-border">
      <div
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{
          backgroundColor: titleBarBg,
          color: titleBarFg,
        }}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm ml-2">
            example.{currentExample.extension}
          </span>
        </div>

        <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
          <SelectTrigger className="w-[180px] h-7 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="typescript">TypeScript React</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="java">Java</SelectItem>
            <SelectItem value="go">Go</SelectItem>
            <SelectItem value="rust">Rust</SelectItem>
            <SelectItem value="php">PHP</SelectItem>
            <SelectItem value="ruby">Ruby</SelectItem>
            <SelectItem value="csharp">C#</SelectItem>
            <SelectItem value="swift">Swift</SelectItem>
            <SelectItem value="kotlin">Kotlin</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div
        className="flex-1 overflow-auto font-mono text-sm"
        style={{
          backgroundColor: editorBg,
          color: editorFg,
        }}
      >
        <div className="flex">
          <div
            className="select-none px-4 py-4 text-right"
            style={{
              backgroundColor: lineNumberBg,
              color: lineNumberFg,
            }}
          >
            {lines.map((_, i) => (
              <div key={i} className="leading-6">
                {i + 1}
              </div>
            ))}
          </div>

          <div className="flex-1 px-4 py-4">
            {lines.map((line, i) => (
              <div
                key={i}
                className="leading-6 whitespace-pre"
                dangerouslySetInnerHTML={{
                  __html: highlightLine(line),
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="flex items-center justify-between px-4 py-1 text-xs border-t"
        style={{
          backgroundColor: statusBarBg,
          color: statusBarFg,
        }}
      >
        <div className="flex gap-4">
          <span>{currentExample.name}</span>
          <span>UTF-8</span>
          <span>LF</span>
        </div>
        <div>
          <span>Ln 1, Col 1</span>
        </div>
      </div>
    </div>
  );
}

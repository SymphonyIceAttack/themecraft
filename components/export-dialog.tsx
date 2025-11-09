"use client";

import {
  Box,
  Code2,
  Copy,
  Download,
  FileCode,
  Terminal,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { convertTheme, type EditorType } from "@/lib/theme-converters";
import type { VSCodeTheme } from "@/types/theme";

interface ExportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  theme: VSCodeTheme;
}

const EDITOR_OPTIONS = [
  {
    value: "vscode",
    label: "VSCode",
    description: "Visual Studio Code",
    icon: Code2,
    color: "text-blue-500",
  },
  {
    value: "cursor",
    label: "Cursor",
    description: "AI-Powered Editor",
    icon: Zap,
    color: "text-purple-500",
  },
  {
    value: "zed",
    label: "Zed",
    description: "High-Performance Editor",
    icon: Box,
    color: "text-green-500",
  },
  {
    value: "neovim",
    label: "Neovim",
    description: "Hyperextensible Vim",
    icon: Terminal,
    color: "text-emerald-500",
  },
  {
    value: "helix",
    label: "Helix",
    description: "Modal Editor",
    icon: FileCode,
    color: "text-orange-500",
  },
] as const;

export function ExportDialog({ open, onOpenChange, theme }: ExportDialogProps) {
  const [selectedEditor, setSelectedEditor] = useState<EditorType>("vscode");
  const exportFormat = convertTheme(theme, selectedEditor);
  const themeContent = exportFormat.content;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(themeContent);
    toast.success("Copied!", {
      description: `${EDITOR_OPTIONS.find((e) => e.value === selectedEditor)?.label} theme copied to clipboard`,
    });
  };

  const downloadFile = () => {
    const blob = new Blob([themeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${exportFormat.filename}.${exportFormat.extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Downloaded!", {
      description: `Theme file downloaded as ${exportFormat.filename}.${exportFormat.extension}`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-foreground">Export Theme</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Choose your editor and export the theme configuration
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-3">
            <div className="text-sm font-semibold text-foreground">
              Target Editor
            </div>
            <div className="grid grid-cols-5 gap-2">
              {EDITOR_OPTIONS.map((option) => {
                const Icon = option.icon;
                const isSelected = selectedEditor === option.value;
                return (
                  <button
                    type="button"
                    key={option.value}
                    onClick={() =>
                      setSelectedEditor(option.value as EditorType)
                    }
                    className={`
                      relative flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all duration-200
                      ${
                        isSelected
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-border bg-card hover:border-primary/50 hover:bg-accent/50"
                      }
                    `}
                  >
                    <Icon
                      className={`w-6 h-6 ${isSelected ? option.color : "text-muted-foreground"}`}
                    />
                    <div className="text-center">
                      <div
                        className={`text-xs font-semibold ${isSelected ? "text-foreground" : "text-muted-foreground"}`}
                      >
                        {option.label}
                      </div>
                    </div>
                    {isSelected && (
                      <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary" />
                    )}
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              {
                EDITOR_OPTIONS.find((e) => e.value === selectedEditor)
                  ?.description
              }
            </p>
          </div>
          {/* </CHANGE> */}

          <Textarea
            value={themeContent}
            readOnly
            className="font-mono text-sm h-[400px] resize-none"
          />

          <div className="flex gap-3">
            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="flex-1 gap-2 bg-transparent"
            >
              <Copy className="w-4 h-4" />
              Copy to Clipboard
            </Button>
            <Button onClick={downloadFile} className="flex-1 gap-2">
              <Download className="w-4 h-4" />
              Download {exportFormat.extension.toUpperCase()}
            </Button>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">How to use:</strong>{" "}
              {selectedEditor === "vscode" &&
                "Save the JSON file and place it in your VSCode extensions folder, or use it with the VSCode theme development workflow."}
              {selectedEditor === "cursor" &&
                "Save the JSON file to your Cursor themes directory. Cursor uses the same format as VSCode."}
              {selectedEditor === "zed" &&
                "Save the JSON file to ~/.config/zed/themes/ (Linux/Mac) or %AppData%\\zed\\themes\\ (Windows)."}
              {selectedEditor === "neovim" &&
                "Save the Lua file to ~/.config/nvim/lua/ or your colorschemes directory, then use :colorscheme command."}
              {selectedEditor === "helix" &&
                "Save the TOML file to ~/.config/helix/themes/ (Linux/Mac) or %AppData%\\helix\\themes\\ (Windows)."}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

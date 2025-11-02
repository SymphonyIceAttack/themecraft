"use client";

import { Copy, Download } from "lucide-react";
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
import type { VSCodeTheme } from "@/types/theme";

interface ExportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  theme: VSCodeTheme;
}

export function ExportDialog({ open, onOpenChange, theme }: ExportDialogProps) {
  const themeJson = JSON.stringify(theme, null, 2);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(themeJson);
    toast.success("Copied!", {
      description: "Theme JSON copied to clipboard",
    });
  };

  const downloadJson = () => {
    const blob = new Blob([themeJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${theme.name.toLowerCase().replace(/\s+/g, "-")}-theme.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Downloaded!", {
      description: "Theme JSON file downloaded",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-foreground">
            Export VSCode Theme
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Copy or download your theme configuration as JSON
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Textarea
            value={themeJson}
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
            <Button onClick={downloadJson} className="flex-1 gap-2">
              <Download className="w-4 h-4" />
              Download JSON
            </Button>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">How to use:</strong> Save the
              JSON file and place it in your VSCode extensions folder, or use it
              with the VSCode theme development workflow.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

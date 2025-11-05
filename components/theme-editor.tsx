"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { normalizeColor } from "@/lib/color-utils";
import type { TokenColor, VSCodeTheme } from "@/types/theme";

interface ThemeEditorProps {
  theme: VSCodeTheme;
  onThemeChange: (theme: VSCodeTheme) => void;
}

export function ThemeEditor({ theme, onThemeChange }: ThemeEditorProps) {
  const updateColor = (key: string, value: string) => {
    onThemeChange({
      ...theme,
      colors: {
        ...theme.colors,
        [key]: value,
      },
    });
  };

  const updateTokenColor = (index: number, field: string, value: string) => {
    const newTokenColors = [...theme.tokenColors];
    newTokenColors[index] = {
      ...newTokenColors[index],
      settings: {
        ...newTokenColors[index].settings,
        [field]: value,
      },
    };
    onThemeChange({
      ...theme,
      tokenColors: newTokenColors,
    });
  };

  const updateThemeName = (name: string) => {
    onThemeChange({ ...theme, name });
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Theme Settings
          </h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="theme-name" className="text-foreground">
                Theme Name
              </Label>
              <Input
                id="theme-name"
                value={theme.name}
                onChange={(e) => updateThemeName(e.target.value)}
                className="mt-2"
              />
            </div>
          </div>
        </div>

        <Tabs defaultValue="editor" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="editor">Editor Colors</TabsTrigger>
            <TabsTrigger value="syntax">Syntax Colors</TabsTrigger>
          </TabsList>

          <TabsContent value="editor" className="mt-4">
            <ScrollArea className="h-[500px] pr-4">
              <div className="space-y-4">
                {Object.entries(theme.colors).map(([key, value]) => (
                  <ColorInput
                    key={key}
                    label={key}
                    value={value as string}
                    onChange={(newValue) => updateColor(key, newValue)}
                  />
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="syntax" className="mt-4">
            <ScrollArea className="h-[500px] pr-4">
              <div className="space-y-6">
                {theme.tokenColors.map((token: TokenColor, index: number) => (
                  <div
                    key={index}
                    className="space-y-3 p-4 bg-muted/50 rounded-lg"
                  >
                    <div className="text-sm font-medium text-foreground">
                      {token.scope.join(", ")}
                    </div>
                    <ColorInput
                      label="Foreground"
                      value={token.settings.foreground}
                      onChange={(value) =>
                        updateTokenColor(index, "foreground", value)
                      }
                    />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
}

function ColorInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const normalizedValue = normalizeColor(value);
  const wasNormalized = value !== normalizedValue && value.trim() !== "";

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1">
        <Label className="text-sm text-muted-foreground">
          {label}
          {wasNormalized && (
            <span
              className="ml-2 text-xs text-amber-500"
              title={`Original: ${value}`}
            >
              (auto-fixed)
            </span>
          )}
        </Label>
        <Input
          type="text"
          value={normalizedValue}
          onChange={(e) => {
            const inputValue = e.target.value;
            if (
              /^[0-9A-Fa-f]+$/.test(inputValue) &&
              !inputValue.startsWith("#")
            ) {
              onChange(`#${inputValue}`);
            } else {
              onChange(inputValue);
            }
          }}
          onBlur={(e) => {
            const normalized = normalizeColor(e.target.value);
            if (normalized !== e.target.value) {
              onChange(normalized);
            }
          }}
          className="mt-1 font-mono text-sm"
          placeholder="#000000"
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <Label className="text-xs text-muted-foreground">Color</Label>
        <input
          type="color"
          value={normalizedValue}
          onChange={(e) => onChange(e.target.value)}
          className="w-12 h-10 rounded border border-border cursor-pointer"
          title={`Current: ${normalizedValue}`}
        />
      </div>
    </div>
  );
}

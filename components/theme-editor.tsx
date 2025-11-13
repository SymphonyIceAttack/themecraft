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
    <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/10">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
            Theme Settings
          </h2>
          <div className="space-y-4">
            <div>
              <Label
                htmlFor="theme-name"
                className="text-foreground font-medium"
              >
                Theme Name
              </Label>
              <Input
                id="theme-name"
                value={theme.name}
                onChange={(e) => updateThemeName(e.target.value)}
                className="mt-2 bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <Tabs defaultValue="editor" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-muted/50">
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
                    className="space-y-3 p-4 bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300"
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
    <div className="flex items-center gap-3 group">
      <div className="flex-1">
        <Label className="text-sm text-muted-foreground font-medium">
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
          className="mt-1 font-mono text-sm bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
          placeholder="#000000"
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <Label className="text-xs text-muted-foreground font-medium">
          Color
        </Label>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <input
            type="color"
            value={normalizedValue}
            onChange={(e) => onChange(e.target.value)}
            className="w-12 h-10 rounded-lg border-2 border-border/50 cursor-pointer hover:border-primary transition-all duration-300 hover:scale-110 relative z-10"
            title={`Current: ${normalizedValue}`}
          />
        </div>
      </div>
    </div>
  );
}

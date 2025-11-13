"use client";

import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-muted-foreground">
            Everything you need to know about creating and exporting themes
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What editors are supported?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  We support five popular code editors: VSCode, Cursor, Zed,
                  Neovim, and Helix. Each editor has its own theme format, and
                  our tool automatically converts your theme to the appropriate
                  format when you export.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                How do I install my exported theme?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-3">
                  Installation steps vary by editor:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <strong>VSCode/Cursor:</strong> Place the JSON file in your
                    themes folder and select it from settings
                  </li>
                  <li>
                    <strong>Zed:</strong> Add the JSON to ~/.config/zed/themes/
                  </li>
                  <li>
                    <strong>Neovim:</strong> Place the Lua file in your
                    colorscheme directory
                  </li>
                  <li>
                    <strong>Helix:</strong> Add the TOML file to
                    ~/.config/helix/themes/
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I import an existing theme to edit?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Currently, you can start with our default theme template and
                  customize all colors. Theme import functionality is planned
                  for a future update. You can manually copy color values from
                  existing themes into the editor.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                What color formats are supported?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  The editor supports multiple color formats including hex
                  (#RRGGBB), RGB (rgb(r, g, b)), RGBA (rgba(r, g, b, a)), and
                  even plain numbers. All formats are automatically normalized
                  to the appropriate format for each editor when exporting.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                How do I preview my theme before exporting?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  The right panel shows a live preview of your theme with real
                  code examples. You can switch between different programming
                  languages using the language selector to see how your theme
                  looks with various syntax patterns.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Is my theme data saved?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Currently, themes are not automatically saved. Make sure to
                  export your theme when you're done editing. Local storage
                  support for auto-saving your work is coming in a future
                  update.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export interface TokenColorSettings {
  foreground: string;
  fontStyle?: string;
}

export interface TokenColor {
  scope: string[];
  settings: TokenColorSettings;
}

export interface VSCodeTheme {
  name: string;
  type: string;
  colors: Record<string, string>;
  tokenColors: TokenColor[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  published_at: string;
  status: string;
}

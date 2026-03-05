import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Floating paw animations from Frame.tsx
        float1: {
          "0%,100%": { transform: "translateY(0px) rotate(-12deg)" },
          "50%": { transform: "translateY(-22px) rotate(-6deg)" },
        },
        float2: {
          "0%,100%": { transform: "translateY(0px) rotate(18deg)" },
          "50%": { transform: "translateY(-18px) rotate(25deg)" },
        },
        float3: {
          "0%,100%": { transform: "translateY(0px) rotate(5deg)" },
          "50%": { transform: "translateY(-28px) rotate(-3deg)" },
        },
        float4: {
          "0%,100%": { transform: "translateY(0px) rotate(-20deg)" },
          "50%": { transform: "translateY(-14px) rotate(-10deg)" },
        },
        float5: {
          "0%,100%": { transform: "translateY(0px) rotate(30deg)" },
          "50%": { transform: "translateY(-20px) rotate(38deg)" },
        },
        float6: {
          "0%,100%": { transform: "translateY(0px) rotate(-5deg)" },
          "50%": { transform: "translateY(-24px) rotate(4deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float1": "float1 4.2s ease-in-out infinite",
        "float2": "float2 5.8s ease-in-out infinite",
        "float3": "float3 3.9s ease-in-out infinite",
        "float4": "float4 6.2s ease-in-out infinite",
        "float5": "float5 4.7s ease-in-out infinite",
        "float6": "float6 5.1s ease-in-out infinite",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
};

export default config;

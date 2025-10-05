/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        drawLine: {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
        flyPlane: {
          "0%": { offsetDistance: "0%", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { offsetDistance: "100%", opacity: "0" },
        },
        parallaxFloat: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "25%": { transform: "translateY(-10px) translateX(5px)" },
          "50%": { transform: "translateY(-5px) translateX(-5px)" },
          "75%": { transform: "translateY(-15px) translateX(3px)" },
        },
        staggeredFadeIn: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        counterUp: {
          from: { opacity: "0", transform: "translateY(20px) scale(0.8)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        gradientSweep: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pageSlideIn: {
          from: { opacity: "0", transform: "translateX(20px) scale(0.98)" },
          to: { opacity: "1", transform: "translateX(0) scale(1)" },
        },
        pageSlideOut: {
          from: { opacity: "1", transform: "translateX(0) scale(1)" },
          to: { opacity: "0", transform: "translateX(-20px) scale(0.98)" },
        },
        choreographedEntrance: {
          from: { opacity: "0", transform: "translateY(30px) scale(0.95)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        buttonLift: {
          from: { transform: "translateY(0) scale(1)", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" },
          to: { transform: "translateY(-2px) scale(1.02)", boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)" },
        },
        cardGlow: {
          "0%, 100%": { boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" },
          "50%": { boxShadow: "0 8px 25px rgba(45, 114, 44, 0.15)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "draw-line": "drawLine 3s ease-in-out forwards",
        "fly-plane": "flyPlane 4s ease-in-out forwards",
        "parallax-float": "parallaxFloat 8s ease-in-out infinite",
        "staggered-fade-in": "staggeredFadeIn 0.8s ease-out forwards",
        "counter-up": "counterUp 1s ease-out forwards",
        "gradient-sweep": "gradientSweep 2s ease-in-out",
        "float": "parallaxFloat 6s ease-in-out infinite",
        "count-up": "counterUp 0.8s ease-out forwards",
        "slide-in-left": "staggeredFadeIn 0.8s ease-out forwards",
        "slide-in-right": "staggeredFadeIn 0.8s ease-out forwards",
        "fade-in-up": "staggeredFadeIn 0.8s ease-out forwards",
        "scroll": "scroll 30s linear infinite",
        "shimmer": "shimmer 2s infinite",
        "page-slide-in": "pageSlideIn 0.3s ease-out forwards",
        "page-slide-out": "pageSlideOut 0.15s ease-in forwards",
        "choreographed-entrance": "choreographedEntrance 0.8s ease-out forwards",
        "button-lift": "buttonLift 0.3s ease-out forwards",
        "card-glow": "cardGlow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

import * as React from "react";
import { cn } from "@/lib/utils";

const GradientCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "glass" | "glow" | "animated";
    gradient?: "primary" | "secondary" | "rainbow";
  }
>(({ className, variant = "default", gradient = "primary", ...props }, ref) => {
  const baseClasses = "rounded-lg border transition-all duration-300";
  
  const variantClasses = {
    default: "bg-card text-card-foreground shadow-sm",
    glass: "glass",
    glow: "bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-glow hover:border-primary/40",
    animated: "animated-bg border-primary/30 backdrop-blur-sm"
  };

  const gradientClasses = {
    primary: "bg-gradient-to-br from-music-purple/10 to-music-pink/10",
    secondary: "bg-gradient-to-br from-music-blue/10 to-music-purple/10",
    rainbow: "bg-gradient-to-br from-music-purple/10 via-music-pink/10 to-music-blue/10"
  };

  return (
    <div
      ref={ref}
      className={cn(
        baseClasses,
        variantClasses[variant],
        variant !== "default" && gradientClasses[gradient],
        className
      )}
      {...props}
    />
  );
});
GradientCard.displayName = "GradientCard";

const GradientCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
GradientCardHeader.displayName = "GradientCardHeader";

const GradientCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-display text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
GradientCardTitle.displayName = "GradientCardTitle";

const GradientCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
GradientCardDescription.displayName = "GradientCardDescription";

const GradientCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
GradientCardContent.displayName = "GradientCardContent";

const GradientCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
GradientCardFooter.displayName = "GradientCardFooter";

export { 
  GradientCard, 
  GradientCardHeader, 
  GradientCardFooter, 
  GradientCardTitle, 
  GradientCardDescription, 
  GradientCardContent 
};
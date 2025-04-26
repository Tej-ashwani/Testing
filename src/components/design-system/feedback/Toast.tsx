import * as React from 'react';
import { Toaster as Sonner } from 'sonner';
import { toast as sonnerToast } from 'sonner';
import { cn } from '@/lib/utils';
import { AlertCircleIcon, AlertTriangleIcon, CheckCircleIcon, InfoIcon } from 'lucide-react';

// Main Toast Component
interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: 'default' | 'info' | 'success' | 'warning' | 'error';
  duration?: number;
}

// Export the toast provider
export function Toaster() {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
    />
  );
}

// Helper function to get the appropriate icon for each variant
function getIconForVariant(variant: ToastProps['variant']) {
  switch (variant) {
    case 'info':
      return <InfoIcon className="h-5 w-5 text-blue-600" />;
    case 'success':
      return <CheckCircleIcon className="h-5 w-5 text-green-600" />;
    case 'warning':
      return <AlertTriangleIcon className="h-5 w-5 text-yellow-600" />;
    case 'error':
      return <AlertCircleIcon className="h-5 w-5 text-red-600" />;
    default:
      return null;
  }
}

// Toast utility function
export function toast({
  title,
  description,
  action,
  variant = 'default',
  duration = 5000,
  ...props
}: ToastProps) {
  const icon = getIconForVariant(variant);
  
  return sonnerToast(
    <div className="flex items-center gap-2">
      {icon && <span className="toast-icon">{icon}</span>}
      <span>{title}</span>
    </div>,
    {
      description,
      action,
      duration,
      ...props,
    }
  );
}

export default toast;
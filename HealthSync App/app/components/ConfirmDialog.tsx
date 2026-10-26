import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { AlertCircle } from "lucide-react";

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

export function ConfirmDialog({ isOpen, onClose, onConfirm, title, message }: ConfirmDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
              <AlertCircle className="text-orange-500 dark:text-orange-400" size={24} />
            </div>
            <DialogTitle>{title}</DialogTitle>
          </div>
          <DialogDescription className="text-gray-600 dark:text-[#9CA3AF]">
            {message}
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-3 justify-end pt-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1 bg-gray-100 dark:bg-[#2A2A2A] text-gray-700 dark:text-[#F0F0F0] border-0 hover:bg-gray-200 dark:hover:bg-[#1A1A1A]"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            className="flex-[2] bg-gradient-to-r from-orange-400 to-amber-400 dark:from-orange-500 dark:to-amber-500 hover:from-orange-500 hover:to-amber-500 dark:hover:from-orange-600 dark:hover:to-amber-600 text-white"
          >
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

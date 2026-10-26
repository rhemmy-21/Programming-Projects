import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { ConfirmDialog } from "./ConfirmDialog";

interface EditProfileDialogProps {
  isOpen: boolean;
  onClose: () => void;
  field: "name" | "goals" | "about";
  currentData: any;
  onSave: (data: any) => void;
}

export function EditProfileDialog({ isOpen, onClose, field, currentData, onSave }: EditProfileDialogProps) {
  const [formData, setFormData] = useState(currentData);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSaveClick = () => {
    setShowConfirm(true);
  };

  const handleConfirmSave = () => {
    onSave(formData);
    setShowConfirm(false);
    onClose();
  };

  const renderForm = () => {
    switch (field) {
      case "name":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2"
              />
            </div>
          </div>
        );

      case "goals":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="steps">Daily Steps Goal</Label>
              <Input
                id="steps"
                type="number"
                value={formData.stepsGoal}
                onChange={(e) => setFormData({ ...formData, stepsGoal: e.target.value })}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="calories">Daily Calories Goal (kcal)</Label>
              <Input
                id="calories"
                type="number"
                value={formData.caloriesGoal}
                onChange={(e) => setFormData({ ...formData, caloriesGoal: e.target.value })}
                className="mt-2"
              />
            </div>
          </div>
        );

      case "about":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  value={formData.height}
                  onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  className="mt-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="age">Age (years)</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="sex">Sex</Label>
                <select
                  id="sex"
                  value={formData.sex}
                  onChange={(e) => setFormData({ ...formData, sex: e.target.value })}
                  className="mt-2 w-full rounded-md border border-gray-300 p-2"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (field) {
      case "name": return "Edit Name";
      case "goals": return "Edit Activity Goals";
      case "about": return "Edit About Me";
      default: return "Edit";
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{getTitle()}</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            {renderForm()}
          </div>
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button onClick={handleSaveClick} className="bg-green-500 hover:bg-green-600 text-white">Save</Button>
          </div>
        </DialogContent>
      </Dialog>

      <ConfirmDialog
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleConfirmSave}
        title="Confirm Changes"
        message="Are you sure you want to save these changes to your profile?"
      />
    </>
  );
}


import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] w-full overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">Resume - Mohan R</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        <div className="p-4 overflow-auto max-h-[calc(90vh-80px)]">
          <img 
            src="/lovable-uploads/886693bf-6487-42ab-a95a-84c08e64caa9.png" 
            alt="Mohan R Resume" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;

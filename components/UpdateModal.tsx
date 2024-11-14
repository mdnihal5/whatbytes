import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type UpdateModalProps = {
  isOpen: boolean;
  onClose: () => void;
  rank: number;
  setRank: (rank: number) => void;
  percentile: number;
  setPercentile: (percentile: number) => void;
  correctAnswers: number;
  setCorrectAnswers: (correctAnswers: number) => void;
};

const UpdateModal: React.FC<UpdateModalProps> = ({ isOpen, onClose, rank, setRank, percentile, setPercentile, correctAnswers, setCorrectAnswers }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update scores</DialogTitle>
        </DialogHeader>
        <div className="grid gap-3 py-4">
          <div className="flex items-center gap-2">
            <Label htmlFor="rank" className="w-full text-left">
              Update your <span className="font-bold">Rank</span>
            </Label>
            <Input id="rank" value={rank} onChange={(e) => setRank(Number(e.target.value))} className="w-full" />
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="percentile" className="w-full text-left">
              Update your <span className="font-bold">Percentile</span>
            </Label>
            <Input id="percentile" value={percentile} onChange={(e) => setPercentile(Number(e.target.value))} className="w-full" />
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="score" className="w-full text-left">
              Update your <span className="font-bold">Current Score</span>
            </Label>
            <Input id="score" value={correctAnswers} onChange={(e) => setCorrectAnswers(Number(e.target.value))} className="w-full" />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onClose}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateModal;

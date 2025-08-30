import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  description: string;
  participants?: number;
  maxParticipants?: number;
  isUpcoming?: boolean;
}

export const EventCard = ({
  title,
  date,
  time,
  description,
  participants = 0,
  maxParticipants = 16,
  isUpcoming = true
}: EventCardProps) => {
  return (
    <div className="glass-card p-5 space-y-4">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            {date}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            {time}
          </div>
        </div>
        {isUpcoming && (
          <Badge variant="accent">
            Prossimo evento
          </Badge>
        )}
      </div>
      
      <div className="space-y-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          {participants}/{maxParticipants} partecipanti
        </div>
        <Button variant="hero" size="sm">
          Prenota posto
        </Button>
      </div>
    </div>
  );
};
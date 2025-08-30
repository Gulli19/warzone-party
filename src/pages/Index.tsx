import { Header } from "@/components/Header";
import { EventCard } from "@/components/EventCard";
import { FeatureCard } from "@/components/FeatureCard";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  GamepadIcon, 
  Users, 
  Trophy, 
  MessageCircle,
  Video,
  Image,
  ExternalLink,
  Calendar,
  Target,
  Headphones,
  Monitor,
  Zap
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-5xl lg:text-6xl font-extrabold font-inter leading-tight">
                  Battle Royal{" "}
                  <span className="gradient-text">Party</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Eventi sociali, tornei rapidi e squadre casuali. Gioca con nuovi amici, 
                  scala la classifica e condividi clip meme. 🎮
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href="https://discord.gg/dvEzHX8nhH" target="_blank" rel="noopener">
                      Entra ora <ExternalLink className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="glass" size="lg" asChild>
                    <a href="#come-funziona">
                      Scopri di più
                    </a>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="glass">ID Activision richiesto</Badge>
                  <Badge variant="glass">Squadre random</Badge>
                  <Badge variant="glass">Ranking & Clip</Badge>
                </div>
              </div>
              
              <div className="lg:justify-self-end">
                <EventCard
                  title="Squad Random Night"
                  date="Giovedì 22 Agosto"
                  time="Ore 21:00"
                  description="Unisciti a squadre casuali per una serata epica di Battle Royale"
                  participants={12}
                  maxParticipants={16}
                  isUpcoming={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Come Funziona */}
        <section id="come-funziona" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Come funziona</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={MessageCircle}
                title="Iscriviti al Discord"
                description="Un clic e sei dentro la community. Accesso immediato a tutti gli eventi e chat gaming."
              />
              <FeatureCard
                icon={Calendar}
                title="Unisciti a un evento"
                description="Calendario settimanale con modalità diverse. Squad random, tornei, serate tematiche."
              />
              <FeatureCard
                icon={Trophy}
                title="Gioca & scala la classifica"
                description="Matchmaking random e ranking pubblico. Guadagna punti e conquista la vetta!"
              />
            </div>
          </div>
        </section>

        {/* Eventi */}
        <section id="eventi" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Prossimi Eventi</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <EventCard
                  title="Squad Random Night"
                  date="Giovedì 22 Agosto"
                  time="Ore 21:00"
                  description="Serata squadre casuali con matchmaking automatico"
                  participants={12}
                  maxParticipants={16}
                />
                <EventCard
                  title="Modalità Cecchini"
                  date="Sabato 24 Agosto"
                  time="Ore 21:00"
                  description="Evento speciale: solo armi da cecchino!"
                  participants={8}
                  maxParticipants={12}
                />
              </div>
              <Card className="glass-card p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Badge variant="accent">Calendario Completo</Badge>
                  <div className="w-64 h-36 rounded-xl bg-gradient-primary/20 border-2 border-dashed border-white/20 flex items-center justify-center">
                    <Calendar className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">
                    Visualizza tutti gli eventi programmati
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Classifica & Meme */}
        <section id="ranking" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Classifica & Meme</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card p-8">
                <div className="space-y-4">
                  <Badge variant="accent">Ranking Attuale</Badge>
                  <div className="space-y-3">
                    {[
                      { pos: 1, name: "SniperKing", points: 2450 },
                      { pos: 2, name: "RushMaster", points: 2380 },
                      { pos: 3, name: "ClutchGod", points: 2290 }
                    ].map(player => (
                      <div key={player.pos} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-sm font-bold">
                            {player.pos}
                          </span>
                          <span className="font-medium">{player.name}</span>
                        </div>
                        <span className="text-accent font-bold">{player.points}pt</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
              
              <Card className="glass-card p-8">
                <div className="space-y-4">
                  <Badge variant="accent">Clip Divertenti</Badge>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="aspect-video rounded-lg bg-gradient-primary/20 border border-dashed border-white/20 flex items-center justify-center">
                        <span className="text-sm text-muted-foreground font-medium">
                          Clip #{i}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Marketplace */}
        <section id="marketplace" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Marketplace</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Offri o acquista servizi dalla community: coaching, setup PC, boost audio e altro ancora.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                title="Coaching Warzone"
                description="Lezioni private per migliorare il tuo gameplay e strategie da pro."
                price="25/ora"
                rating={4.9}
                provider="ProGamerXX"
                featured={true}
              />
              <ServiceCard
                title="Setup PC da Gaming"
                description="Consulenza personalizzata per configurare o ottimizzare il tuo PC."
                price="50"
                rating={4.8}
                provider="TechMaster"
              />
              <ServiceCard
                title="Boost Audio"
                description="Imposta al meglio le tue cuffie e il microfono per un audio cristallino."
                price="15"
                rating={4.7}
                provider="AudioPro"
              />
            </div>
          </div>
        </section>

        {/* Premium CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="glass-card p-12 text-center max-w-4xl mx-auto">
              <div className="space-y-6">
                <Badge variant="accent" className="text-base px-4 py-2">
                  <Zap className="w-4 h-4 mr-2" />
                  PartyDrop Premium
                </Badge>
                <h2 className="text-4xl font-bold">
                  Porta il tuo gaming al livello successivo
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Eventi esclusivi, tornei premium, coaching personalizzato e molto altro. 
                  Scopri tutti i vantaggi del piano Premium.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button variant="hero" size="lg" asChild>
                    <a href="/pricing">
                      Scopri i piani <ExternalLink className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="glass" size="lg">
                    Prova gratuita
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="font-bold text-xl">PartyDrop</div>
              <p className="text-muted-foreground text-sm">
                Non affiliato con Activision, Call of Duty o Battlefield.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="glass" size="sm" asChild>
                <a href="https://discord.gg/dvEzHX8nhH" target="_blank" rel="noopener">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="glass" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener">
                  <Video className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="glass" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener">
                  <Image className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

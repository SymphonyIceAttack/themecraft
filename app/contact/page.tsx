import {
  Lightbulb,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact Us - ThemeCraft | Get in Touch",
  description:
    "Contact ThemeCraft for support, feedback, or questions about our theme designer platform. We're here to help you create better coding experiences.",
  openGraph: {
    title: "Contact Us - ThemeCraft",
    description:
      "Get in touch with the ThemeCraft team for support and feedback.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-border/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm rounded-xl p-2 border border-border/50 group-hover:border-primary/20 transition-all duration-300">
                  <Lightbulb className="w-7 h-7 text-primary relative z-10" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent block">
                  ThemeCraft
                </span>
                <p className="text-sm text-muted-foreground font-medium">
                  Contact Us
                </p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/faq"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </Link>
              <Link href="/contact" className="text-foreground font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent mb-6 leading-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions, feedback, or need support? We'd love to hear from
            you. Our team is here to help you create the perfect coding
            environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-muted/30 to-muted/10 border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-primary" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24
                hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background/50 border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    className="bg-background/50 border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your question or feedback..."
                    rows={6}
                    className="bg-background/50 border-border/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  For general inquiries and support:
                </p>
                <div className="space-y-2">
                  <p className="font-medium">hello@themecraft.dev</p>
                  <p className="text-sm text-muted-foreground">
                    Response time: Within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  Phone Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Business hours: Monday - Friday, 9 AM - 6 PM PST
                </p>
                <div className="space-y-2">
                  <p className="font-medium">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">
                    Emergency support available 24/7
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-muted/20 to-muted/10 border-border/50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We're a remote-first team with team members across the globe.
                </p>
                <div className="space-y-2">
                  <p className="font-medium">Global Remote Team</p>
                  <p className="text-sm text-muted-foreground">
                    San Francisco, CA (Headquarters)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Join our community of theme creators and developers:
                </p>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Discord Community
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <Users className="w-4 h-4" />
                    GitHub Discussions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ CTA */}
        <section className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-primary/20">
            <CardContent className="py-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Looking for Quick Answers?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Check out our frequently asked questions for instant help with
                common topics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/faq">
                  <Button variant="outline" className="gap-2">
                    <MessageSquare className="w-4 h-4" />
                    View FAQ
                  </Button>
                </Link>
                <Button asChild>
                  <Link href="/">Try ThemeCraft</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

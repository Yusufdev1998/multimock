import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { TelegramLogin } from "@/components/telegram-login";
import {
  FiUpload,
  FiCheckCircle,
  FiBarChart2,
  FiClock,
  FiShield,
  FiZap,
  FiImage,
  FiFileText,
} from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <FiZap className="h-4 w-4" />
              Automated CEFR Assessment
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Check CEFR Answer Sheets
              <span className="block text-primary mt-2">
                Instantly & Accurately
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload images of listening and reading answer sheets. Our
              AI-powered system automatically checks and grades them with
              precision. Login with Telegram to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <TelegramLogin
                botName="cefrautocheckerbot"
                authUrl="http://localhost:3001/me"
                size="medium"
                requestAccess="write"
                className="flex justify-center"
              />
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Why Choose AutoChecker?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to make CEFR assessment effortless
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FiUpload className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Easy Upload</CardTitle>
                <CardDescription>
                  Simply upload images of answer sheets. Support for multiple
                  formats and batch processing.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FiCheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Accurate Grading</CardTitle>
                <CardDescription>
                  AI-powered recognition ensures precise checking of listening
                  and reading answers with 99%+ accuracy.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FiClock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Instant Results</CardTitle>
                <CardDescription>
                  Get results in seconds, not hours. Process hundreds of sheets
                  in minutes.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FiBarChart2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Detailed Analytics</CardTitle>
                <CardDescription>
                  Comprehensive reports with statistics, performance insights,
                  and exportable results.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FiShield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Secure & Private</CardTitle>
                <CardDescription>
                  Your data is encrypted and secure. We never share or store
                  answer sheets longer than necessary.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FiZap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>CEFR Compliant</CardTitle>
                <CardDescription>
                  Fully aligned with CEFR standards for listening and reading
                  assessments at all levels.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Login with Telegram, then follow these simple steps to get your
              results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="relative inline-flex">
                <div className="h-20 w-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                  1
                </div>
                <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <FiImage className="h-4 w-4 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold">Login & Upload</h3>
              <p className="text-muted-foreground">
                First, login with your Telegram account. Then upload images of
                your CEFR listening and reading answer sheets.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="relative inline-flex">
                <div className="h-20 w-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                  2
                </div>
                <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <FiZap className="h-4 w-4 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold">AI Processing</h3>
              <p className="text-muted-foreground">
                Our advanced AI recognizes and checks each answer against the
                correct solutions automatically.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="relative inline-flex">
                <div className="h-20 w-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                  3
                </div>
                <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <FiFileText className="h-4 w-4 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold">Get Results</h3>
              <p className="text-muted-foreground">
                Receive detailed scores, analytics, and downloadable reports in
                seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join educators and institutions using AutoChecker to streamline
            their CEFR assessments. Login with Telegram to start checking answer
            sheets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 gap-2"
            >
              <FaTelegram className="h-5 w-5" />
              Login with Telegram
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-sm font-bold">CEFR</span>
              </div>
              <span className="text-lg font-bold">AutoChecker</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 AutoChecker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

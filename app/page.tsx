import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Mic, Sparkles, Clock, FileText, CheckCircle, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b border-blue-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">Quill</span>
              <Badge variant="secondary" className="ml-2 text-xs bg-blue-100 text-blue-700">
                Beta
              </Badge>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Features
            </Link>
            <Link href="#beta" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Beta Access
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Terms
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="container mx-auto text-center max-w-6xl relative">
          <div className="mb-8">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-6 px-4 py-2 text-sm font-medium">
              🚀 Now in Beta - Join Early Access
            </Badge>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Your thoughts,
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              beautifully organized
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the future of note-taking with Quill. Secure, intelligent, and elegantly designed for modern
            productivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl h-auto shadow-lg hover:shadow-xl transition-all">
              Join Beta Waitlist
            </Button>
            <Button
              variant="outline"
              className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl h-auto bg-transparent"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Beta Testers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10k+</div>
              <div className="text-gray-600">Notes Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Designed for the way you think</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every detail crafted to enhance your note-taking experience
            </p>
          </div>

          {/* Feature Preview Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Daily Routine</h3>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Morning meditation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Review project goals</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span className="text-gray-400">Team standup meeting</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <Mic className="w-5 h-5 text-white" />
                    <div className="flex-1 bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2 w-1/3"></div>
                    </div>
                    <span className="text-white text-sm">0:23</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Capture ideas instantly</h3>
              <p className="text-lg text-gray-600">
                Whether it's a quick voice note during your commute or a detailed project plan, Quill adapts to your
                workflow seamlessly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Voice-to-text transcription</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Smart organization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Offline-first design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Security Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-gray-900">Your privacy, protected</h3>
              <p className="text-lg text-gray-600">
                End-to-end encryption ensures your private thoughts stay private. Advanced security without the
                complexity.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Military-grade encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Biometric authentication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Local-first storage</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Private Note</h3>
                    <Lock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
                  </div>
                </div>
                <div className="bg-blue-600 rounded-xl p-4">
                  <div className="flex items-center justify-center space-x-2 text-white">
                    <Shield className="w-5 h-5" />
                    <span className="font-medium">Protected by encryption</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Everything you need, nothing you don't</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to enhance your productivity without overwhelming you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mic className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Voice Notes</h3>
                <p className="text-gray-600">
                  Record thoughts on the go with high-quality audio and automatic transcription
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered</h3>
                <p className="text-gray-600">
                  Smart suggestions, auto-categorization, and intelligent search across all your notes
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure by Design</h3>
                <p className="text-gray-600">
                  End-to-end encryption with biometric locks for your most sensitive information
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Organization</h3>
                <p className="text-gray-600">
                  Automatic tagging and categorization keeps your notes organized effortlessly
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
                <p className="text-gray-600">
                  Instant sync across devices with offline-first architecture for reliability
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaboration</h3>
                <p className="text-gray-600">Share notes securely with team members while maintaining full control</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beta Access Section */}
      <section id="beta" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6 px-4 py-2 text-sm font-medium">
            Limited Beta Access
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Be among the first to experience Quill</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join our exclusive beta program and help shape the future of note-taking. Limited spots available for early
            access.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <div className="space-y-4">
              <Input
                placeholder="Enter your email address"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12 text-lg"
              />
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 h-12 text-lg font-semibold">
                Join Beta Waitlist
              </Button>
            </div>
            <p className="text-blue-100 text-sm mt-4">No spam, ever. Unsubscribe at any time.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-2">Early Access</div>
              <div className="text-blue-100 text-sm">Get Quill before public launch</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">Shape the Future</div>
              <div className="text-blue-100 text-sm">Your feedback drives development</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">Exclusive Perks</div>
              <div className="text-blue-100 text-sm">Special pricing and features</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Quill</span>
                <Badge variant="secondary" className="ml-2 text-xs bg-blue-100 text-blue-700">
                  Beta
                </Badge>
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#beta" className="text-gray-400 hover:text-white transition-colors">
                Beta Access
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Quill. All rights reserved. Currently in beta - join the waitlist for early access.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

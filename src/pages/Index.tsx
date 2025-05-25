import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Upload, Zap, Download, Star, Check, Menu, X, Play } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/clerk-react';
import AuthButtons from "@/components/AuthButtons";

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const transformExamples = [
    {
      before: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      style: "Studio Ghibli Magic"
    },
    {
      before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      style: "Anime Warrior"
    },
    {
      before: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      style: "Cinematic Portrait"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Digital Artist",
      content: "Revolutionary. This AI transformed my creative workflow completely.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Content Creator",
      content: "My audience is obsessed with these transformations. Game changer.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Professional Photographer",
      content: "The quality is stunning. It's like having a master artist at my fingertips.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
      rating: 5
    }
  ];

  const features = [
    {
      icon: Upload,
      title: "Upload Instantly",
      description: "Drag, drop, or click to upload any photo from your device in seconds"
    },
    {
      icon: Zap,
      title: "AI Transforms",
      description: "Our advanced GPT-powered AI analyzes and recreates your image with artistic precision"
    },
    {
      icon: Download,
      title: "Download & Share",
      description: "Get your masterpiece in ultra-high resolution, ready for any platform"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for trying out our AI",
      features: ["5 transformations/month", "1080p resolution", "Basic styles", "Community support"],
      buttonText: "Start Free",
      popular: false
    },
    {
      name: "Creator",
      price: "$29",
      period: "/month",
      description: "For serious content creators",
      features: ["200 transformations/month", "4K resolution", "All premium styles", "Priority processing", "Premium support"],
      buttonText: "Start Creating",
      popular: true
    },
    {
      name: "Studio",
      price: "$99",
      period: "/month",
      description: "For professionals and teams",
      features: ["Unlimited transformations", "8K resolution", "Custom styles", "API access", "White-label solution", "24/7 support"],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % transformExamples.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900 transform transition-all duration-300 hover:scale-105">
              ArtifyAI
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Features', 'Demo', 'Pricing', 'About'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            <div className="hidden md:flex space-x-4">
              <AuthButtons />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t border-gray-100 transform transition-all duration-500 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}>
          <div className="px-6 py-4 space-y-4">
            {['Features', 'Demo', 'Pricing', 'About'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="block text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <SignedOut>
                <SignInButton fallbackRedirectUrl="/">
                  <Button variant="ghost" className="justify-start">Sign In</Button>
                </SignInButton>
                <SignUpButton fallbackRedirectUrl="/">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">Try Free</Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">Dashboard</Button>
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-8 bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105">
              ✨ Powered by GPT-4 Vision
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight animate-slide-up">
              Transform Photos Into
              <span className="block mt-2 animate-slide-up delay-200">
                Cinematic Art
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-300">
              Upload any photo and watch our AI transform it into stunning Studio Ghibli illustrations, 
              epic anime artwork, or photorealistic masterpieces in seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-500">
              <SignedOut>
                <SignUpButton fallbackRedirectUrl="/">
                  <Button 
                    size="lg" 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 group"
                  >
                    Start Creating Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Button 
                  size="lg" 
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 group"
                >
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </SignedIn>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              See the Magic
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real transformations, real results. Watch ordinary photos become extraordinary art.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Before Image */}
            <div className="transform transition-all duration-700 hover:scale-105">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800">Original Photo</h3>
                  <Badge variant="outline" className="text-gray-600">Before</Badge>
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={transformExamples[currentImage].before}
                    alt="Original"
                    className="w-full h-full object-cover transition-all duration-1000 transform hover:scale-110"
                  />
                </div>
              </div>
            </div>
            
            {/* Arrow Animation */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                <ArrowRight className="text-white h-8 w-8" />
              </div>
            </div>
            
            {/* After Image */}
            <div className="transform transition-all duration-700 hover:scale-105">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-blue-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800">AI Transformed</h3>
                  <Badge className="bg-blue-500 text-white">
                    {transformExamples[currentImage].style}
                  </Badge>
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg relative">
                  <img 
                    src={transformExamples[currentImage].after}
                    alt="Transformed"
                    className="w-full h-full object-cover transition-all duration-1000 transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {transformExamples.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  index === currentImage 
                    ? 'bg-blue-500 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform your photos into stunning artwork
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="group transform transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                    <CardContent className="p-8 text-center h-full flex flex-col">
                      <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Loved by Creators
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of artists, creators, and professionals who trust ArtifyAI
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Card className="bg-gradient-to-br from-gray-50 to-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-8 italic text-lg leading-relaxed flex-1">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 shadow-lg"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start creating for free. Upgrade when you're ready for more power.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-500 hover:scale-105 ${
                  plan.popular ? 'scale-105 md:scale-110' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Card className={`relative h-full ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-2xl' 
                    : 'bg-white border-0 shadow-xl hover:shadow-2xl'
                } transition-all duration-500`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white px-6 py-2 text-sm font-semibold shadow-lg">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                      <p className="text-gray-600 mb-6">{plan.description}</p>
                      <div className="mb-6">
                        <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                        {plan.period && <span className="text-gray-600 text-lg">{plan.period}</span>}
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full py-4 text-lg font-semibold transform transition-all duration-300 hover:scale-105 ${
                        plan.popular 
                          ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl' 
                          : 'bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ArtifyAI
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transform your photos into stunning artwork with the power of AI. 
                Join the creative revolution.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">&copy; 2024 ArtifyAI. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

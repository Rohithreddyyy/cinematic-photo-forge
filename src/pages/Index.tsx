
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Upload, Zap, Download, Star, Check } from "lucide-react";

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const transformExamples = [
    {
      before: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
      style: "Studio Ghibli"
    },
    {
      before: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=400&fit=crop",
      style: "Anime Action"
    },
    {
      before: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=400&fit=crop",
      style: "Cinematic"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Digital Artist",
      content: "This AI transformed my portrait into a stunning Studio Ghibli masterpiece. The quality is incredible!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Content Creator",
      content: "Game-changing tool for my social media content. My followers love the anime-style transformations!",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Photographer",
      content: "As a professional photographer, I'm amazed by the artistic quality. It's like having a digital artist on demand.",
      rating: 5
    }
  ];

  const features = [
    {
      icon: Upload,
      title: "Upload Your Photo",
      description: "Simply drag and drop or select any photo from your device"
    },
    {
      icon: Zap,
      title: "AI Magic Happens",
      description: "Our GPT-powered AI analyzes and transforms your image with stunning artistic styles"
    },
    {
      icon: Download,
      title: "Download & Share",
      description: "Get your high-resolution artwork in seconds, ready to share or print"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      features: ["3 transformations/month", "720p resolution", "Basic styles", "Community support"],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      features: ["100 transformations/month", "4K resolution", "All premium styles", "Priority processing", "Email support"],
      buttonText: "Start Pro Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      features: ["Unlimited transformations", "8K resolution", "Custom styles", "API access", "24/7 support"],
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative z-50">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          ArtifyAI
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
          <a href="#demo" className="hover:text-purple-400 transition-colors">Demo</a>
          <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
        </div>
        <div className="space-x-4">
          <Button variant="ghost" className="text-white hover:text-purple-400">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
            Try Free
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-600/30">
            Powered by GPT Image AI
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
            Transform Your Photos Into 
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cinematic Art
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Upload any photo and watch our AI transform it into stunning Studio Ghibli illustrations, 
            epic anime artwork, or cinematic masterpieces in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg">
              Start Creating <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">See the Magic in Action</h2>
          <p className="text-xl text-gray-300">Real transformations, real results</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Original Photo</h3>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img 
                    src={transformExamples[currentImage].before}
                    alt="Original"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 border border-purple-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-200">AI Transformed</h3>
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    {transformExamples[currentImage].style}
                  </Badge>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img 
                    src={transformExamples[currentImage].after}
                    alt="Transformed"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {transformExamples.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImage 
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
                    : 'bg-gray-600'
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-300">Three simple steps to artistic magic</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-300">Join thousands of satisfied creators</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-purple-500/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-300">Start free, upgrade when you're ready</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 ${plan.popular ? 'border-purple-500 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                    : 'bg-gray-700 hover:bg-gray-600'
                  } text-white`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                ArtifyAI
              </div>
              <p className="text-gray-400">Transform your photos into stunning artwork with the power of AI.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ArtifyAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

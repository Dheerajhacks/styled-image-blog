
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HeroSection = () => {
  return (
    <section className="relative h-[500px] bg-gradient-to-r from-black/60 to-black/40 flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="text-white text-sm mb-4 flex items-center space-x-2">
            <span>May 5, 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            How the Spring Festival Transformed Campus Culture
          </h1>
          
          <p className="text-gray-200 text-lg mb-8 leading-relaxed">
            A look back at the event that brought together over 2,000 students and 
            changed how we celebrate diversity on campus.
          </p>
          
          {/* Author */}
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-white font-medium">Sophia Chen</div>
              <div className="text-gray-300 text-sm">Events Coordinator</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

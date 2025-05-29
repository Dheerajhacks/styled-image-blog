
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

const NewsletterSignup = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Stay Updated</h3>
      
      <p className="text-sm text-gray-600 mb-6">
        Get the latest campus stories delivered to your inbox.
      </p>
      
      <div className="space-y-4">
        <Input 
          placeholder="Your email address"
          className="w-full"
        />
        
        <div className="flex items-center space-x-2">
          <Checkbox id="newsletter" />
          <label htmlFor="newsletter" className="text-xs text-gray-600">
            I agree to receive email updates
          </label>
        </div>
        
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default NewsletterSignup;

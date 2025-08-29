import { useState } from 'react';
import { Copy, ExternalLink, CheckCircle, Upload, Image } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';

export default function ImageUploadHelper() {
  const [copiedUrl, setCopiedUrl] = useState<string>('');
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedUrl(text);
    setTimeout(() => setCopiedUrl(''), 2000);
  };

  const popularHostingServices = [
    {
      name: 'Imgur',
      description: 'Free, reliable image hosting',
      url: 'https://imgur.com',
      steps: [
        'Go to imgur.com',
        'Click "New post" or drag & drop image',
        'Right-click the uploaded image',
        'Select "Copy image address"',
      ],
      example: 'https://i.imgur.com/AbCdEfG.jpg'
    },
    {
      name: 'GitHub',
      description: 'Perfect if you already use GitHub',
      url: 'https://github.com',
      steps: [
        'Upload image to any GitHub repo',
        'Click on the image file',
        'Click "Raw" button',
        'Copy the URL from address bar',
      ],
      example: 'https://raw.githubusercontent.com/user/repo/main/image.jpg'
    },
    {
      name: 'Cloudinary',
      description: 'Professional with auto-optimization',
      url: 'https://cloudinary.com',
      steps: [
        'Sign up for free account',
        'Upload your image',
        'Copy the provided URL',
        'Use the optimized version',
      ],
      example: 'https://res.cloudinary.com/demo/image/upload/sample.jpg'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Image className="w-6 h-6 text-red-accent" />
          <h2 className="text-lg font-semibold">Image Upload Helper</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Choose the best method to add your images to your portfolio
        </p>
      </div>

      <div className="grid gap-4">
        {popularHostingServices.map((service, index) => (
          <Card key={service.name} className="relative">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <CardTitle className="text-base">{service.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(service.url, '_blank')}
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Visit
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium mb-2 block">Steps:</Label>
                <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                  {service.steps.map((step, stepIndex) => (
                    <li key={stepIndex}>{step}</li>
                  ))}
                </ol>
              </div>
              
              <div>
                <Label className="text-sm font-medium mb-2 block">Example URL format:</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    value={service.example}
                    readOnly
                    className="font-mono text-xs bg-gray-50"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(service.example)}
                    className="px-3"
                  >
                    {copiedUrl === service.example ? (
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </Button>
                </div>
              </div>

              {service.name === 'Imgur' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Upload className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-900">Recommended Choice</span>
                  </div>
                  <p className="text-xs text-green-800">
                    Imgur is the most popular choice for portfolio images. It's free, fast, and reliable.
                    Perfect for your design portfolio needs!
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-medium text-blue-900 mb-2">💡 Pro Tips</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• <strong>Image size:</strong> Recommend 1200x800px or similar aspect ratio</li>
          <li>• <strong>File format:</strong> JPG for photos, PNG for graphics with transparency</li>
          <li>• <strong>File size:</strong> Keep under 2MB for faster loading</li>
          <li>• <strong>Backup:</strong> Save original images locally as backup</li>
        </ul>
      </div>
      
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h3 className="font-medium text-amber-900 mb-2">⚠️ Alternative: Base64</h3>
        <p className="text-sm text-amber-800">
          For small images or if you prefer not to use external hosting, you can convert images to Base64 format 
          using tools like <strong>base64-image.de</strong>. This embeds the image directly in your project.
        </p>
      </div>
    </div>
  );
}
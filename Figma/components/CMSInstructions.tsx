import { useState } from 'react';
import { Info, X, BookOpen, Image, Upload, Link, Camera } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export default function CMSInstructions() {
  const [isVisible, setIsVisible] = useState(() => {
    // Check if user has seen instructions before
    const hasSeenInstructions = localStorage.getItem('portfolio-cms-instructions-seen');
    return !hasSeenInstructions;
  });

  const handleDismiss = () => {
    localStorage.setItem('portfolio-cms-instructions-seen', 'true');
    setIsVisible(false);
  };

  const handleShowAgain = () => {
    localStorage.removeItem('portfolio-cms-instructions-seen');
    setIsVisible(true);
  };

  // Show a small trigger button if instructions are hidden
  if (!isVisible) {
    return (
      <Button
        onClick={handleShowAgain}
        variant="ghost"
        size="sm"
        className="fixed bottom-6 left-6 z-40 bg-white/90 backdrop-blur shadow-lg hover:bg-white"
      >
        <BookOpen className="w-4 h-4 mr-2" />
        CMS Guide
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-red-accent" />
            <CardTitle>Portfolio CMS Guide</CardTitle>
            <Badge variant="secondary">Local Storage</Badge>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDismiss}
            className="h-8 w-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <Info className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900">Content Management System Active</h3>
                <p className="text-blue-700 text-sm mt-1">
                  Your portfolio now includes a local CMS for managing projects. Data is stored in your browser's localStorage.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">How to Use Your CMS</h3>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-accent text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-medium">Adding Projects</h4>
                  <p className="text-sm text-muted-foreground">Click the red + button in the bottom-right corner to add new projects with images, descriptions, and tags.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-accent text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-medium">Managing Content</h4>
                  <p className="text-sm text-muted-foreground">Edit existing projects, toggle featured status, or delete projects directly from the admin panel.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-accent text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-medium">Real-time Updates</h4>
                  <p className="text-sm text-muted-foreground">Changes appear immediately on your portfolio. Featured projects show in the main work section.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Camera className="w-5 h-5 text-red-accent" />
              <h3 className="font-semibold">Adding Your Own Images</h3>
            </div>
            
            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Upload className="w-4 h-4 text-green-600" />
                  <h4 className="font-medium text-green-900">Option 1: Online Image Hosting (Recommended)</h4>
                </div>
                <div className="text-sm text-green-800 space-y-2">
                  <p><strong>🔗 Imgur:</strong> Upload to imgur.com → right-click image → "Copy image address"</p>
                  <p><strong>📁 GitHub:</strong> Upload to your repository → click file → copy raw file URL</p>
                  <p><strong>☁️ Cloudinary:</strong> Professional hosting with automatic optimization</p>
                  <p><strong>📄 Google Drive:</strong> Upload → Share → "Anyone with link" → copy link</p>
                  <p className="text-green-700 font-medium">✅ Best for: High-quality images, reliable hosting</p>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Image className="w-4 h-4 text-blue-600" />
                  <h4 className="font-medium text-blue-900">Option 2: Base64 Images (For small images)</h4>
                </div>
                <div className="text-sm text-blue-800 space-y-2">
                  <p>Convert your image to text using online converters:</p>
                  <p><strong>🔄 base64-image.de</strong> or <strong>base64.guru</strong></p>
                  <p>Copy the full base64 string starting with "data:image/..."</p>
                  <p className="text-blue-700 font-medium">✅ Best for: Small images, no external dependencies</p>
                </div>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Link className="w-4 h-4 text-purple-600" />
                  <h4 className="font-medium text-purple-900">Option 3: Direct URLs</h4>
                </div>
                <div className="text-sm text-purple-800 space-y-2">
                  <p><strong>🎨 Unsplash:</strong> unsplash.com (free high-quality stock photos)</p>
                  <p><strong>🌐 Your website:</strong> If you have a website, upload images there</p>
                  <p><strong>📱 Social media:</strong> Instagram, Twitter (get direct image URLs)</p>
                  <p className="text-amber-700 font-medium">⚠️ Note: External URLs may break if source is removed</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-medium text-red-900 mb-2">🚀 Quick Start: Using Imgur (Easiest Method)</h4>
              <ol className="text-sm text-red-800 space-y-1 list-decimal list-inside">
                <li>Go to <strong>imgur.com</strong></li>
                <li>Click "New post" and upload your image</li>
                <li>Once uploaded, right-click the image</li>
                <li>Select "Copy image address" or "Copy image location"</li>
                <li>Paste this URL into the "Image URL" field in your CMS</li>
              </ol>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Features</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Add/Edit/Delete Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Featured Project Toggle</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Image Management</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Tag Organization</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Live Preview</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Local Data Storage</span>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-medium text-amber-900 mb-1">💾 Data Storage Note</h4>
            <p className="text-amber-700 text-sm">
              Your projects are stored locally in your browser. To backup or sync across devices, consider upgrading to a cloud-based CMS like Supabase.
            </p>
          </div>

          <div className="flex justify-end space-x-2">
            <Button onClick={handleDismiss} className="bg-red-accent hover:bg-red-accent-dark text-white">
              Got it, let's start! 🚀
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
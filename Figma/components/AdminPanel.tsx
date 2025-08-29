import { useState } from 'react';
import { Plus, Edit2, Trash2, GripVertical, Save, X, Eye, EyeOff } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useProjects, Project } from '../hooks/useProjects';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectFormData {
  title: string;
  description: string;
  image: string;
  tags: string;
  link: string;
  github: string; // Keep as string for form handling, but allow empty
  featured: boolean;
  order: number;
}

export default function AdminPanel() {
  const { projects, addProject, updateProject, deleteProject, reorderProjects } = useProjects();
  const [isOpen, setIsOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState<ProjectFormData>({
    title: '',
    description: '',
    image: '',
    tags: '',
    link: '',
    github: '',
    featured: true,
    order: projects.length + 1
  });

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      image: '',
      tags: '',
      link: '',
      github: '',
      featured: true,
      order: projects.length + 1
    });
    setEditingProject(null);
  };

  const handleSubmit = () => {
    const projectData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      github: formData.github.trim() || undefined // Convert empty string to undefined
    };

    if (editingProject) {
      updateProject(editingProject.id, projectData);
    } else {
      addProject(projectData);
    }

    resetForm();
    setIsOpen(false);
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      tags: project.tags.join(', '),
      link: project.link,
      github: project.github || '', // Handle undefined github
      featured: project.featured,
      order: project.order
    });
    setIsOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      deleteProject(id);
    }
  };

  const toggleFeatured = (project: Project) => {
    updateProject(project.id, { featured: !project.featured });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button 
            className="rounded-full w-14 h-14 bg-red-accent hover:bg-red-accent-dark text-white shadow-lg"
            onClick={() => resetForm()}
          >
            <Plus className="w-6 h-6" />
          </Button>
        </DialogTrigger>
        
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>{editingProject ? 'Edit Project' : 'Add New Project'}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </DialogTitle>
            <DialogDescription>
              {editingProject 
                ? 'Modify the details of your project and see a live preview on the right.'
                : 'Fill in the details for your new project and see a live preview on the right.'
              }
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Form */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Project Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter project title"
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your project..."
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="image" className="flex items-center space-x-2">
                  <span>Image URL</span>
                  <Badge variant="outline" className="text-xs">
                    Imgur recommended
                  </Badge>
                </Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://i.imgur.com/example.jpg or data:image/jpeg;base64,..."
                />
                <div className="text-xs text-muted-foreground mt-1 space-y-1">
                  <p>💡 <strong>Quick tip:</strong> Upload to imgur.com → right-click image → "Copy image address"</p>
                  <p>🔗 Also supports: GitHub raw URLs, Google Drive links, Base64 strings</p>
                </div>
              </div>

              <div>
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="Game Design, UI Design, Systems Design"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="link">Project Link</Label>
                  <Input
                    id="link"
                    value={formData.link}
                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                    placeholder="https://project-url.com"
                  />
                </div>
                <div>
                  <Label htmlFor="github" className="flex items-center space-x-2">
                    <span>GitHub Link</span>
                    <Badge variant="outline" className="text-xs">
                      Optional
                    </Badge>
                  </Label>
                  <Input
                    id="github"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    placeholder="https://github.com/user/repo (optional)"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                />
                <Label htmlFor="featured">Featured Project</Label>
              </div>

              <Button
                onClick={handleSubmit}
                className="w-full bg-red-accent hover:bg-red-accent-dark text-white"
                disabled={!formData.title || !formData.description}
              >
                <Save className="w-4 h-4 mr-2" />
                {editingProject ? 'Update Project' : 'Add Project'}
              </Button>
            </div>

            {/* Preview */}
            <div className="space-y-4">
              <h3 className="font-semibold">Preview</h3>
              <Card className="overflow-hidden">
                <div className="relative">
                  {formData.image && (
                    <ImageWithFallback
                      src={formData.image}
                      alt={formData.title || 'Project preview'}
                      className="w-full h-32 object-cover"
                    />
                  )}
                  {!formData.image && (
                    <div className="w-full h-32 bg-gray-200 flex items-center justify-center text-gray-500">
                      No image
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">{formData.title || 'Project Title'}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {formData.description || 'Project description will appear here...'}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {formData.tags.split(',').map((tag, index) => (
                      tag.trim() && (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag.trim()}
                        </Badge>
                      )
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Existing Projects List */}
              <div className="space-y-2">
                <h3 className="font-semibold">Existing Projects</h3>
                <div className="max-h-64 overflow-y-auto space-y-2">
                  {projects.map((project) => (
                    <Card key={project.id} className="p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium truncate">{project.title}</h4>
                            {project.featured && (
                              <Badge variant="default" className="bg-red-accent text-white text-xs">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground truncate">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1 ml-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleFeatured(project)}
                            className="h-8 w-8 p-0"
                          >
                            {project.featured ? (
                              <Eye className="w-3 h-3" />
                            ) : (
                              <EyeOff className="w-3 h-3" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(project)}
                            className="h-8 w-8 p-0"
                          >
                            <Edit2 className="w-3 h-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(project.id)}
                            className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
import { Project } from '../hooks/useProjects';

export const seedDefaultProjects = (): Project[] => {
  return [
    {
      id: '1',
      title: "Mystic Quest",
      description: "An immersive RPG game designed with focus on player progression and narrative choices. Created comprehensive game systems and UI designs that enhance the storytelling experience through interactive elements.",
      image: "https://images.unsplash.com/photo-1676263813382-bb5ba4b63f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGVzaWduJTIwaW50ZXJmYWNlJTIwbW9ja3VwfGVufDF8fHx8MTc1NjM5MTk1NXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Game Design", "UI Design", "Systems Design", "Narrative Design"],
      link: "https://mysticquest-demo.com",
      github: "https://github.com/oliverraaggmo/mystic-quest",
      featured: true,
      order: 1,
      createdAt: new Date('2024-01-15').toISOString()
    },
    {
      id: '2',
      title: "Urban Planner",
      description: "A city-building simulation game with emphasis on sustainable development and resource management mechanics. Designed intuitive interfaces for complex urban planning systems.",
      image: "https://images.unsplash.com/photo-1601415650610-37070c1e3c35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYnVpbGRpbmclMjBzaW11bGF0aW9uJTIwbW9iaWxlfGVufDF8fHx8MTc1NjM5MTk1OHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Game Mechanics", "UX Research", "Prototyping", "Sustainability Design"],
      link: "https://urbanplanner-game.com",
      github: "https://github.com/oliverraaggmo/urban-planner",
      featured: true,
      order: 2,
      createdAt: new Date('2024-02-20').toISOString()
    },
    {
      id: '3',
      title: "Design System Hub",
      description: "A comprehensive design system and component library for a tech startup, focusing on consistency and scalability across multiple platforms and applications.",
      image: "https://images.unsplash.com/photo-1562601555-513820e5d0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzJTIwdWl8ZW58MXx8fHwxNzU2MzgzNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Design Systems", "UI Components", "Documentation", "Accessibility"],
      link: "https://designsystem-hub.com",
      // No GitHub link - demonstrating optional field
      featured: true,
      order: 3,
      createdAt: new Date('2024-03-10').toISOString()
    },
    {
      id: '4',
      title: "Brand Identity: EcoFlow",
      description: "Complete brand identity design for a sustainable energy startup, including logo design, color palette, typography system, and brand guidelines for consistent application across all touchpoints.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc1NjM5MTk1OXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Brand Design", "Logo Design", "Visual Identity", "Sustainability"],
      link: "https://ecoflow-brand.com",
      // No GitHub link - brand design projects typically don't have code repositories
      featured: false,
      order: 4,
      createdAt: new Date('2024-04-05').toISOString()
    }
  ];
};
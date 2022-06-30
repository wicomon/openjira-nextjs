interface SeedData {
  entries: Data[];
}

interface Data {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pendiente - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'En Progreso - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
      status: 'in-progress',
      createdAt: Date.now(),
    },
    {
      description: 'Finisheado - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
      status: 'finished',
      createdAt: Date.now(),
    },
  ]
}
const profile = {
  name: 'rob',
  age: 36,
  coords: {
    lat: 0,
    lng: 66,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// destructuring
const { age }: { age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

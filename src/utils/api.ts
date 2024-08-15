import axios from "axios";
import { BasedURL } from "./network/network";

// const API_URL = 'http://localhost:133

export interface College {
  id: number;
  name: string;
}

export async function fetchColleges(): Promise<College[]> {
  try {
    const response = await axios.get<{ data: { id: number, attributes: { name: string } }[] }>(`${BasedURL}/api/colleges`, {
      headers: {
        Authorization: `Bearer 19e2997dda9191742159292722a47302c7adf2405a71afccbe6996b12df0a94a58f1b3dd6590154af5140760a94c1393683900358275fc7bc512f04ba1cff16cd9a02b7386ccbc16892164e45e5826d1bddff81876da0cdf605d6f6228257d8db708c65bca1f7ef3cdf89261b70b7e10b762671534feab2322d5844b4d093cdd`
      }
    });
    return response.data.data.map(college => ({
      id: college.id,
      name: college.attributes.name,
    }));
  } catch (error: any) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch products from API');
  }
}

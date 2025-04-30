import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private API_KEY = 'UcBhRouTZymXeskkWbU7nw'; // your carbon interface API key

  constructor(private http: HttpClient) {}

  async getEmissionEstimate(fuelType: string, distanceKm: number): Promise<number> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.API_KEY}`,
      'Content-Type': 'application/json'
    });

    const payload = {
      type: 'vehicle',
      distance_unit: 'km',
      distance_value: distanceKm,
      fuel_source_type: fuelType.toLowerCase().replace(' ', '_')
    };

    try {
      const response: any = await firstValueFrom(
        this.http.post('https://www.carboninterface.com/api/v1/estimates', payload, { headers })
      );
      return response.data.attributes.carbon_kg;
    } catch (error) {
      console.error('Carbon API error', error);
      alert('Failed to fetch emission data');
      return 0;
    }
  }
}

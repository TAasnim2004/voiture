
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class VoitureService {
 private voitures: any[] = [];
  private id = 1;

  // Ajouter
  ajouter(data: any) {
    const v = { id: this.id++, ...data };
    this.voitures.push(v);
    return v;
  }

  // Afficher All
  findAll() {
    return this.voitures;
  }

  // Afficher By ID
  findById(id: number) {
    const v = this.voitures.find(v => v.id === id);
    if (!v) throw new NotFoundException();
    return v;
  }
}

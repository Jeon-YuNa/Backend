import { Column, Entity } from 'typeorm';

enum Rank {
  Silver = 'Silver',
  Gold = 'Gold',
  Platinum = 'Platinum',
}

@Entity('Customer')
export class Customer {
  @Column({ type: 'int', primary: true })
  id: number;
  @Column({ type: 'varchar', length: 100 })
  name: string;
  @Column({ type: 'varchar' })
  rank: string;
  @Column({ type: 'int' })
  age: number;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('breads')
export class breads {
  @PrimaryGeneratedColumn()
  @Column({ type: 'int', primary: true })
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'int' })
  price: number;
}
5;

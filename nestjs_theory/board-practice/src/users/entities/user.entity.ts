import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 30 })
  nickname: string;
  @Column({ type: 'varchar' })
  pofileImage: string;
}

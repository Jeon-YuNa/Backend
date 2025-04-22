import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Guestbook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  author: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'int', default: 0 })
  likes: number;

  @CreateDateColumn()
  createdAt: Date;
}

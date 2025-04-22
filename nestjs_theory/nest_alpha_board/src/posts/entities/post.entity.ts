import { Reply } from 'src/replies/entities/reply.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'text' })
  content: string;

  @CreateDateColumn({ type: 'timestamp', name: 'create_at' })
  createAt: Date;

  // 1:n(사람:게시판)
  @ManyToOne(() => User, (user) => user.posts)
  author: User;

  @OneToMany(() => Reply, (reply) => reply.post)
  replies: Reply[];
}

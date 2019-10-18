import { BaseEntity } from './base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @Column({ type: 'varchar', length: 300 })
    FirstName: string;

    @Column({ type: 'varchar', length: 300, nullable: true })
    MiddleName: string;

    @Column({ type: 'varchar', length: 300 })
    LastName: string;

    @Column({ type: 'varchar', length: 300, unique: true })
    Email: string;

    @Column({ type: 'varchar', length: 300, unique: true })
    Password: string;

    @Column({ type: 'timestamptz', nullable: true })
    Age: Date;

    @Column({ type: 'varchar', length: 300, nullable: true })
    Icon: string;
}

import {Entity, BaseEntity, PrimaryGeneratedColumn,OneToMany, Column, ManyToOne, JoinColumn} from "typeorm"; 
import {BlogAuthor} from "./BlogAuthors.model"; 
import { BlogComment } from "./BlogComments.model";
@Entity("blogPost")
export class BlogPost extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id!: string;

  @Column({ nullable: true })
  public title!: string;

  @Column({ nullable: true })
  public content!: string;

  @ManyToOne(() => BlogAuthor, { nullable: true, eager: true }) @JoinColumn({ name: "blogAuthorId" })
  public blogAuthor!: BlogAuthor;

  @Column({ nullable: true })
  public blogAuthorId!: string;

  @OneToMany(() => BlogComment, blogComments => blogComments.blogPost, { nullable: true, lazy:true }) blogComments!: BlogComment[];  
}

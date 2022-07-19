import { BaseEntity, Column, OneToMany, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BlogComment } from "./BlogComments.model";
import { BlogPost } from "./BlogPosts.model";

@Entity("blogAuthor")
export class BlogAuthor extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id!: string;

  @Column({ nullable: true })
  public name!: string;

  @OneToMany(() => BlogPost, blogPosts => blogPosts.blogAuthor, { nullable: true, lazy:true })
   blogPosts!: BlogPost[];  

  @OneToMany(() => BlogPost, blogComments => blogComments.blogAuthor, { nullable: true, lazy:true }) blogComments!: BlogComment[];  
}

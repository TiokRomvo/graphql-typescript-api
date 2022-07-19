import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm"; 
import {BlogAuthor} from "./BlogAuthors.model";
import {BlogPost} from "./BlogPosts.model";  
@Entity("blogComment")
export class BlogComment extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id!: string;

  @Column({ nullable: true })
  public content!: string;

  @ManyToOne(() => BlogAuthor, { nullable: true, eager: true }) @JoinColumn({ name: "blogAuthorId" })
  public blogAuthor!: BlogAuthor;

  @Column({ nullable: true })
  public blogAuthorId!: string;

  @ManyToOne(() => BlogPost, { nullable: true, eager: true }) @JoinColumn({ name: "blogPostId" })
  public blogPost!: BlogPost;

  @Column({ nullable: true })
  public blogPostId!: string;
}

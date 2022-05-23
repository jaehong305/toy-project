import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Board } from '../entities/board.entity';

@ObjectType()
export class GetBoardsAndCount {
  @Field(() => [Board], { nullable: true })
  boards: Board[];

  @Field(() => Int)
  count: number;
}
